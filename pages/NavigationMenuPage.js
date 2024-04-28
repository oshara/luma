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
        this.womensTanks = page.locator('//nav[@class="navigation"]/ul/li[2]/ul/li[1]/ul/li[4]');
        this.womensPants = page.locator('//nav[@class="navigation"]/ul/li[2]/ul/li[2]/ul/li[1]');
        this.womensShorts = page.locator('//nav[@class="navigation"]/ul/li[2]/ul/li[2]/ul/li[2]');


        this.mensMenu = page.locator('//a[@href="https://magento.softwaretestingboard.com/men.html"]');
        this.mensTops = page.locator('//a[@href="https://magento.softwaretestingboard.com/men/tops-men.html"]');
        this.mensBottoms = page.locator('//a[@href="https://magento.softwaretestingboard.com/men/bottoms-men.html"]');
        this.mensJackets = page.locator('//nav[@class="navigation"]/ul/li[3]/ul/li[1]/ul/li[1]');
        this.mensHoddies = page.locator('//nav[@class="navigation"]/ul/li[3]/ul/li[1]/ul/li[2]');
        this.mensTees = page.locator('//nav[@class="navigation"]/ul/li[3]/ul/li[1]/ul/li[3]');
        this.mensTanks = page.locator('//nav[@class="navigation"]/ul/li[3]/ul/li[1]/ul/li[4]');
        this.mensPants = page.locator('//nav[@class="navigation"]/ul/li[3]/ul/li[2]/ul/li[1]');
        this.mensShorts = page.locator('//nav[@class="navigation"]/ul/li[3]/ul/li[2]/ul/li[2]');
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

    async navigatingToPantsPage(){
        await this.womensMenu.hover({force:true});
        await this.womensBottoms.hover({force:true});
        await this.womensPants.click();
        expect(this.page).toHaveURL(lumoURL+"women/bottoms-women/pants-women.html");
    }

    async navigatingToShortsPage(){
        await this.womensMenu.hover({force:true});
        await this.womensBottoms.hover({force:true});
        await this.womensShorts.click();
        expect(this.page).toHaveURL(lumoURL+"women/bottoms-women/shorts-women.html");
    }

    async gotoMensTopsPage(){
        await this.mensMenu.hover({force:true});
       // await this.mensTops.hover({force:true});
        await this.mensTops.click();
        expect(this.page).toHaveURL(lumoURL+"men/tops-men.html");
        await this.page.waitForTimeout(2000);
    }
    
    async gotoMensBottomsPage(){
        await this.mensMenu.hover();
        await this.mensBottoms.click();
        expect(this.page).toHaveURL(lumoURL+'men/bottoms-men.html');
        await this.page.waitForTimeout(200);
    }

    async gotoMensJacketsPage(){
        await this.mensMenu.hover({force:true});
        await this.mensTops.hover({force:true});
        await this.mensJackets.click();
        expect (this.page).toHaveURL(lumoURL+"men/tops-men/jackets-men.html");
        await this.page.waitForTimeout(2000);
    }

    async gotoMensHoddiesPage(){
        await this.mensMenu.hover();
        await this.mensTops.hover();
        await this.mensHoddies.click();
        expect(this.page).toHaveURL(lumoURL+"men/tops-men/hoodies-and-sweatshirts-men.html");
        await this.page.waitForTimeout(2000);
    }

    async gotoMensTeesPage(){
        await this.mensMenu.hover();
        await this.mensTops.hover();
        await this.mensTees.click();
        expect(this.page).toHaveURL(lumoURL+"men/tops-men/tees-men.html");
        await this.page.waitForTimeout(2000);
    }

    async gotoMensTanksPage(){
        await this.mensMenu.hover();
        await this.mensTops.hover();
        await this.mensTanks.click();
        expect(this.page).toHaveURL(lumoURL+"men/tops-men/tanks-men.html");
        await this.page.waitForTimeout(2000);
    }

    async gotoMensPantsPage(){
        await this.mensMenu.hover();
        await this.mensBottoms.hover();
        await this.mensPants.click();
        expect(this.page).toHaveURL(lumoURL+'men/bottoms-men/pants-men.html');
        await this.page.waitForTimeout(2000);
    }

    async gotoMensShortsPage(){
        await this.mensMenu.hover();
        await this.mensBottoms.hover();
        await this.mensShorts.click();
        expect(this.page).toHaveURL(lumoURL+"men/bottoms-men/shorts-men.html");
        await this.page.waitForTimeout(2000);
    }
}
