const express = require("express");
const router = express.Router();
const {
  handleCreateShortUrl,
  handleRedirectWithShortId,
  handleGetShortIdAnalytics,
} = require("../controller/url");

router.post("/", handleCreateShortUrl);
router.get("/:shortId", handleRedirectWithShortId);
router.get("/analytics/:shortId", handleGetShortIdAnalytics);
module.exports = router;
