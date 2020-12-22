console.log("page loaded");

var github = document.getElementById("github");
var youtube = document.getElementById("youtube");
var twitter = document.getElementById("twitter");

var tabl_blender = ["bureau.png", "affiche_donuts.jpg", "Donuts.jpg", "voiture.png", "SM_rendu03.png"],
	tabl_pixelart = ["space.png", "earth.png", "Logo-cookie.png", "Blue Mining.png", "western.png", "meowzart.png"],
	tabl_pixelartgif = ["pumpkin-transform.gif", "pumpkin.gif", "bato.gif"],
	tabl_articles_pdf = ["article-exo-v1.pdf", "article-exo-v2.pdf", "article-satellite-v1.pdf", "article-satellite-v2.pdf"],
	tabl_articles_jpg = ["exo-v1.jpg", "exo-v2.jpg", "satellite-v1.jpg", "satellite-v2.jpg"],
	tabl_cartes = ["blood moon.png", "invasion de sauterelles.png", "manif.png", "peste.png", "pleine lune.png", "tempête.png"],
	tabl_securingdata_clév1 = ["diapo1.jpg", "diapo2.jpg", "diapo3.jpg", "diapo4.jpg", "diapo5.jpg"],
	tabl_securingdata_clév2 = ["diapo1.jpg", "diapo2.jpg", "diapo3.jpg", "diapo4.jpg", "diapo5.jpg"],
	tabl_securingdata_shield = ["diapo1.jpg", "diapo2.jpg", "diapo3.jpg", "diapo4.jpg", "diapo5.jpg", "diapo6.jpg"];

var i=0, j=0, g=0, h=0, k=0, secu1=0, secu2=0, secu3=0;


// RESEAUX SOCIAUX
function change_img(id) {
	if (id == "github") {
		github.src = "medias/github.png";
	} else if (id == "youtube") {
		youtube.src = "medias/youtube.png";
	} else if (id == "twitter") {
		twitter.src = "medias/twitter.png";
	}
}

function reset_img(id) {
	if (id == "github") {
		github.src = "medias/github-noir.png";
	} else if (id == "youtube") {
		youtube.src = "medias/youtube-noir.png";
	} else if (id == "twitter") {
		twitter.src = "medias/twitter-noir.png";	
	}
}

// DIAPORAMA POUR BLENDER 
function nav_blender(sens) {
	var img = document.getElementById("blender");
	if (sens == "left") {
		if (i == 0) {
			i = tabl_blender.length-1;
			img.src = "medias/blender/" + tabl_blender[i];
		} else {
			i--;
			img.src = "medias/blender/" + tabl_blender[i];
		}
		return i;

	} else if (sens == "right") {
		if (i == 4) {
			i = 0;
			img.src = "medias/blender/" + tabl_blender[i];
		} else {
			i++;
			img.src = "medias/blender/" + tabl_blender[i];
		}
		return i;
	}
}


// DIAPO PIXELART (sans gif)
function nav_pixelart(sens) {
	var img = document.getElementById("pixelart");
	if (sens == "left") {
		if (j == 0) {
			j = tabl_pixelart.length-1;
			img.src = "medias/pixel_art/" + tabl_pixelart[j];
		} else {
			j--;
			img.src = "medias/pixel_art/" + tabl_pixelart[j];
		}
		return j;

	} else if (sens == "right") {
		if (j == 5) {
			j = 0;
			img.src = "medias/pixel_art/" + tabl_pixelart[j];
		} else {
			j++;
			img.src = "medias/pixel_art/" + tabl_pixelart[j];
		}
		return j;
	}
}

// DIAPO PIXELART (avec gif)
function nav_pixelart_gif(sens) {
	var img = document.getElementById("pixelart_gif");
	if (sens == "left") {
		if (g == 0) {
			g = tabl_pixelartgif.length-1;
			img.src = "medias/pixel_art/" + tabl_pixelartgif[g];
		} else {
			g--;
			img.src = "medias/pixel_art/" + tabl_pixelargift[g];
		}
		return g;

	} else if (sens == "right") {
		if (g == 2) {
			g = 0;
			img.src = "medias/pixel_art/" + tabl_pixelartgif[g];
		} else {
			g++;
			img.src = "medias/pixel_art/" + tabl_pixelartgif[g];
		}
		return g;
	}


}


