const UserAccountDetailsRepository = require('../repositories/userAccountDetailsRepository');
const logger = require('../logger/logger');
const {request} = require("express");

const getAccountDetails = async (request, response) => {
    const { userId } = request.query;
    const userAccountDetailsRepository = new UserAccountDetailsRepository();
    const existingUserAccountDetails = await userAccountDetailsRepository.select(userId);
    if (existingUserAccountDetails) {
        logger.info(`existingUserAccountDetails ${existingUserAccountDetails.first_name}`);
        return response.status(200).json({
            id: existingUserAccountDetails.id,
            userId: existingUserAccountDetails.userId,
            firstName:existingUserAccountDetails.first_name,
            lastName: existingUserAccountDetails.last_name,
            address1: existingUserAccountDetails.address_1,
            address2:existingUserAccountDetails.address_2,
            city: existingUserAccountDetails.city,
            state: existingUserAccountDetails.state,
            zipCode: existingUserAccountDetails.zip_code,
            phoneNumber: existingUserAccountDetails.phone_number,
            email: existingUserAccountDetails.email
        });
    } else {
        logger.info('No data for that account.');
        return response.status(204).json({});
    }
};

const createAccountDetails = async (request, response) => {
    const {
        userId, firstName, lastName, address1, address2,
        city, state, zipCode, phoneNumber, email
    } = request.body;
    const userAccountDetailsRepository = new UserAccountDetailsRepository();
    const userAccountDetails = await userAccountDetailsRepository.insert(
        userId, firstName, lastName, address1, address2,
        city, state, zipCode, phoneNumber, email
    );
    return response.status(201).json({
        id: userAccountDetails.id
    });
};

const updateAccountDetails = async (request, response) => {
    const {
        userId, firstName, lastName, address1, address2,
        city, state, zipCode, phoneNumber, email
    } = request.body;
    const userAccountDetailsRepository = new UserAccountDetailsRepository();
    const existingUserDetails = await userAccountDetailsRepository.select(userId);
    if (existingUserDetails) {
        const userAccountDetailsRepository = new UserAccountDetailsRepository();
        const updatedUserDetails = await userAccountDetailsRepository.update(
            userId, firstName, lastName, address1, address2,
            city, state, zipCode, phoneNumber, email
        );
        logger.info("Updated data for user");
        return response.status(200).json({
            userDetails: updatedUserDetails
        })
    } else {
        logger.info(("Could not update, no existing info."))
        return response.status(404).json()
    }
}

module.exports = { createAccountDetails, getAccountDetails, updateAccountDetails }