var urlinput = "";
var urlSnippet1 = "";
var urlSnippet2 = "";
var url = "";
var keywords = [];
var asins = "";

    function createMultipleURL()
    {
        
        getInput();
        resetFields(document.getElementById('resultTable'));
        
        if(keywords!=null)
        {
            var index=0;
            do{
                url=createURL(asins, keywords[index].trim().split(" "));
                console.log("URL: "+url);
                var result;
                if(index==0)
                {
                    
                    result=document.getElementById("result-0");         
                }
                else
                { 
                    var element=document.getElementById("result-"+(index-1));//"result-"+index
                    
                    result=element.cloneNode(true);
                    result.id="result-"+index;
                   
                    var children = element.children;
//                    for(var i=0;i<children.length;i++)
//                        {
//                            
//                            var nextChild=children[i].cloneNode(true);
//                        console.log(nextChild);
//                            result.appendChild(nextChild);
////                            var nextChildren=nextChild.children;
////                            for(var j=0;j<nextChildren.length;j++){
////                                nextChild.appendChild(nextChildren[j].cloneNode(true));
////                            }
//                            //missing 'copy' button
//                            
//                            
//                        }
                    
                    
                    element.parentNode.appendChild(result);
                    //console.log(result);
                    result.firstElementChild.firstElementChild.innerHTML=(index+1)+".";//change list item number
                    
                }
                document.getElementById("resultTag").innerHTML="Your Result Is:"
                result.firstElementChild.nextElementSibling.firstElementChild.value=url;
                
                index++;
            }while(index<keywords.length)
        }
                
        
    }
        
    function resetFields(element){
        var childList=element.children[0].children;
        
       //console.log(childList[2]);
       // console.log(":"+childList[0].getElementsByTagName("input")[0]);
        //childList[0].getElementsByTagName("input")[0].value=" ";
        if(childList.length>1){
            var iterations=childList.length;
            for(var i=1;i<iterations;i++){
                console.log(childList);
               
                console.log(element.children[0].removeChild(childList[1]));
            }
        }
    }

    function createSingleURL()
    {
        getInput();

        if(keywords!=null)
        {
            var index=0;
            do{
                
                keywords[index]=arrayToString(keywords[index].trim().split(" "),"+");
                index++;
            }while(index<keywords.length)
        }
        createURL(asins, keywords);
         console.log("URL: "+url);
        
        document.getElementById("resultTag").innerHTML="Your Result Is:"
        document.getElementById("resultURL").value=url;
    }
    
    function arrayToString(array, delimiter)
    {
        
        if(array!=null)
        {
            var arrayString="";
            var index=0;
            do{
                if(index>0) arrayString+=delimiter;
                arrayString+=array[index].trim();
                index++;
            }while(index<array.length)
                //console.log("Array: "+arrayString);
            return arrayString;
        }
       else return null;
    }
        
    function getInput()
    {
        urlinput= document.getElementById('element_1').value;
       var asininput=document.getElementById('element_2').value;
       var keywordsinput=document.getElementById('element_3').value;
       urlSnippet1=document.getElementById("element_4").value;
       urlSnippet2=document.getElementById("element_5").value;

       asins=asininput.trim().split(" ");
             
        keywords=keywordsinput.trim().split("\n");
             //console.log(keywords);
        
             
    }
    

    function createURL(asins, keywordList)
    {
        var asinString=arrayToString(asins,"|");
        var keywordString=arrayToString(keywordList,"+");
        url=urlinput+urlSnippet1+keywordString+urlSnippet2+asinString;
        return url;
    }

    function copyText(element)
    {
            
        /* Get the text field ??*/
      var copyText = element;

      /* Select the text field */
        copyText.focus();
      copyText.select();

      /* Copy the text inside the text field */
      document.execCommand("Copy");

      /* Alert the copied text */
        //copyText.flash();
      //alert("Copied the text: " + copyText.value);

    }
 