// DIAPORAMA DES ARTICLES
function nav_articles(sens) {
	var img = document.getElementById("img-articles");
	var link = document.getElementById("pdf-articles");
	var title = document.getElementById("sous-titre-articles");

	if (sens == "left") {
		if (h == 0) {
			h = tabl_articles.length-1;
			img.src = "medias/articles/" + tabl_articles_jpg[h];
			link.href = "medias/articles/" + tabl_articles_pdf[h];
		} else {
			h--;
			img.src = "medias/articles/" + tabl_articles_jpg[h];
			link.href = "medias/articles/" + tabl_articles_pdf[h];
		}

	} else if (sens == "right") {
		if (h == 3) {
			h = 0;
			img.src = "medias/articles/" + tabl_articles_jpg[h];
			link.href = "medias/articles/" + tabl_articles_pdf[h];
		} else {
			h++;
			img.src = "medias/articles/" + tabl_articles_jpg[h];
			link.href = "medias/articles/" + tabl_articles_pdf[h];
		}
	}

	switch (h) {
		case 0:
			title.innerHTML = "- Article d'exoplanète 1 -";
			break;
		case 1:
			title.innerHTML = "- Article d'exoplanète 2 -";
			break;
		case 2:
			title.innerHTML = "- Article satellite chinois 1 -";
			break;
		case 3:
			title.innerHTML = "- Article satellite chinois 2 -";
			break;
	}

	return h;
}

// DIAPORAMA DES CARTES
function nav_cartes(sens) {
	var img = document.getElementById("cartes");
	if (sens == "left") {
		if (k == 0) {
			k = tabl_cartes.length-1;
			img.src = "medias/jeu_de_societe/cartes_events/" + tabl_cartes[k];
		} else {
			k--;
			img.src = "medias/jeu_de_societe/cartes_events/" + tabl_cartes[k];
		}
		return k;

	} else if (sens == "right") {
		if (k == 5) {
			k = 0;
			img.src = "medias/jeu_de_societe/cartes_events/" + tabl_cartes[k];
		} else {
			k++;
			img.src = "medias/jeu_de_societe/cartes_events/" + tabl_cartes[k];
		}
		return k;
	}
}


// DIAPORAMA SECURING DATA
function nav_securingdata_clév1(sens) {
	var img = document.getElementById("clév1");
	if (sens == "left") {
		if (secu1 == 0) {
			secu1 = tabl_securingdata_clév1.length-1;
			img.src = "medias/securingdata/clév1/" + tabl_securingdata_clév1[secu1];
		} else {
			k--;
			img.src = "medias/securingdata/clév1/" + tabl_securingdata_clév1[secu1];
		}
		return secu1;

	} else if (sens == "right") {
		if (secu1 == 4) {
			secu1 = 0;
			img.src = "medias/securingdata/clév1/" + tabl_securingdata_clév1[secu1];
		} else {
		 	secu1++;
			img.src = "medias/securingdata/clév1/" + tabl_securingdata_clév1[secu1];
		}
		return secu1;
	}
}

function nav_securingdata_clév2(sens) {
	var img = document.getElementById("clév2");
	if (sens == "left") {
		if (secu2 == 0) {
			secu2 = tabl_securingdata_clév2.length-1;
			img.src = "medias/securingdata/clév2/" + tabl_securingdata_clév2[secu2];
		} else {
			secu2--;
			img.src = "medias/securingdata/clév2/" + tabl_securingdata_clév2[secu2];
		}
		return secu2;

	} else if (sens == "right") {
		if (secu2 == 4) {
			secu2 = 0;
			img.src = "medias/securingdata/clév2/" + tabl_securingdata_clév2[secu2];
		} else {
			secu2++;
			img.src = "medias/securingdata/clév2/" + tabl_securingdata_clév2[secu2];
		}
		return secu2;
	}
}

function nav_securingdata_shield(sens) {
	var img = document.getElementById("shield");
	if (sens == "left") {
		if (secu3 == 0) {
			secu3 = tabl_securingdata_shield.length-1;
			img.src = "medias/securingdata/shield/" + tabl_securingdata_shield[secu3];
		} else {
			secu3--;
			img.src = "medias/securingdata/shield/" + tabl_securingdata_shield[secu3];
		}
		return secu3;

	} else if (sens == "right") {
		if (secu3 == 5) {
			secu3 = 0;
			img.src = "medias/securingdata/shield/" + tabl_securingdata_shield[secu3];
		} else {
			secu3++;
			img.src = "medias/securingdata/shield/" + tabl_securingdata_shield[secu3];
		}
		return secu3;
	}
}
