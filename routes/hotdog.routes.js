const Router = require("express");
const router = new Router();
const hotdogController = require("../controllers/hotdog.controller");
router.post("/hotdog", hotdogController.createHotdog);
router.get("/hotdog", hotdogController.getHotdogs);
router.get("/hotdog/:id", hotdogController.getOneHotdog);
router.put("/hotdog", hotdogController.updateHotdog);
router.delete("/hotdog/:id", hotdogController.deleteHotdog);

module.exports = router;
