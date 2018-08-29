var urlinput = "";
var marketplace="";
var url = "";
var keywords = [];
var asins = "";
var brand="";
var list=[];

    function createMultipleURL()
    {
			list=[];
				var table=document.getElementById('resultTable');
        getInput();
        resetFields(table);
        if(keywords!=null)
        {
            var index=0;
            do{
                url=createURL(asins, keywords[index].trim().split(" "));
                list.push(url);
								var template=document.getElementsByTagName('template')[0];
                var result;
								result=template.content.firstChild.cloneNode(true);
								result.id="result-"+index;
								table.appendChild(result);
								result.firstElementChild.firstElementChild.innerHTML=(index+1)+".";//change list 
                result.firstElementChild.nextElementSibling.firstElementChild.value=url;
                index++;
            }while(index<keywords.length)
						document.getElementById("resultTag").innerHTML="Your Result Is:";
						console.log("URLs: ",list);
        }
                
        
    }
        
    function resetFields(element){
        var childList=element.children[0].children;
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
				resetFields(document.getElementById('resultTable'));
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
       var urlSnippet1=document.getElementById("element_5").value;
				brand=document.getElementById("element_4").value;
			switch(urlSnippet1){
				case 'US':marketplace='com';break;
				case 'CA':marketplace='ca';break;
				case 'UK':marketplace='co.uk';break;
			}
       urlSnippet2=document.getElementById("element_5").value;

       asins=asininput.trim().split(" ");
       keywords=keywordsinput.trim().split("\n");
       //console.log(keywords);
    }
    

    function createURL(asins, keywordList)
    {
			url=urlinput;
			url=url.replace('{{com}}',marketplace);
			var keywordString=arrayToString(keywordList,"+");
			url=replaceAll(url,'{{keyword}}',keywordString);
			var asinString=arrayToString(asins,"|");
			url=replaceAll(url,'{{asin}}', asinString);
			url=replaceAll(url,'{{brand}}', brand);
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
		function replaceAll(string, str1, str2){
			var temp=string;
			do{
				temp=temp.replace(str1,str2);
			}while(temp.includes(str1))
				return temp;
		}
 