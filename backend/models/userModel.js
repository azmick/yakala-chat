const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: { type: String, required },
    email: { type: String, required },
    password: { type: String, required },
    pic: {
      type: String,
      required,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
