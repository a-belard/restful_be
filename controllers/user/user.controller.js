const { validateUser, User } = require("../../models/user/user.model");

/** Signup admin */
exports.registerAdmin = async (req, res) => {
  try {
    const { names, email, phone, password, nationalID } = req.body;

    //validation
    const { error } = validateUser(req.body);
    if (error)
      return res.status(400).json({
        success: false,
        status: 400,
        message: error.details[0].message,
      });

    //check if user exists by checking email or nationalID or phone
    const user = await User.findOne({
      $or: [
        {
          email,
        },
        {
          nationalID,
        },
        {
          phone,
        },
      ],
    });
    if (user)
      return res.status(400).json({
        success: false,
        status: 400,
        message: "user exist",
      });

    //create new user
    const newUser = new User({
      names,
      email,
      password,
      nationalID,
      phone,
    });

    //save user
    await newUser.save();

    //generate token
    const token = await newUser.generateAuthToken();

    //new user data with no password
    const userData = {
      names: newUser.names,
      email: newUser.email,
      phone: newUser.phone,
      nationalID: newUser.nationalID,
    };
    return res.status(201).json({
      success: true,
      status: 201,
      message: "user created successfully",
      data: userData,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

/** Login */
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    //check if user exists
    const user = await User.findOne({
      email,
    });
    if (!user)
      return res.status(400).json({
        success: false,
        status: 400,
        message: "Invalid email or password",
      });

    //compare password
    const isMatch = await user.comparePassword(password);
    if (!isMatch)
      return res.status(400).json({
        success: false,
        status: 400,
        message: "Invalid email or password",
      });
    const userData = {
      names: user.names,
      email: user.email,
      phone: user.phone,
      nationalID: user.nationalID,
    };

    //generate token
    const token = await user.generateAuthToken();
    res.cookie("token", "Bearer " + token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    //send token to client
    res.status(200).json({
      success: true,
      status: 200,
      message: "login successful",
      data: userData,
      token: token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
