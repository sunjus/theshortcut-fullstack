const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    category: String,
    price: Number,
    thumbnail: String,
    date: Date,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    meta: {
      nApproved: { type: Number, default: 0 },
    },
    responseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    content: {
      type: String,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

CommentSchema.virtual("thumbnail_url").get(function () {
  return `http://localhost:8000/files/${this.thumbnail}`;
});

module.exports = mongoose.model("Comment", CommentSchema);
