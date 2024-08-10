async function getAllProducts()
{
    var response = await fetch(`https://dummyjson.com/products`)
    var data = await response.json();

    //console.log(6, data.products)

    var products = data.products;

    var temp = "";
    for(i=0; i<products.length; i++)
    {
        temp += '<div class="product">';
            temp += '<img src="'+products[i].thumbnail+'" alt="">';
            temp += '<h4 class="name">'+products[i].title+'</h4>';
            temp += '<h4 class="price">$'+products[i].price+'</h4>';

            temp += '<div class="btndiv">';
                temp += '<button>Add To Cart</button>';
                temp += '<button onclick="details('+i+')">Details</button>';
            temp += '</div>';
        temp += '</div>';
    }

    document.getElementById('result').innerHTML = temp;
}

async function searchByName()
{
    var search = document.getElementById('search').value;

    var response = await fetch(`https://dummyjson.com/products`)
    var data = await response.json();

    var products = data.products;

    var temp = "";
    for(i=0; i<products.length; i++)
    {
        //if((products[i].title).indexOf(search) > -1) : search anywhere in the string
        var name = (products[i].title).substring(0, search.length);
        if(name == search)
        {
            temp += '<div class="product">';
                temp += '<img src="'+products[i].thumbnail+'" alt="">';
                temp += '<h4 class="name">'+products[i].title+'</h4>';
                temp += '<h4 class="price">$'+products[i].price+'</h4>';

                temp += '<div class="btndiv">';
                    temp += '<button>Add To Cart</button>';
                    temp += '<button onclick="details('+i+')">Details</button>';
                temp += '</div>';
            temp += '</div>';
        }
    }

    document.getElementById('result').innerHTML = temp;
}

function details(index)
{
    localStorage.setItem('index', index);
    window.location.href = "product_details.html";
}

async function productDetails()
{
    var index = localStorage.getItem('index');

    var response = await fetch(`https://dummyjson.com/products`)
    var data = await response.json();

    var products = data.products;

    var product = products[index]

    var reviews = product.reviews

    var temp = "";

    temp += "<img src='"+product.thumbnail+"'><br>";
    temp += "Name : "+product.title + "<br>";

    temp += "Reviews : <br><hr>";

    for(i=0; i<reviews.length;i++)
    {
        temp += "Comment : "+reviews[i].comment + "<br>";
        temp += "Name : "+reviews[i].reviewerName + "<br>";
        temp += "Date : "+reviews[i].date + "<br>";
        temp += "<br>";
    }

    document.getElementById('result').innerHTML = temp;


    console.log(77, product)

}