const express = require("express");
const cors = require("cors");
const Jwt = require("jsonwebtoken");
require("./db/config");
const User = require("./db/User");
const Product = require("./db/Product");
const multer = require('multer');
// const Product = require("./db/Product");
const app = express();
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

const JwtKey = "e-comm";

const storage = multer.memoryStorage(); // Store the image data in memory
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5, // 5MB limit (adjust as needed)
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed.'), false);
    }
  },
});

app.post("/register", async (req, resp) => {
  // console.log(req.body);
  if (req.body.email && req.body.password && req.body.name) {
    let user = new User(req.body);
    if (user) {
      Jwt.sign({ user }, JwtKey, async (err, token) => {
        if (err) {
          resp.send({ result: `some thing went wrong  ${err}` });
        } else {
          let result = await user.save();
          result = result.toObject();
          delete result.password;
          resp.send({ user: result, auth: token });
        }
      });
    }
  } else {
    resp.send({ result: "please enter name,email and password" });
  }
});

app.post("/login", async (req, resp) => {
  // resp.send(req.body)
  //   console.log(req.body);

  if (req.body.email && req.body.password) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      Jwt.sign({ user }, JwtKey, (err, token) => {
        if (err) {
          resp.send({ result: `some thing went wrong  ${err}` });
        } else {
          resp.send({ user, auth: token });
        }
      });
    } else {
      resp.send({ result: "please enter correct name and email" });
    }
  } else {
    resp.send({ result: "please enter name and email" });
  }
});

app.post("/add-product", upload.single('image'), async (req, res) => {
  try {
    const { name, price, category, userId, company } = req.body;
    let image = null;

    // Check if an image was uploaded
    if (req.file) {
      image = {
        data: req.file.buffer, 
        contentType: req.file.mimetype
      };
    }

    const product = new Product({ name, price, category, userId, company, image });
    const result = await product.save();
    res.send(result);
  } catch (error) {
    res.status(500).send({ result: "Something went wrong. Please try again later." });
  }
});

app.get("/products", async (req, resp) => {
  try {
    let products = await Product.find();
    if (products.length > 0) {
      resp.send(products);
    } else {
      resp.send({ result: `data not found  ${products}` });
    }
  } catch {
    resp.send({ result: "some thing went wrong  please try after some time" });
  }
});

app.delete("/products/:id", verifyToken, async (req, resp) => {
  try {
    const result = await Product.deleteOne({ _id: req.params.id });
    // console.log("result",result);
    resp.send(result);
  } catch {
    resp.send({ result: "some thing went wrong  please try after some time" });
  }
  // resp.send(req.params.id)
});

app.get("/products/:id", verifyToken, async (req, resp) => {
  try {
    let result = await Product.findOne({ _id: req.params.id });

    if (result) {
      resp.send(result);
    } else {
      resp.status(404).send({ error: "Record not found" });
    }
  } catch (error) {
    resp.status(500).send({ error: "Internal Server Error", error });
  }
});

app.put("/products/:id", verifyToken, async (req, resp) => {
  try {
    let result = await Product.updateOne(
      {
        _id: req.params.id,
      },
      {
        $set: req.body,
      }
    );
    resp.send(result);
  } catch {
    resp.send({ result: "some thing went wrong  please try after some time" });
  }
});

app.get("/search/:key", verifyToken, async (req, resp) => {
  try {
    let result = await Product.find({
      $or: [
        { name: { $regex: req.params.key } },
        { category: { $regex: req.params.key } },
        { company: { $regex: req.params.key } },
      ],
    });
    resp.send(result);
  } catch {
    resp.send({ result: "some thing went wrong  please try after some time" });
  }
});

app.get("/products/user/:userId", verifyToken, async (req, resp) => {
  try {
    const userId = req.params.userId;
    const products = await Product.find({ userId: userId });

    resp.send(products);
  } catch (error) {
    resp.status(500).send({ error: "Internal Server Error", error });
  }
});

app.get("/admin", async (req, resp) => {
  // const name = req.params.name
  try {
    let dataFromModel1 = await User.find().exec();
    let dataFromModel2 = await Product.find().exec();

    let comData = { dataFromModel1, dataFromModel2 };
    resp.send(comData);
  } catch {
    resp.send({ result: "some thing went wrong  please try after some time" });
  }
});

app.delete("/admin/user-delete/:id", verifyToken, async (req, resp) => {
  try {
    const result = await User.deleteOne({ _id: req.params.id });
    // console.log("result",result);
    resp.send(result);
  } catch {
    resp.send({ result: "some thing went wrong  please try after some time" });
  }
});

app.put("/admin/user-update/:id",verifyToken, async (req, resp) => {
  try {
    let result = await User.updateOne(
      {
        _id: req.params.id,
      },
      {
        $set: req.body,
      }
    );
    resp.send(result);
  } catch {
    resp.send({ result: "some thing went wrong  please try after some time" });
  }
});

function verifyToken(req, resp, next) {
  // console.log(" working...  :) ");
  let token = req.headers["authorization"];
  if (token) {
    token = token.split(" ")[1];
    // console.log("token", token);
    Jwt.verify(token, JwtKey, function (err, decoded) {
      if (err) {
        resp.status(401).send({ result: "send correct token" });
      } else {
        // console.log("decoded",decoded);
        next();
      }
    });
  } else {
    resp.status(403).send({ result: "send with token" });
  }
}

app.listen(5000, () => {
  console.log("Server is running on port http://127.0.0.1:5000");
  console.log(`base url is ? http://127.0.0.1:5000/`);
});
