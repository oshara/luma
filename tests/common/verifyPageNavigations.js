import {expect, test} from '@playwright/test';
import { lumoURL } from '../../environment.config';
import { NavigationMenuPage } from '../../pages/NavigationMenuPage';
import { accessSync } from 'fs';


export const navigations  =()=>{

test.beforeEach('',async({page})=>{
   
    await page.goto(lumoURL);
})

test("Navigating to the What's New Page",async({page})=>{

     const MenusObj = new NavigationMenuPage(page);
    await MenusObj.navigatingToWhatsNewPage();
})

test("Navigating to the Womens - Tops section",async({page})=>{

    const MenusObj = new NavigationMenuPage(page);
    await MenusObj.navigatingToWomensTopsPage();

})
test("Navigating to the Womens - Bottoms section",async({page})=>{
    
    const MenusObj = new NavigationMenuPage(page);
    await MenusObj.navigatingToWomensBottmsPage();
})

test('Navigating to Womens - Tops - Jackets section',async({page})=>{
    const MenusObj = new NavigationMenuPage(page);
    await MenusObj.navigtingToJacketsPage();
})

test('Navigating to Womens - Tops - Hoodies section',async({page})=>{
    const MenusObj = new NavigationMenuPage(page);
    await MenusObj.navigatingToHoddiesPage();
})

test('Navigating to the Womens - Tops - Tees section',async({page})=>{
    const MenusObj = new NavigationMenuPage(page);
    await MenusObj.navigatingToTeesPage();
 
})

test("Navigating to Womens - Tops - Tanks section",async({page})=>{
    const MenusObj = new NavigationMenuPage(page);
    await MenusObj.navigatingToTanksPage();
})

test("Navigationg to Womens - Bottoms - Pants section",async({page})=>{
    const MenusObj = new NavigationMenuPage(page);
    await MenusObj.navigatingToPantsPage();
   
})

test("Navigating to the Womens - Bottoms - Shorts section", async ({page})=>{
    const MenusObj = new NavigationMenuPage(page);
    await MenusObj.navigatingToShortsPage();

})

test("Navgigating to Mens -Tops page",async({page})=>{

    const MenusObj = new NavigationMenuPage(page);
    await MenusObj.gotoMensTopsPage();

})

test("Navigating to the Mens - Bottoms page",async({page})=>{
    const MenusObj = new NavigationMenuPage(page);
    await MenusObj.gotoMensBottomsPage();
})

test("Navigating to the Mens - Jackets page", async({page})=>{
    const MenusObj = new NavigationMenuPage(page);
    await MenusObj.gotoMensJacketsPage();
})

test("Navigating to the Mens - Hoddies and Sweatshirts section",async({page})=>{
    const MenusObj = new NavigationMenuPage(page);
    await MenusObj.gotoMensHoddiesPage();
    
})

test("Navigating to Mens - Tees page",async({page})=>{
    const MenusObj = new NavigationMenuPage(page);
    await MenusObj.gotoMensTeesPage();

})

test("Navigating to the Mens - Tanks page",async({page})=>{
    const MenusObj = new NavigationMenuPage(page);
    await MenusObj.gotoMensTanksPage();
})

test.only("Navigating to the Mens - Pants page", async({page})=>{
    const MenusObj = new NavigationMenuPage(page);
    await MenusObj.gotoMensPantsPage();
    
})

test.only("Navigating to the Mens - Shorts page",async({page})=>{
    const MenusObj  = new NavigationMenuPage(page);
    await MenusObj.gotoMensShortsPage();
})
}
