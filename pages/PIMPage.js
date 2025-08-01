class PIMPage {
    constructor(page) {
        this.page = page;
        this.pimMenu = '//span[text()="PIM"]';
        this.addEmployeeButton = '//button[normalize-space()="Add"]';
        this.firstNameInput = 'input[name="firstName"]';
        this.lastNameInput = 'input[name="lastName"]';
        this.employeeId = '//label[normalize-space()="Employee Id"]/parent::div/following-sibling::div/input';
        this.saveButton = 'button[type="submit"]';
    }

    async navigateToPIM() {
        await this.page.click(this.pimMenu);
    }

    async clickAddEmployee() {
        await this.page.click(this.addEmployeeButton);
    }

    async addEmployee(firstName, lastName) {
        await this.page.fill(this.firstNameInput, firstName);
        await this.page.fill(this.lastNameInput, lastName);
        const employeeIdValue = await this.getEmployeeId();
        await this.page.click(this.saveButton);
        return employeeIdValue;
    }

    async getEmployeeId() {
        const employeeIdInput = await this.page.locator(this.employeeId);
        const value = await employeeIdInput.inputValue();
        return value;
    }
}

module.exports = PIMPage;
