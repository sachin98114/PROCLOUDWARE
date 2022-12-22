var jsondata={

    "allProducts": [
        {
            "product_description": "This are one of several Squier models available that offer a pretty good product for a reasonably low price. The pick-ups and hardware are sometimes suspect, and the workmanship varies from instrument to instrument, but for the price, these are a very good beginner guitar choice.",
            "shipping_details": "charges for shipping $20",
            "customer_reviews": " Hmm...well, sounds like a tele at low volumes...the higher the volume, the worse the squeals;like a pig really...ah well, it's a cheap guitar...also tends to rattle above the 10th fret; on the 1st and 2nd strings (to the point of fretting out completely); and on the 5 and 6 stings on the 1st through 3rd frets...weird...action; settings help, but not much...hard to set the intonation as well (read, damn near impossible)... ",
            "price": "$204.99",
            "image_path": "product1.jpg" ,
            "stock_availability": "true",
            "no_of_items": "10"
        },
        {
            "product_description": "Modelled after the much more expensive Gibson SG guitars, the Epiphone SG G310 keeps it's cost low by using cheaper hardware and lower quality humbucking pick-ups. The G-310 features an alder body, a mahogany neck, and a dot-inlayed rosewood fingerboard.",
            "shipping_details": "charges for shipping $25",
            "customer_reviews": "  Heck...I bought it as a knock around guitar I could beat up a little as I carried it around with me; (I hate not having a guitar next to me...)...but it hasn't even fit this role very well;I considered putting in new pickups and tuners...but the whole buzzing thing seems impossible to cure;well, there you go...I'm planning to sell it, or failing that; when my new band plays our first show I guess I'll pull a Townsend on it...",
            "price": "$249.00",
            "image_path": "product2.jpg",
            "stock_availability": "true",
            "no_of_items": "14"
        },
        {
            "product_description": "Here's another guitar many people feel is a great value. This Pacifica features an agathis body, maple neck, and rosewood fretboard, with two single coil pick-ups, and one humbucker. The consensus is the guitar is reasonably well made, and the quality of the wood tends to be high.",
            "shipping_details": "charges for shipping $18",
            "customer_reviews": "  yep...those were the pros above...basically this guitar;I guess it might be okay if you need something that looks and feels like a guitar;hmm...well, hit it hard and it chips...no finish flaws though;the tuners suck so bad it's hard to describe...tuning it is a real pain...but it doesn't go out too quickly I guess... ; just to practice on if you don't care what it sounds like at all... ",
            "price": "$179.99",
            "image_path": "product3.jpg",
            "stock_availability": "true",
            "no_of_items": "14"
        },
        {
            "product_description": "Guitarists like Keith Richards, Steve Cropper, Albert Lee, and Danny Gatton favor the look and sound of the Telecaster. If you're a fan of any of those guitarists, this beginner guitar may be for you. ",
            "shipping_details": "charges for shipping $20",
            "customer_reviews": "It's got a fatter sound to it than a standard strat for obvious reasons.; I only have a couple complaints. First of all, there's a slight buzzing problem on the sixth string; especially if you're not pressing hard. Also, the strings that came on it were very low quality; On several strings I couldn't even get a note below the 12th fret; but I put Elixirs on it and that's fixed.  ",
            "price": "$150.00",
            "image_path": "product4.jpg",
            "stock_availability": "true",
            "no_of_items": "10"
        },
        {
            "product_description": "The Les Paul is perhaps the most famous guitar in rock and roll. Epiphone has done a good job of visually re-creating the Les Paul in this lower-cost guitar marketed towards beginners. The Special II features a laminated alder/maple body, a magogany neck, rosewood fingerboard, and two open-coil humbucking pick-ups.",
            "shipping_details": "charges for shipping $15",
            "customer_reviews": "  Nice tone with use of quality strings, highs are clear and lows are decent; in depth considering this really is a beginner's guitar; Set up must be with quality strings.  No apparent flaws, guitar now 11 years old and still sounds great; Finish is still impeccable. I'm really surprised as I did not expect it to last this long; No apparent flaws, guitar now 11 years old and still sounds great. Finish is still impeccable",
            "price": "$125.50",
            "image_path": "product5.jpg",
            "stock_availability": "true",
            "no_of_items": "15"
        },
        {
            "product_description": "These Canadian-made instruments are terrific guitars - very highly regarded, both for their beautiful sound, and their excellent value. The S6 features a solid cedar top, and mahogany back and sides. ",
            "shipping_details": "charges for shipping $20",
            "customer_reviews": " It's a solid guitar and it's great for a beginner; It feels very sturdy; On the negative side one of the pickups is kind of wobbly; Buy a Squier Standard if you want something better than an Affinity (even cheaper); but don't have the money for a regular Fender. ",
            "price": "$419.99",
            "image_path": "product6.jpg",
            "stock_availability": "true",
            "no_of_items": "12"
        },
        {
            "product_description": "Perhaps not in the same league as the Seagull, the FG700S is still a solid beginner acoustic guitar, and for the price (significantly cheaper than the S6), it's a good value.",
            "shipping_details": "charges for shipping $20",
            "customer_reviews": "  I think it's a decent value for the money; I've never had any real troubles with it. I'm not an advanced player, I've only been playing for about six months; but this guitar has done me well so far; I'm sure when I get more serious years from now I'll buy something better; but this is fine for now. ",
            "price": "$199.99",
            "image_path": "product7.jpg",
            "stock_availability": "true",
            "no_of_items": "15"
        }
    ]
    };
  var store = document.getElementById("imgsrc");
  var productinfo = document.getElementById("productinfo");
  var shipping = document.getElementById("shipping");
  var review = document.getElementById("review");
  var price = document.getElementById("price");
  var stock = document.getElementById("stock");
  var collaspe1 = document.getElementById("collaspe1");
  var collaspe2 = document.getElementById("collaspe2");
  var collaspe3 = document.getElementById("collaspe3");
  var sliderprevious = document.getElementById("slider-previous");
  var slidernext = document.getElementById("slider-next");
  var qwer = document.getElementById("qwer");
  var gohome = document.getElementById("gohome");
  var buy1 = document.getElementById("buy");
  var bought = document.getElementById("bought");
  var page1 = document.getElementById("page1");
  qwer.style.display = "none";
  bought.style.display = "none";
  gohome.style.display = "none";
  let i = 0;
  function next() {
    i++;
    if (i >= jsondata.allProducts.length) {
      i = 0;
      store.src = jsondata.allProducts[i].image_path;
      productinfo.innerHTML = jsondata.allProducts[i].product_description;
      shipping.innerHTML = jsondata.allProducts[i].shipping_details;
      review.innerHTML = jsondata.allProducts[i].customer_reviews;
      price.innerHTML = jsondata.allProducts[i].price;
      stock.innerHTML = jsondata.allProducts[i].stock_availability;
    }
    store.src = jsondata.allProducts[i].image_path;
    productinfo.innerHTML = jsondata.allProducts[i].product_description;
    shipping.innerHTML = jsondata.allProducts[i].shipping_details;
    review.innerHTML = jsondata.allProducts[i].customer_reviews;
    price.innerHTML = jsondata.allProducts[i].price;
    stock.innerHTML = jsondata.allProducts[i].stock_availability;
  }
  function prev() {
    i--;
    if (i < 0) {
      i = jsondata.allProducts.length - 1;
      store.src = jsondata.allProducts[i].image_path;
      productinfo.innerHTML = jsondata.allProducts[i].product_description;
      hipping.innerHTML = jsondata.allProducts[i].shipping_details;
      review.innerHTML = jsondata.allProducts[i].customer_reviews;
      price.innerHTML = jsondata.allProducts[i].price;
      stock.innerHTML = jsondata.allProducts[i].stock_availability;
    }
    store.src = jsondata.allProducts[i].image_path;
    productinfo.innerHTML = jsondata.allProducts[i].product_description;
    hipping.innerHTML = jsondata.allProducts[i].shipping_details;
    review.innerHTML = jsondata.allProducts[i].customer_reviews;
    price.innerHTML = jsondata.allProducts[i].price;
    stock.innerHTML = jsondata.allProducts[i].stock_availability;
  }
  function buy() {
    productinfo.style.display = "none";
    shipping.style.display = "none";
    review.style.display = "none";
    price.style.display = "none";
    stock.style.display = "none";
    collaspe1.style.display = "none";
    collaspe2.style.display = "none";
    collaspe3.style.display = "none";
    sliderprevious.style.display = "none";
    slidernext.style.display = "none";
    //
    qwer.style.display = "flex";
    qwer.style.justifyContent = "center";
  
    var x = document.getElementById("second");
    x.style.display = "flex";
    x.style.justifyContent = "space-around";
    productinfo.style.position = "absolute";
    productinfo.style.marginLeft = "300px";
  
    //
    bought.style.display = "block";
    buy1.style.display = "none";
    const node = document.createElement("p");
    const textnode = document.createTextNode(productinfo.innerHTML);
    node.appendChild(textnode);
    node.id = "node1";
    document.body.appendChild(node);
    node.style.color = "white";
    node.style.position = "relative";
    node.style.bottom = "400px";
    node.style.right = "90px";
  
    //
  }
  function but() {
    const nod = document.createElement("h2");
    const textnode = document.createTextNode("CONFIRMATION");
    nod.id = "conf";
    nod.appendChild(textnode);
    document.body.appendChild(nod);
    price.style.display = "block";
    shipping.style.display = "block";
    qwer.style.display = "none";
    bought.style.display = "none";
    gohome.style.display = "block";
    page1.style.display = "none";
    ///
    store.style.position = "relative";
    store.style.left = "400px";
  
    shipping.style.position = "relative";
    shipping.style.right = "430px";
    shipping.style.top = "395px";
    price.style.position = "relative";
    price.style.left = "100px";
    price.style.top = "330px";
    var product = document.getElementById("node1");
    product.style.position = "relative";
    product.style.bottom = "50px";
    product.style.left = "10px";
    nod.style.position = "relative";
    nod.style.bottom = "200px";
    nod.style.left = "500px";
  
    gohome.style.position = "relative";
    gohome.style.top = "150px";
    gohome.style.left = "900px";
  }
  function home() {
    location.reload();
  }
  function showInput() {
    document.getElementById("display").innerHTML =
      document.getElementById("user_input").value;
  }
  function show() {
    document.getElementById("dis").innerHTML =
      document.getElementById("user").value;
  }
  
  function sho() {
    document.getElementById("displ").innerHTML =
      document.getElementById("userP").value;
  }
  
  function sh() {
    document.getElementById("di").innerHTML =
      document.getElementById("user_in").value;
  }