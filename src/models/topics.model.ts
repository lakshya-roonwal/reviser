import { Schema, models, model } from "mongoose";

const topicSchema = new Schema(
  {
    name: String,
    revisedCount: Number,
  },
  { timestamps: true }
);

const Topic = models.Topic || model("topic", topicSchema);
