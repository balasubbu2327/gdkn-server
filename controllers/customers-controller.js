const { request } = require("express");
const Customer = require("../model/Customer");

// GET ALL CUSTOMERS

const getAllCustomers = async (req, res, next) => {
  let customers;
  try {
    customers = await Customer.find();
  } catch (err) {
    console.log(err);
  }

  if (!customers) {
    return res.status(404).json({ message: "No Customers found" });
  }
  return res.status(200).json({ customers });
};

// GET A SINGLE CUSTOMER

const getById = async (req, res, next) => {
  const id = req.params.id;
  let customer;
  try {
    customer = await Customer.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!customer) {
    return res.status(404).json({ message: "No Customer found" });
  }
  return res.status(200).json({ customer });
};

// ADD A CUSTOMER

const addCustomer = async (req, res, next) => {
  const {
    username,
    firstname,
    lastname,
    email,
    password,
    phone,
    dob,
    gender,
    address,
    city,
    state,
    country,
    zipcode,
    image,
  } = req.body;
  let customer;
  try {
    customer = new Customer({
      username,
      firstname,
      lastname,
      email,
      password,
      phone,
      dob,
      gender,
      address,
      city,
      state,
      country,
      zipcode,
      image,
    });
    await customer.save();
  } catch (err) {
    console.log(err);
  }

  if (!customer) {
    return res.status(500).json({ message: "Unable To Add Customer" });
  }
  return res.status(201).json({ customer });
};

// UPDATE A CUSTOMER

const updateCustomer = async (req, res, next) => {
  const id = req.params.id;
  const {
    username,
    firstname,
    lastname,
    email,
    password,
    phone,
    dob,
    gender,
    image,
    address,
    city,
    state,
    country,
    zipcode,
  } = req.body;
  let customer;
  try {
    customer = await Customer.findByIdAndUpdate(id, {
      username,
      firstname,
      lastname,
      email,
      password,
      phone,
      dob,
      gender,
      image,
      address,
      city,
      state,
      country,
      zipcode,
    });
    customer = await customer.save();
  } catch (err) {
    console.log(err);
  }
  if (!customer) {
    return res.status(404).json({ message: "Unable To Update By this ID" });
  }
  return res.status(200).json({ customer });
};

// DELETE A CUSTOMER

const deleteCustomer = async (req, res, next) => {
  const id = req.params.id;
  let customer;
  try {
    customer = await Customer.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!customer) {
    return res.status(404).json({ message: "Unable To Delete By this ID" });
  }
  return res.status(200).json({ message: "Customer Successfully Deleted" });
};

exports.getAllCustomers = getAllCustomers;
exports.addCustomer = addCustomer;
exports.getById = getById;
exports.updateCustomer = updateCustomer;
exports.deleteCustomer = deleteCustomer;
