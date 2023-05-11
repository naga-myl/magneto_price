// Includes
const { Builder, By, Key, until } = require('selenium-webdriver');
const should = require('chai').should();

/*
   I want to search for a product
   and view list of products in
    sorted by price.
*/
              describe('Sort by Price', () => {
                // Test case:
                    context('Searched category is displayed', () => {
                        it('I see the selected product in sorted order', async () => {
                            // Start web browser
                            const driver = await new Builder().forBrowser('firefox').build();
                            try{

                                await driver.get('https://magento.softwaretestingboard.com/');
                                 // Get the search input
                await driver.wait(until.elementLocated(By.css('#search')), 1000);
                await driver.findElement(By.id('search')).sendKeys('shirt', Key.RETURN);
                
               // await driver.sleep(100);
               
                    //get the sort         
                await driver.wait(until.elementLocated(By.css('.toolbar-sorter')),10000);
               let data=await driver.findElement(By.css('.toolbar-sorter'));

              let value =await data.findElement(By.css('.sorter-label'));
              let display=await value.getText();
              console.log(display);

              //price selecting
            await driver.wait(until.elementLocated(By.css('.sorter-options')),10000);
            let price=await driver.findElement(By.css('.sorter-options'));
           // console.log(price);


            await driver.sleep(1000);
            let pricevalue=await driver.findElement(By.css('.sorter-options > option:nth-child(2)')).click();
            //let pricevalueText= await pricevalue.getText();
          // console.log(pricevalueText);
              await driver.quit();

                            }

                            catch(error)
                            {
                                console.log(error);
                            }
                            finally{
                               
                               // await driver.quit();
                            }
                        });
                    });
                });

           
                            
           
           

            
    





      

