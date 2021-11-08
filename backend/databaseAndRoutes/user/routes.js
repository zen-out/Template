const express = require("express");
const router = express.Router();
const db = require("./queries");
const session = require("express-session");

router.get("/", async (req, res) => {});

router.get("/api/:id", async (req, res) => {});

// based on condition
router.get("/api/:id", async (req, res) => {});
router.post("/api/things", async (req, res) => {});
router.edit("", async (req, res) => {});
router.edit("", async (req, res) => {});
router.delete("", async (req, res) => {});

module.exports = router;
