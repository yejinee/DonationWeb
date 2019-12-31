const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const Users = require('./routes/Users');
const Coins = require('./routes/Coins');
const Groups = require('./routes/Groups');
const Program = require('./routes/Programs');
const Payment = require('./routes/Payments');
//const Blockchain = require('./routes/Blockchain');
const fileUpload = require('express-fileupload');

/*
//Hyperledger Bridge
const { FileSystemWallet, Gateway } = require("fabric-network"); // fabric sdk
const fs = require("fs");
const path = require("path");
const ccpPath = path.resolve(
  __dirname,
  "..",
  "..",
  "..",
  "basic-network",
  "connection.json"
); 
const ccpJSON = fs.readFileSync(ccpPath, "utf8");
const ccp = JSON.parse(ccpJSON);
*/

require('./config/passport');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(fileUpload());

app.use(passport.initialize());

app.get('/api', (req, res) => {
    res.send('홈 입니다.');
})
app.use('/api/user', Users);
app.use('/api/coin', Coins);
app.use('/api/group', Groups);
app.use('/api/pro', Program);
app.use('/api/pay', Payment);
//app.use('/api/blockchin', Blockchain);

app.listen(5000, () => {
    console.log(5000+'서버가 열렸습니다.');
})

/*
app.post("/api/donacoin/", async function(req, res) { // 돈 기부 할 때 실행 되게 할 코드, /api/donacoin 주소로 요청 할 시.
    try {
      var campno = req.body.campno;
  
      var donacoin = req.body.donacoin;
  
      var username = req.body.username;
  
      // Create a new file system based wallet for managing identities.
  
      const walletPath = path.join(process.cwd(), "..", "wallet");  // wallet의 위치를 파악
  
      const wallet = new FileSystemWallet(walletPath);
  
      console.log(`Wallet path: ${walletPath}`); // walletPath가 어디로 지정되어있는지 확인
  
      // Check to see if we've already enrolled the user.
  
      const userExists = await wallet.exists("user1"); // user 1이 존재하는지 
  
      if (!userExists) { // 존재하지 않으면 밑의 글 출력하며 종료
        console.log(
          'An identity for the user "user1" does not exist in the wallet'
        );
  
        console.log("Run the registerUser.js application before retrying");
  
        return;
      }
  
      // Create a new gateway for connecting to our peer node.
  
      const gateway = new Gateway(); // network를 연결할 gateway를 만듦.
  
      await gateway.connect(ccp, { // gateway 연결.
        wallet,
        identity: "user1",
        discovery: { enabled: false }
      });
      // Get the network (channel) our contract is deployed to.
  
      const network = await gateway.getNetwork("mychannel");
      // Get the contract from the network.
  
      const contract = network.getContract("realcode");
      // Submit the specified transaction.
  
      // createCar transaction - requires 5 argument, ex: ('createCar', 'CAR12', 'Honda', 'Accord', 'Black', 'Tom')
  
      // changeCarOwner transaction - requires 2 args , ex: ('changeCarOwner', 'CAR10', 'Dave')
  
      //        await contract.submitTransaction('createCar', 'CAR11', 'Hnda', 'Aord', 'Bla', 'Tom')
  
      console.log(campno, donacoin, username);
  
      await contract.submitTransaction( // donacoin이라는 함수를 그 다음의 인자들과 함께 실행한다.
        "donacoin",
        campno,
        donacoin,
        username
      );
  
      console.log("Transaction has been submitted");
  
      // Disconnect from the gateway.
  
      await gateway.disconnect(); // 연결 종료
  
      // res.status(200).json({response: 'Transaction has been submitted'})
  
      res.send(
          "success"
      ); // 성공하면 react에서 페이지 전환.
  
      // res.redirect('/')
    } catch (error) {
      console.error(`Failed to submit transaction: ${error}`);
  
      res.status(400).json(error);
    }
  });*/

  