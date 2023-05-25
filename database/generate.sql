CREATE TABLE data (
    id INT NOT NULL AUTO_INCREMENT,
    productID VARCHAR(255) NOT NULL,
    productName VARCHAR(255) NOT NULL,
    amount INT NOT NULL,
    customerName VARCHAR(255) NOT NULL,
    status INT NOT NULL,
    transactionDate DATETIME NOT NULL,
    createBy VARCHAR(255) NOT NULL,
    createOn DATETIME NOT NULL,
    PRIMARY KEY (id)
)

CREATE TABLE status (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
)