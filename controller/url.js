const URL = require("../model/url");
const shortid = require("shortid");

const handleCreateShortUrl = async (req, res) => {
  const body = req.body;
  console.log(`URL:${body.url}`);
  if (body && body.url) {
    const shortId = shortid.generate();

    console.log(shortId);
    await URL.create({
      shortId: shortId,
      redirectURL: body.url,
      visitHistory: [],
    });
    return res.status(201).json({ status: "Success", shortId: shortId });
  } else {
    return res
      .status(400)
      .json({ status: "Failed", error: "No body or parameter passed" });
  }
};

const handleRedirectWithShortId = async (req, res) => {
  const shortId = req.params.shortId;
  try {
    const data = await URL.findOneAndUpdate(
      { shortId },
      {
        $push: {
          visitHistory: { timestamp: Date.now() },
        },
      }
    );
    console.log(data.redirectURL);
    return res.redirect(data.redirectURL);
  } catch (err) {
    return res
      .status(400)
      .json({ status: "failed", error: `incorrect short-id: ${shortId}` });
  }
};

const handleGetShortIdAnalytics = async (req, res) => {
  const shortId = req.params.shortId;
  try {
    const data = await URL.findOne({ shortId });
    return res.status(202).json({
      status: "success",
      visits: data.visitHistory.length,
      analytics: data,
    });
  } catch (err) {
    return res
      .status(400)
      .json({ status: "failed", error: `incorrect short-id: ${shortId}` });
  }
};

module.exports = {
  handleCreateShortUrl,
  handleRedirectWithShortId,
  handleGetShortIdAnalytics,
};
