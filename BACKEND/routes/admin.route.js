const express = require("express");
const router = express.Router();
const { getAllAdmin, createAdmin, updateAdmin, deleteAdmin, loginAdmin } = require("../controllers/admin.controller");

router.post("/", createAdmin);
router.post("/login", loginAdmin);
router.get("/", getAllAdmin);
router.put("/:id", updateAdmin);
router.delete("/:id", deleteAdmin);

module.exports = router;
