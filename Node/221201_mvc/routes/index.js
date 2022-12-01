var express = require("express");
var controller = require("../controller/Cmain");
const router = express.Router();


router.get("/", controller.main);
router.get("/test", controller.test);

//router.post("/postform", controller.post);


router.get("/practice1", controller.post);
router.post("/practice1", controller.good);
// 라우터에 대한 모든 정보를 컨트롤러 main에 다 저장해두겠다.

module.exports = router;

