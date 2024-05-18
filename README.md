# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


===========> https://dummyjson.com/products?skip=0&limit=100    get 100 products logic



  /* const handleFilters= (parameter)=>{
            console.log("Trigger event")
           if(parameter==="fourtofive"&&radioBtnStatus==0){
            if(Filters.length>0){
                let filtersData=Filters.filter((item,i)=>{
                if(item.rating>=4 && item.rating<=4.5){
                  
                    return true
                  
                }
             })
             
             console.log(filtersData)
           
             setFilters(filtersData)
             setRadioBtnStatus(1)
             
            }
            
            else{
            let filtersData=productsData.filter((item,i)=>{
               console.log("2")
               if(item.rating>=4 && item.rating<=4.4){
                return true;
               }
            })
            console.log(filtersData)
            
             setFilters(filtersData)
             setRadioBtnStatus(1)
           }

          }else if(parameter==="fourtofive"&&radioBtnStatus==1){
            let filtersData=Filters.filter((item,i)=>{
              if(item.rating>=4 && item.rating<=4.5){
                
                  return false

                
              }
           })
           
           console.log(filtersData)
         
           setFilters(filtersData)
           setRadioBtnStatus(0)


          }
        
         
        
        //------------------rating 2: 4.5 and above:-----------------------------

        else if(parameter==="above45"){
          
          if(Filters.length>0){
          let filtersData=Filters.filter((item,i)=>{
            if(item.rating>=4.5){
             return true;
            }
         })
         
       
         setFilters(filtersData)
        }
        else{

          let filtersData=productsData.filter((item,i)=>{
            if(item.rating>=4.5){
             return true;
            }
         })
           setFilters(filtersData)

         }
        }

        //-----------------price below 5000 --------------------------------------------------------------

        
        else if(parameter==="below5000"){
          console.log("5000")
          if(Filters.length>0){
          let filtersData=Filters.filter((item,i)=>{
            if(item.price*100<5000){
             return true;
            }
         })
         console.log(filtersData)
         setFilters(filtersData)
        }
        else{

          let filtersData=productsData.filter((item,i)=>{
            if(item.price*100<5000){
             return true;
            }
         })
         console.log(filtersData)
         setFilters(filtersData)
         }
        }


        //----------------- price between  5,001-1,00,000 -------------------------------------
           
        
        else if(parameter==="between5K1TO100K"){
          console.log("5000")
          if(Filters.length>0){
          let filtersData=Filters.filter((item,i)=>{
            if(item.price*100>=5001 && item.price*100<=100000 ){
             return true;
            }
         })
         console.log(filtersData)
         setFilters(filtersData)
        }
        else{

          let filtersData=productsData.filter((item,i)=>{
            if(item.price*100>=5001 && item.price*100<=100000){
             return true;
            }
         })
         console.log(filtersData)
         setFilters(filtersData)
         }
        }


        // --------------Price Between 100001 to 2,00000---------------------------


        else if(parameter==="between100K1TO200K"){
          console.log("5000")
          if(Filters.length>0){
          let filtersData=Filters.filter((item,i)=>{
            if(item.price*100>=100001 && item.price*100<=200000 ){
             return true;
            }
         })
         console.log(filtersData)
         setFilters(filtersData)
        }
        else{

          let filtersData=productsData.filter((item,i)=>{
            if(item.price*100>=10001 && item.price*100<=200000){
             return true;
            }
         })
         console.log(filtersData)
         setFilters(filtersData)
         }
        }

        
   
        
      
      


      
        }

*/