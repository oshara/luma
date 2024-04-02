import {expect, test} from '@playwright/test';
import { lumoURL } from '../../environment.config';
import { NavigationMenuPage } from '../../pages/NavigationMenuPage';


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

test("Navigation to Womens - Tops - Tanks section",async({page})=>{
    const MenusObj = new NavigationMenuPage(page);
    await MenusObj.navigatingToTanksPage();
})


}