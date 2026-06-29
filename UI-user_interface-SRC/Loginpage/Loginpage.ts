import { Page, Locator } from '@playwright/test';
import { BaseClass } from '../Utils/baseClass';

declare const process: any;

export class LoginPage extends BaseClass {
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  async goto() {
    await this.navigate(process.env.BASE_URL || 'https://www.saucedemo.com/');
  }

  async login(username: string, password: string) {
    await this.fill(this.usernameInput, username, );
    await this.fill(this.passwordInput, password, );
    await this.click(this.loginButton);
  }

  async getErrorText(): Promise<string> {
    return this.getText(this.errorMessage);
  }
}