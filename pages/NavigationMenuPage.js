import { expect } from "@playwright/test";
import { lumoURL } from "../environment.config";

export const  NavigationMenuPage = class NavigationMenuPage{
    constructor (page){
        this.page = page;
        this.whatsNewMenu = page.locator('a[href="https://magento.softwaretestingboard.com/what-is-new.html"]');
        this.womensMenu = page.locator('//nav[@class="navigation"]/ul/li[2]/a');
        this.womensTops = page.locator('//nav[@class="navigation"]/ul/li[2]/ul/li[1]/a');
        this.womensBottoms = page.locator('//nav[@class="navigation"]/ul/li[2]/ul/li[2]/a');
        this.womensJackets = page.locator('//nav[@class="navigation"]/ul/li[2]/ul/li[1]/ul/li[1]');
        this.womensHoddies = page.locator('//nav[@class="navigation"]/ul/li[2]/ul/li[1]/ul/li[2]');
        this.womensTees = page.locator('//nav[@class="navigation"]/ul/li[2]/ul/li[1]/ul/li[3]');
        this.womensTanks = page.locator('//nav[@class="navigation"]/ul/li[2]/ul/li[1]/ul/li[4]')
        
    }

    async navigatingToWhatsNewPage(){
        await this.whatsNewMenu.click();
        expect(this.page).toHaveURL(lumoURL+"what-is-new.html");
        await this.page.waitForTimeout(2000);
    }

    async navigatingToWomensTopsPage(){
        await this.womensMenu.hover({force:true});
        await this.womensTops.click();
        expect(this.page).toHaveURL(lumoURL+"women/tops-women.html");
        await this.page.waitForTimeout(2000);
    }

    async navigatingToWomensBottmsPage(){
        await this.womensMenu.hover({force:true});
        await this.womensBottoms.click();
        expect(this.page).toHaveURL(lumoURL+"women/bottoms-women.html");
        await this.page.waitForTimeout(2000);
    }

    async navigtingToJacketsPage(){
        await this.womensMenu.hover({force:true});
        await this.womensTops.hover({force:true});
        await this.womensJackets.click();
        expect(this.page).toHaveURL(lumoURL+"women/tops-women/jackets-women.html");
        await this.page.waitForTimeout(2000);
    }

    async navigatingToHoddiesPage(){
        await this.womensMenu.hover({force:true});
        await this.womensTops.hover({force:true});
        await this.womensHoddies.click();
        expect(this.page).toHaveURL(lumoURL+"women/tops-women/hoodies-and-sweatshirts-women.html");
        await this.page.waitForTimeout(2000);
    }

    async navigatingToTeesPage(){
        await this.womensMenu.hover({force:true});
        await this.womensTops.hover({force:true});
        await this.womensTees.click();
        expect(this.page).toHaveURL(lumoURL+"women/tops-women/tees-women.html");
        await this.page.waitForTimeout(2000);
    }

    async navigatingToTanksPage(){
        await this.womensMenu.hover({force:true});
        await this.womensTops.hover({force:true});
        await this.womensTanks.click();
        expect(this.page).toHaveURL(lumoURL+"women/tops-women/tanks-women.html");
        await this.page.waitForTimeout(2000);
    }
}