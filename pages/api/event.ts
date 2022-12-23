import { handleUninstall, handleUnfurl, handleReactionAdded, handleReactionRemoved, handleMessage } from "@/lib/slack";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.body.challenge) return res.status(200).json(req.body); // unique case for Slack challenge
  console.log({eventType: req.body.event.type})
  if (req.body.event.type === "app_uninstalled") {
    return handleUninstall(req, res);
  }

  if (req.body.event.type === "link_shared") {
    return handleUnfurl(req, res);
  }

  if (req.body.event.type === "reaction_added") {
    return handleReactionAdded(req, res);
  }

  if (req.body.event.type === "message") {
    return handleMessage(req, res);
  }

  if (req.body.event.type === "reaction_removed") {
    return handleReactionRemoved(req, res);
  }

  return res.status(404).json({ message: "Unknown event type" });
}

// http://localhost:3000/api/event
// curl -d '{"type": "link_shared"}' -H 'Content-Type: application/json' https://slack.mtdr.dev/api/event