const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

// Initialize DynamoDB
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    try {
        const body = JSON.parse(event.body);

        const item = {
            id: uuidv4(),
            name: body.name,
            email: body.email,
            phone: body.phone,
            enquiry: body.enquiry,
            message: body.message,
            submittedAt: new Date().toISOString()
        };

        await dynamoDB.put({
            TableName: "ContactSubmissions",
            Item: item
        }).promise();

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Form submitted successfully!" })
        };

    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Internal Server Error" })
        };
    }
};
