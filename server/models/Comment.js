const { Schema, model } = require ("mongoose")

const commentSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
    },
    post: { type: String, required: true },
    username: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("Comment", commentSchema);