const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const PIMPage = require('../pages/PIMPage');

test('Add new employee test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const pimPage = new PIMPage(page);

    // Step 1: Navigate to the login page
    await loginPage.navigate();

    // Step 2: Login with credentials
    await loginPage.login('Admin', 'admin123');

    // Step 3: Navigate to PIM
    await pimPage.navigateToPIM();

    // Step 4: Add new employee
    await pimPage.clickAddEmployee();
    const employeeId = await pimPage.addEmployee('Gob', 'test');

    // Step 5: Verify employee ID is not empty
    expect(employeeId).toBeTruthy();
    expect(employeeId.length).toBeGreaterThan(0);
});
