# Node.js Application Deployment on AWS EC2

##  Project Overview
This project demonstrates how to deploy a simple **Node.js (Express) application** on an **AWS EC2 instance** and keep it running continuously using **PM2**.  
The application is accessible using the **EC2 public IP address**.

---

##  Technologies Used
- Node.js
- Express.js
- AWS EC2 (Amazon Linux 2023)
- PM2 (Process Manager)
- Git & GitHub

---

##  Project Structure
nodeapp-ec2-deplyoment/
│── index.js
│── package.json
│── package-lock.json
│── README.md
│── node_modules/


---

##  Step 1: Launch EC2 Instance
- Create an EC2 instance
- AMI: **Amazon Linux 2023**
- Instance Type: **t2.micro**
- Create and download a **key pair (.pem)**

---

##  Step 2: Configure Security Group
Allow the following **Inbound Rules**:

| Type | Port | Source |
|----- |------|--------|
| SSH  | 22 | My IP |
| Custom TCP | 3000 | 0.0.0.0/0 |

---

## Step 3: Connect to EC2
```bash
ssh -i nodeapp-keypair.pem ec2-user@<EC2-PUBLIC-IP>
```

## Step 4: Install Required Packages
sudo dnf update -y
sudo dnf install nodejs git -y
verify
sudo dnf update -y
sudo dnf install nodejs git -y


## Step 5: Clone GitHub Repository
git clone https://github.com/Amitkumar-Vaghela/nodeapp-ec2-deplyoment.git
cd nodeapp-ec2-deplyoment
install dependency: npm install
run application : node index.js
output will be: Server running on port 3000


## Step 7: Install and Use PM2

PM2 keeps the application running even after SSH is closed.
sudo npm install -g pm2
pm2 start index.js --name nodeapp
pm2 save
Enable PM2 on system startup:pm2 startup


## Step 8: Verify Application Status
pm2 list
Status should be:  online


## Step 9: Access Application

Open in browser: http://http://3.110.84.57:3000
