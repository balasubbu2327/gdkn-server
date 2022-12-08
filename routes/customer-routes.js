const express = require("express");
const router = express.Router();
const Customer = require("../model/Customer");
const customersController = require("../controllers/customers-controller");

router.get("/customers", customersController.getAllCustomers);
router.post("/addCustomer", customersController.addCustomer);
router.get("/findCustomer/:id", customersController.getById);
router.put("/updateCustomer/:id", customersController.updateCustomer);
router.delete("/deleteCustomer/:id", customersController.deleteCustomer);

module.exports = router;
