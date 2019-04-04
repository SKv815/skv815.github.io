window.onload = function() {
// #####-Achtung-#####
//  This is Govnokod
// ###################

// html construction elements:
	let lb = '</div><div class="brackets">&lt;</div><div class="tagname">',
		rb = '</div><div class="brackets">&gt;</div>',
		br = '<p>&#13;</p>',
		clb = '<div class="brackets">&lt;</div><div class="slash">/</div><div class="tagname">',
		crb = rb+br,
		tab = '<div class="tab">&nbsp;&nbsp;</div>',
		tab2 = tab+tab,
		tab3 = tab2+tab,
		tab4 = tab3+tab,
		tab5 = tab4+tab
		;

// eancom construction elements
	let mainTagOpen,
		mainTagClose,
		unhOpen = lb+'uhn'+rb,
		unhClose = clb+'uhn'+crb,
		e0062Open = lb+'E0062'+rb,
		e0062Close = clb+'E0062'+crb,
		s009Open = lb+'S009'+rb,
		s009Close = clb+'S009'+crb,
		e0065Open = lb+'E0065'+rb,
		e0065Close = clb+'E0065'+crb,
		e0052Open = lb+'E0052'+rb,
		e0052Close = clb+'E0052'+crb,
		e0054Open = lb+'E0054'+rb,
		e0054Close = clb+'E0054'+crb,
		e0051Open = lb+'E0051'+rb,
		e0051Close = clb+'E0051'+crb,
		e0057Open = lb+'E0057'+rb,
		e0057Close = clb+'E0057'+crb,
		bgmOpen = lb+'BGM'+rb,
		bgmClose = clb+'BGM'+crb,
		c002Open = lb+'C002'+rb,
		c002Close = clb+'C002'+crb,
		e1001Open = lb+'E1001'+rb,
		e1001Close = clb+'E1001'+crb,
		c106Open = lb+'C106'+rb,
		c106Close = clb+'C106'+crb,
		e1004Open = lb+'E1004'+rb,
		e1004Close = clb+'E1004'+crb,
		e1225Open = lb+'E1225'+rb,
		e1225Close = clb+'E1225'+crb,
		dtmOpen = lb+'DTM'+rb,
		dtmClose = clb+'DTM'+crb,
		c507Open = lb+'C507'+rb,
		c507Close = clb+'C507'+crb,
		e2005Open = lb+'E2005'+rb,
		e2005Close = clb+'E2005'+crb,
		e2380Open = lb+'E2380'+rb,
		e2380Close = clb+'E2380'+crb,
		e2379Open = lb+'E2379'+rb,
		e2379Close = clb+'E2379'+crb,
		sg1Open = lb+'SG1'+rb,
		sg1Close = clb+'SG1'+crb,
		rffOpen = lb+'RFF'+rb,
		rffClose = clb+'RFF'+crb,
		c506Open = lb+'C506'+rb,
		c506Close = clb+'C506'+crb,
		e1153Open = lb+'E1153'+rb,
		e1153Close = clb+'E1153'+crb,
		e1154Open = lb+'E1154'+rb,
		e1154Close = clb+'E1154'+crb,
		sg2Open = lb+'SG2'+rb,
		sg2Close = clb+'SG2'+crb,
		sg3Open = lb+'SG3'+rb,
		sg3Close = clb+'SG3'+crb,
		nadOpen = lb+'NAD'+rb,
		nadClose = clb+'NAD'+crb,
		e3035Open = lb+'E3035'+rb,
		e3035Close = clb+'E3035'+crb,
		c082Open = lb+'C082'+rb,
		c082Close = clb+'C082'+crb,
		e3039Open = lb+'E3039'+rb,
		e3039Close = clb+'E3039'+crb,
		e3055Open = lb+'E3055'+rb,
		e3055Close = clb+'E3055'+crb,
		sg26Open = lb+'SG26'+rb,
		sg26Close = clb+'SG26'+crb,
		linOpen = lb+'LIN'+rb,
		linClose = clb+'LIN'+crb,
		e1082Open = lb+'E1082'+rb,
		e1082Close = clb+'E1082'+crb,
		e1229Open = lb+'E1229'+rb,
		e1229Close = clb+'E1229'+crb,
		c212Open = lb+'C212'+rb,
		c212Close = clb+'C212'+crb,
		e7140Open = lb+'E7140'+rb,
		e7140Close = clb+'E7140'+crb,
		e7143Open = lb+'E7143'+rb,
		e7143Close = clb+'E7143'+crb,
		piaOpen = lb+'PIA'+rb,
		piaClose = clb+'PIA'+crb,
		e4347Open = lb+'E4347'+rb,
		e4347Close = clb+'E4347'+crb,
		imdOpen = lb+'IMD'+rb,
		imdClose = clb+'IMD'+crb,
		e7077Open = lb+'E7077'+rb,
		e7077Close = clb+'E7077'+crb,
		c273Open = lb+'C273'+rb,
		c273Close = clb+'C273'+crb,
		e7008Open = lb+'E7008'+rb,
		e7008Close = clb+'E7008'+crb,
		qtyOpen = lb+'QTY'+rb,
		qtyClose = clb+'QTY'+crb,
		c186Open = lb+'C186'+rb,
		c186Close = clb+'C186'+crb,
		e6063Open = lb+'E6063'+rb,
		e6063Close = clb+'E6063'+crb,
		e6060Open = lb+'E6060'+rb,
		e6060Close = clb+'E6060'+crb,
		e6411Open = lb+'E6411'+rb,
		e6411Close = clb+'E6411'+crb,
		moaOpen = lb+'MOA'+rb,
		moaClose = clb+'MOA'+crb,
		c516Open = lb+'C516'+rb,
		c516Close = clb+'C516'+crb,
		e5025Open = lb+'E5025'+rb,
		e5025Close = clb+'E5025'+crb,
		e5004Open = lb+'E5004'+rb,
		e5004Close = clb+'E5004'+crb,
		sg30Open = lb+'SG30'+rb,
		sg30Close = clb+'SG30'+crb,
		priOpen = lb+'PRI'+rb,
		priClose = clb+'PRI'+crb,
		c509Open = lb+'C509'+rb,
		c509Close = clb+'C509'+crb,
		e5125Open = lb+'E5125'+rb,
		e5125Close = clb+'E5125'+crb,
		e5118Open = lb+'E5118'+rb,
		e5118Close = clb+'E5118'+crb,
		sg36Open = lb+'SG36'+rb,
		sg36Close = clb+'SG36'+crb,
		taxOpen = lb+'TAX'+rb,
		taxClose = clb+'TAX'+crb,
		e5283Open = lb+'E5283'+rb,
		e5283Close = clb+'E5283'+crb,
		c241Open = lb+'C241'+rb,
		c241Close = clb+'C241'+crb,
		e5153Open = lb+'E5153'+rb,
		e5153Close = clb+'E5153'+crb,
		c243Open = lb+'C243'+rb,
		c243Close = clb+'C243'+crb,
		e5278Open = lb+'E5278'+rb,
		e5278Close = clb+'E5278'+crb,
		unsOpen = lb+'UNS'+rb,
		unsClose = clb+'UNS'+crb,
		e0081Open = lb+'E0081'+rb,
		e0081Close = clb+'E0081'+crb,
		cntOpen = lb+'CNT'+rb,
		cntClose = clb+'CNT'+crb,
		c270Open = lb+'C270'+rb,
		c270Close = clb+'C270'+crb,
		e6069Open = lb+'E6069'+rb,
		e6069Close = clb+'E6069'+crb,
		e6066Open = lb+'E6066'+rb,
		e6066Close = clb+'E6066'+crb,
		untOpen = lb+'UNT'+rb,
		untClose = clb+'UNT'+crb,
		e0074Open = lb+'E0074'+rb,
		e0074Close = clb+'E0074'+crb,
		ftxOpen = lb+'FTX'+rb,
		ftxClose = clb+'FTX'+crb,
		e4451Open = lb+'E4451'+rb,
		e4451Close = clb+'E4451'+crb,
		c108Open = lb+'C108'+rb,
		c108Close = clb+'C108'+crb,
		e4440Open = lb+'E4440'+rb,
		e4440Close = clb+'E4440'+crb,
		sg6Open = lb+'SG6'+rb,
		sg6Close = clb+'SG6'+crb,
		tdtOpen = lb+'TDT'+rb,
		tdtClose = clb+'TDT'+crb,
		e8051Open = lb+'E8051'+rb,
		e8051Close = clb+'E8051'+crb,
		c040Open = lb+'C040'+rb,
		c040Close = clb+'C040'+crb,
		e3128Open = lb+'E3128'+rb,
		e3128Close = clb+'E3128'+crb,
		c222Open = lb+'C222'+rb,
		c222Close = clb+'C222'+crb,
		e8213Open = lb+'E8213'+rb,
		e8213Close = clb+'E8213'+crb,
		e8212Open = lb+'E8212'+rb,
		e8212Close = clb+'E8212'+crb,
		sg10Open = lb+'SG10'+rb,
		sg10Close = clb+'SG10'+crb,
		sg18Open = lb+'SG18'+rb,
		sg18Close = clb+'SG18'+crb,
		sg20Open = lb+'SG20'+rb,
		sg20Close = clb+'SG20'+crb,
		cpsOpen = lb+'CPS'+rb,
		cpsClose = clb+'CPS'+crb,
		e7164Open = lb+'E7164'+rb,
		e7164Close = clb+'E7164'+crb,
		sg17Open = lb+'SG17'+rb,
		sg17Close = clb+'SG17'+crb,
		meaOpen = lb+'MEA'+rb,
		meaClose = clb+'MEA'+crb,
		e6311Open = lb+'E6311'+rb,
		e6311Close = clb+'E6311'+crb,
		c502Open = lb+'C502'+rb,
		c502Close = clb+'C502'+crb,
		c517Open = lb+'C517'+rb,
		c517Close = clb+'C517'+crb,
		e6313Open = lb+'E6313'+rb,
		e6313Close = clb+'E6313'+crb,
		c174Open = lb+'C174'+rb,
		c174Close = clb+'C174'+crb,
		e6314Open = lb+'E6314'+rb,
		e6314Close = clb+'E6314'+crb,
		locOpen = lb+'LOC'+rb,
		locClose = clb+'LOC'+crb,
		e3227Open = lb+'E3227'+rb,
		e3227Close = clb+'E3227'+crb,
		e3225Open = lb+'E3225'+rb,
		e3225Close = clb+'E3225'+crb,
		aliOpen = lb+'ALI'+rb,
		aliClose = clb+'ALI'+crb,
		e3239Open = lb+'E3239'+rb,
		e3239Close = clb+'E3239'+crb,
		sg19Open = lb+'SG19'+rb,
		sg19Close = clb+'SG19'+crb,
		alcOpen = lb+'ALC'+rb,
		alcClose = clb+'ALC'+crb,
		e5463Open = lb+'E5463'+rb,
		e5463Close = clb+'E5463'+crb,
		c552Open = lb+'C552'+rb,
		c552Close = clb+'C552'+crb,
		sg21Open = lb+'SG21'+rb,
		sg21Close = clb+'SG21'+crb,
		pcdOpen = lb+'PCD'+rb,
		pcdClose = clb+'PCD'+crb,
		c501Open = lb+'C501'+rb,
		c501Close = clb+'C501'+crb,
		e5245Open = lb+'E5245'+rb,
		e5245Close = clb+'E5245'+crb,
		e5482Open = lb+'E5482'+rb,
		e5482Close = clb+'E5482'+crb,
		e5189Open = lb+'E5189'+rb,
		e5189Close = clb+'E5189'+crb,
		sg41Open = lb+'SG41'+rb,
		sg41Close = clb+'SG41'+crb,
		sg43Open = lb+'SG43'+rb,
		sg43Close = clb+'SG43'+crb,
		e1060Open = lb+'E1060'+rb,
		e1060Close = clb+'E1060'+crb;

	let loader = document.createElement('div');
	loader.classList.add('loader');

	let eancomCode = '',
		bgmCode = '',
		messageFunctionCode = '',
		xmlDocument = '',
		readyStatus = false;
		readyStatus2 = false;

	let radioButtons = document.getElementsByName('doctype'),
		mainSection = document.getElementsByClassName('main-section')[0],
		codeField = document.getElementById('code'),
		btnStart = document.getElementById('start'),
		btnCopy = document.getElementById('copy'),
		btnNext = document.getElementById('next'),
		goodsSection = document.getElementsByClassName('goods-section')[0],
		positions,
		distrGln = document.getElementById('gln-by'),
		supplierGln = document.getElementById('gln-su'),
		deliveryPointGln = document.getElementById('gln-dt');

// Inputs trim
	distrGln.addEventListener('input',function(){
		this.value = this.value.replace(/[^-0-9]/g,'');
	});
	supplierGln.addEventListener('input',function(){
		this.value = this.value.replace(/[^-0-9]/g,'');
	});
	deliveryPointGln.addEventListener('input',function(){
		this.value = this.value.replace(/[^-0-9]/g,'');
	});

// 1st step - definition of document type
	function getDocType () {
		if(radioButtons[0].checked){
			docType = radioButtons[0].value;
			mainTagOpen = lb+docType+rb;
			mainTagClose = clb+docType+crb;
			eancomCode = 'EAN008';
			bgmCode = '231';
			messageFunctionCode = '4';
		}
		else if(radioButtons[1].checked){
			docType = radioButtons[1].value;
			mainTagOpen = lb+docType+rb;
			mainTagClose = clb+docType+crb;
			eancomCode = 'EAN007';
			bgmCode = '351';
			messageFunctionCode = '4';
		}
		else if(radioButtons[2].checked){
			docType = radioButtons[2].value;
			mainTagOpen = lb+docType+rb;
			mainTagClose = clb+docType+crb;
			eancomCode = 'EAN006';
			bgmCode = '632';
			messageFunctionCode = '9';
		}
		else {
			error('something went wrong');
		}
		if (readyStatus == false) {
			readyStatus = true;
		}
	};
	let r;
	for (r = 0; r < radioButtons.length; r++) {
		radioButtons[r].addEventListener('click', getDocType);
		radioButtons[r].addEventListener('click', function(){
			mainSection.classList.remove('hidden');
			mainSection.classList.add('visible');
		});
		radioButtons[r].addEventListener('click', docNumberRefresh);
	};


// 2nd step - exdanding form - adding posotions
// elements for positions section
	let pos1 = '<div class="good"><div class="cont"><div class="col item-number"><h6 class=>Item ',
		pos2 = '</h6></div></div><div class="cont"><div class="col good-header"><label>Item name</label><input type="text" class="good-name" maxlength="80"></div><div class="col-2 input-item"><label>Order unit</label><select name="good-order-unit" class="good-order-unit"><option value="PA">Packages</option><option value="PCE">Pieces</option></select></div><div class="col-2 input-item"><label>GTIN code</label><input type="text" class="good-gtin" maxlength="20" placeholder="upc, ean or gtin"></div><div class="col-2 input-item"><label>Art.</label><input type="text" class="good-art"></div><div class="col-2 input-item"><label>Ordered</label><input type="text" class="good-ordered"></div><div class="col-2 input-item"><label>Confirmed</label><input type="text" class="good-confirmed"></div><div class="col-2 input-item"><label>Shipped</label><input type="text" class="good-shipped"></div><div class="col-2 input-item"><label>Pieces in package</label><input type="text" class="good-pceinpa"></div><div class="col-2 input-item"><label>Price without VAT</label><input type="text" class="good-pricenovat"></div><div class="col-2 input-item"><label>Price with VAT</label><input type="text" class="good-pricevat"></div><div class="col-2 input-item"><label>tax rate</label><input class="tax" type="number" class="good-vat" min="0" max="100" placeholder="20%"></div></div></div>';
	let extandActive = false;
	next.addEventListener('click', function(){
		if (extandActive == false) {
			extandActive = true;
			positions = document.getElementById('positions').value;
			goodsSection.innerHTML = '';
			goodsSection.classList.remove('hidden');
			goodsSection.classList.add('visible');
			let e = 1;
			let a = setInterval(extand, 70);
			function extand() {
				goodsSection.innerHTML += pos1+e+pos2;
				e++;
				if (e > positions) {
					clearInterval(a);
					extandActive = false;
				}
			};
		}
		else {
			console.log('do not double-click on this button, please');
		}
		readyStatus2 = true;
	});



// get dynamic data from inputs
	function getData(){
		let docNumber = document.getElementById('doc-number').value,
			docVer = document.getElementById('doc-ver').value,
			docDate = document.getElementById('date-doc').value,
			deliveryDate = document.getElementById('date-delivery').value,
			orderNumber = document.getElementById('order-number').value,
			orderVer = document.getElementById('order-ver').value,
			orderDate = document.getElementById('date-order').value,
			comment = document.getElementById('comment').value;
		distrGln = document.getElementById('gln-by').value,
		supplierGln = document.getElementById('gln-su').value,
		deliveryPointGln = document.getElementById('gln-dt').value;

		docDate = docDate.replace(/-/g,"");
		orderDate = orderDate.replace(/-/g,"");
		deliveryDate = deliveryDate.replace(/-/g,"");

		let goodNames = document.getElementsByClassName('good-name'),
			goodOrderUnits = document.getElementsByClassName('good-order-unit'),
			goodGtins = document.getElementsByClassName('good-gtin'),
			goodArts = document.getElementsByClassName('good-art'),
			goodOrdered = document.getElementsByClassName('good-ordered'),
			goodConfirmed = document.getElementsByClassName('good-confirmed'),
			goodShipped = document.getElementsByClassName('good-shipped'),
			goodPceInPa = document.getElementsByClassName('good-pceinpa'),
			goodPriceClear = document.getElementsByClassName('good-pricenovat'),
			goodPriceVat = document.getElementsByClassName('good-pricevat'),
			goodVat = document.getElementsByClassName('tax');

			
		

// creating eancom document matching it's typed, by sections
		function createEancom() {
			let	xmlDocumentHeader = '',
				xmlDocumentDtm = '',
				xmlDocumentMessageDetails = '',
				xmlDocumentParticipants = '',
				xmlDocumentComments = '',
				xmlDocumentGoodsLin = '',
				xmlDocumentGoodsPia = '',
				xmlDocumentGoodsImd = '',
				xmlDocumentGoodsQty = '',
				xmlDocumentGoodsMoa = '',
				xmlDocumentGoodsSg30Sg36 = '',
				xmlDocumentGoods = '',
				xmlDocumentMoa = '',
				xmlDocumentMoaFtx = '',
				xmlDocumentSummary = '',
				xmlDocumentGoodsAliDtmFtx = '',
				xmlDocumentGoodsSg18Sg20 = '',
				xmlDocumentGoodsMea = '';

				sumClearArr = [],
				sumWithVatArr = [],
				sumClear = 0,
				sumWithVat = 0,
				sumVat = 0;

			xmlDocumentHeader = mainTagOpen+br+tab+unhOpen+br+tab2+e0062Open+'123'+e0062Close+tab2+s009Open+br+tab3+e0065Open+docType+e0065Close+tab3+e0052Open+'D'+e0052Close+tab3+e0054Open+'01B'+e0054Close+tab3+e0051Open+'UN'+e0051Close+tab3+e0057Open+eancomCode+e0057Close+tab2+s009Close+tab+unhClose+tab+bgmOpen+br+tab2+c002Open+br+tab3+e1001Open+bgmCode+e1001Close+tab2+c002Close+tab2+c106Open+br+tab3+e1004Open+'<p class="no-transform">'+docNumber+'</p>'+e1004Close+tab3+e1060Open+docVer+e1060Close+tab2+c106Close+tab2+e1225Open+messageFunctionCode+e1225Close+tab+bgmClose;
			xmlDocumentSummary = tab+cntOpen+br+tab2+c270Open+br+tab3+e6069Open+'2'+e6069Close+tab3+e6066Open+positions+e6066Close+tab2+c270Close+tab+cntClose+tab+untOpen+br+tab2+e0074Open+e0074Close+tab2+e0062Open+'123'+e0062Close+tab+untClose+mainTagClose;
			
			if(docType=='ordrsp'){
				xmlDocumentDtm = tab+dtmOpen+br+tab2+c507Open+br+tab3+e2005Open+'137'+e2005Close+tab3+e2380Open+docDate+e2380Close+tab3+e2379Open+'102'+e2379Close+tab2+c507Close+tab+dtmClose+tab+dtmOpen+br+tab2+c507Open+br+tab3+e2005Open+'2'+e2005Close+tab3+e2380Open+deliveryDate+e2380Close+tab3+e2379Open+'102'+e2379Close+tab2+c507Close+tab+dtmClose;
				xmlDocumentComments = tab+ftxOpen+br+tab2+e4451Open+'ZZZ'+e4451Close+tab2+c108Open+br+tab3+e4440Open+comment+e4440Close+tab2+c108Close+tab+ftxClose;
				xmlDocumentMessageDetails = tab+sg1Open+br+tab2+rffOpen+br+tab3+c506Open+br+tab4+e1153Open+'on'+e1153Close+tab4+e1154Open+'<p class="no-transform">'+orderNumber+'</p>'+e1154Close+tab4+e1060Open+orderVer+e1060Close+tab3+c506Close+tab2+rffClose+tab2+dtmOpen+br+tab3+c507Open+br+tab4+e2005Open+'171'+e2005Close+tab4+e2380Open+orderDate+e2380Close+tab4+e2379Open+'102'+e2379Close+tab3+c507Close+tab2+dtmClose+tab+sg1Close;
				xmlDocumentParticipants = tab+sg3Open+br+tab2+nadOpen+br+tab3+e3035Open+'BY'+e3035Close+tab3+c082Open+br+tab4+e3039Open+distrGln+e3039Close+tab4+e3055Open+'9'+e3055Close+tab3+c082Close+tab2+nadClose+tab+sg3Close+tab+sg3Open+br+tab2+nadOpen+br+tab3+e3035Open+'su'+e3035Close+tab3+c082Open+br+tab4+e3039Open+supplierGln+e3039Close+tab4+e3055Open+'9'+e3055Close+tab3+c082Close+tab2+nadClose+tab+sg3Close+tab+sg3Open+br+tab2+nadOpen+br+tab3+e3035Open+'dp'+e3035Close+tab3+c082Open+br+tab4+e3039Open+deliveryPointGln+e3039Close+tab4+e3055Open+'9'+e3055Close+tab3+c082Close+tab2+nadClose+tab+sg3Close;

				// trimming inputs and getting sum of lines and the entire document
				for (let i = 0; i <= positions-1; i++) {
					let goodPriceClearTrim = goodPriceClear[i].value.replace(/ /g,"").replace(/,/g,".");
						goodPriceVatTrim = goodPriceVat[i].value.replace(/ /g,"").replace(/,/g,".");
						lineValueClear = Math.round((goodPriceClearTrim*goodConfirmed[i].value)*100)/100;
						lineValueVat = Math.round((goodPriceVatTrim*goodConfirmed[i].value)*100)/100;
					sumClearArr.push(lineValueClear);
					sumWithVatArr.push(lineValueVat);
					sumClear += (Math.round((sumClearArr[i])*100))/100;
					sumWithVat += (Math.round((sumWithVatArr[i])*100))/100;
					sumVat = (Math.round((sumWithVat-sumClear)*100))/100;
					
					xmlDocumentGoodsLin = tab2+linOpen+br+tab3+e1082Open+(i+1)+e1082Close+tab3+e1229Open+'3'+e1229Close+tab3+c212Open+br+tab4+e7140Open+goodGtins[i].value+e7140Close+br+tab4+e7143Open+'srv'+e7143Close+tab3+c212Close+tab2+linClose;
					xmlDocumentGoodsPia = tab2+piaOpen+br+tab3+e4347Open+'1'+e4347Close+br+tab3+c212Open+br+tab4+e7140Open+goodArts[i].value+e7140Close+tab4+e7143Open+'sa'+e7143Close+tab3+c212Close+tab2+piaClose;
					xmlDocumentGoodsImd = tab2+imdOpen+br+tab3+e7077Open+'f'+e7077Close+tab3+c273Open+br+tab4+e7008Open+'<p class="no-transform">'+goodNames[i].value+'</p>'+e7008Close+tab3+c273Close+tab2+imdClose;
					xmlDocumentGoodsQty = tab2+qtyOpen+br+tab3+c186Open+br+tab4+e6063Open+'21'+e6063Close+tab4+e6060Open+(goodOrdered[i].value+'.000')+e6060Close+tab4+e6411Open+goodOrderUnits[i].value+e6411Close+tab3+c186Close+tab2+qtyClose+tab2+qtyOpen+br+tab3+c186Open+br+tab4+e6063Open+'170'+e6063Close+tab4+e6060Open+(goodConfirmed[i].value+'.000')+e6060Close+tab4+e6411Open+goodOrderUnits[i].value+e6411Close+tab3+c186Close+tab2+qtyClose;
					xmlDocumentGoodsMoa = tab2+moaOpen+br+tab3+c516Open+br+tab4+e5025Open+'203'+e5025Close+tab4+e5004Open+lineValueClear+e5004Close+tab3+c516Close+tab2+moaClose+tab2+moaOpen+br+tab3+c516Open+br+tab4+e5025Open+'128'+e5025Close+tab4+e5004Open+lineValueVat+e5004Close+tab3+c516Close+tab2+moaClose;
					xmlDocumentGoodsSg30Sg36 = tab2+sg30Open+br+tab3+priOpen+br+tab4+c509Open+br+tab5+e5125Open+'aaa'+e5125Close+tab5+e5118Open+goodPriceClear[i].value.replace(/ /g,"").replace(/,/g,".")+e5118Close+tab4+c509Close+tab3+priClose+tab2+sg30Close+tab2+sg30Open+br+tab3+priOpen+br+tab4+c509Open+br+tab5+e5125Open+'aae'+e5125Close+tab5+e5118Open+goodPriceVat[i].value.replace(/ /g,"").replace(/,/g,".")+e5118Close+tab4+c509Close+tab3+priClose+tab2+sg30Close+tab2+sg36Open+br+tab3+taxOpen+br+tab4+e5283Open+'7'+e5283Close+tab4+c241Open+br+tab5+e5153Open+'vat'+e5153Close+tab4+c241Close+tab4+c243Open+br+tab5+e5278Open+goodVat[i].value+e5278Close+tab4+c243Close+tab3+taxClose+tab2+sg36Close;
					xmlDocumentGoods += tab+sg26Open+br+xmlDocumentGoodsLin+xmlDocumentGoodsPia+xmlDocumentGoodsImd+xmlDocumentGoodsQty+xmlDocumentGoodsMoa+xmlDocumentGoodsSg30Sg36+tab+sg26Close;	
				};
				xmlDocumentMoa = tab+unsOpen+br+tab2+e0081Open+'s'+e0081Close+tab+unsClose+tab+moaOpen+br+tab3+c516Open+br+tab3+e5025Open+'79'+e5025Close+tab3+e5004Open+sumClear+e5004Close+tab2+c516Close+tab+moaClose+tab+moaOpen+br+tab2+c516Open+br+tab3+e5025Open+'86'+e5025Close+tab3+e5004Open+sumWithVat+e5004Close+tab2+c516Close+tab+moaClose+tab+moaOpen+br+tab2+c516Open+br+tab3+e5025Open+'124'+e5025Close+tab3+e5004Open+sumVat+e5004Close+tab2+c516Close+tab+moaClose;
				xmlDocument = xmlDocumentHeader+xmlDocumentDtm+xmlDocumentComments+xmlDocumentMessageDetails+xmlDocumentParticipants+xmlDocumentGoods+xmlDocumentMoa+xmlDocumentSummary;
			}
			else if(docType=='desadv'){
				for (let i = 0; i <= positions-1; i++) {
					let goodPriceClearTrim = goodPriceClear[i].value.replace(/ /g,"").replace(/,/g,"."),
						goodPriceVatTrim = goodPriceVat[i].value.replace(/ /g,"").replace(/,/g,"."),
						lineValueClear = Math.round((goodPriceClearTrim*goodConfirmed[i].value)*100)/100,
						lineValueVat = Math.round((goodPriceVatTrim*goodConfirmed[i].value)*100)/100,
						lineTax = Math.round((lineValueVat-lineValueClear)*100)/100;
					sumClearArr.push(lineValueClear);
					sumWithVatArr.push(lineValueVat);
					sumClear += (Math.round((sumClearArr[i])*100))/100;
					sumWithVat += (Math.round((sumWithVatArr[i])*100))/100;
					sumVat = (Math.round((sumWithVat-sumClear)*100))/100;
					xmlDocumentGoodsMoa = tab3+moaOpen+br+tab4+c516Open+br+tab5+e5025Open+'203'+e5025Close+tab5+e5004Open+lineValueClear+e5004Close+tab4+c516Close+tab3+moaClose+tab3+moaOpen+br+tab4+c516Open+br+tab5+e5025Open+'79'+e5025Close+tab5+e5004Open+lineValueVat+e5004Close+tab4+c516Close+tab3+moaClose+tab3+moaOpen+br+tab4+c516Open+br+tab5+e5025Open+'124'+e5025Close+tab5+e5004Open+lineTax+e5004Close+tab4+c516Close+tab3+moaClose+tab3+moaOpen+br+tab4+c516Open+br+tab5+e5025Open+'146'+e5025Close+tab5+e5004Open+goodPriceClearTrim+e5004Close+tab4+c516Close+tab3+moaClose+tab3+moaOpen+br+tab4+c516Open+br+tab5+e5025Open+'XB5'+e5025Close+tab5+e5004Open+goodPriceVatTrim+e5004Close+tab4+c516Close+tab3+moaClose;
					xmlDocumentGoodsLin = tab3+linOpen+br+tab4+e1082Open+(i+1)+e1082Close+tab4+c212Open+br+tab5+e7140Open+goodGtins[i].value+e7140Close+tab5+e7143Open+'srv'+e7143Close+tab4+c212Close+tab3+linClose;
					xmlDocumentGoodsPia = tab3+piaOpen+br+tab4+e4347Open+'1'+e4347Close+tab4+c212Open+br+tab5+e7140Open+goodArts[i].value+e7140Close+tab5+e7143Open+'sa'+e7143Close+tab4+c212Close+tab3+piaClose;
					xmlDocumentGoodsImd = tab3+imdOpen+br+tab4+e7077Open+'f'+e7077Close+tab4+c273Open+br+tab5+e7008Open+'<p class="no-transform">'+goodNames[i].value+'</p>'+e7008Close+tab4+c273Close+tab3+imdClose;
					xmlDocumentGoodsMea = tab3+meaOpen+br+tab4+e6311Open+'pd'+e6311Close+tab4+c502Open+br+tab5+e6313Open+'di'+e6313Close+tab4+c502Close+tab4+c174Open+br+tab5+e6411Open+goodOrderUnits[i].value+e6411Close+tab5+e6314Open+e6314Close+tab4+c174Close+tab3+meaClose+tab3+meaOpen+br+tab4+e6311Open+'pd'+e6311Close+tab4+c502Open+br+tab5+e6313Open+'aaa'+e6313Close+tab4+c502Close+tab4+c174Open+br+tab5+e6411Open+e6411Close+tab5+e6314Open+e6314Close+tab4+c174Close+tab3+meaClose;					
					xmlDocumentGoodsQty = tab3+qtyOpen+br+tab4+c186Open+br+tab5+e6063Open+'12'+e6063Close+tab5+e6060Open+(goodShipped[i].value+'.000')+e6060Close+tab5+e6411Open+goodOrderUnits[i].value+e6411Close+tab4+c186Close+tab3+qtyClose+tab3+qtyOpen+br+tab4+c186Open+br+tab5+e6063Open+'21'+e6063Close+tab5+e6060Open+(goodOrdered[i].value+'.000')+e6060Close+tab5+e6411Open+goodOrderUnits[i].value+e6411Close+tab4+c186Close+tab3+qtyClose;
					xmlDocumentGoodsAliDtmFtx = tab3+aliOpen+br+tab4+e3239Open+'RU'+e3239Close+tab3+aliClose+tab3+dtmOpen+br+tab4+c507Open+br+tab5+e2005Open+'36'+e2005Close+tab5+e2380Open+e2380Close+tab5+e2379Open+'102'+e2379Close+tab4+c507Close+tab3+dtmClose+tab3+ftxOpen+br+tab4+e4451Open+'zzz'+e4451Close+tab4+c108Open+br+tab5+e4440Open+goodVat[i].value+e4440Close+tab4+c108Close+tab3+ftxClose;
					xmlDocumentGoodsSg18Sg20 = tab3+sg18Open+sg18Close+tab3+sg20Open+br+tab4+locOpen+br+tab5+e3227Open+'7'+e3227Close+tab5+c517Open+br+tab5+tab+e3225Open+e3225Close+br+tab5+tab+e3055Open+'9'+e3055Close+tab5+c517Close+tab4+locClose+tab3+sg20Close ;
					xmlDocumentGoods += tab2+sg17Open+br+xmlDocumentGoodsLin+xmlDocumentGoodsPia+xmlDocumentGoodsImd+xmlDocumentGoodsMea+xmlDocumentGoodsQty+xmlDocumentGoodsAliDtmFtx+xmlDocumentGoodsMoa+xmlDocumentGoodsSg18Sg20+tab2+sg17Close;	
				};
				xmlDocumentDtm = tab+dtmOpen+br+tab2+c507Open+br+tab3+e2005Open+'137'+e2005Close+tab3+e2380Open+docDate+e2380Close+tab3+e2379Open+'102'+e2379Close+tab2+c507Close+tab+dtmClose+tab+dtmOpen+br+tab2+c507Open+br+tab3+e2005Open+'17'+e2005Close+tab3+e2380Open+deliveryDate+e2380Close+tab3+e2379Open+'102'+e2379Close+tab2+c507Close+tab+dtmClose;
				xmlDocumentMoaFtx = tab+moaOpen+br+tab2+c516Open+br+tab3+e5025Open+'86'+e5025Close+tab3+e5004Open+sumWithVat+e5004Close+tab2+c516Close+tab+moaClose+tab+moaOpen+br+tab2+c516Open+br+tab3+e5025Open+'125'+e5025Close+tab3+e5004Open+sumClear+e5004Close+tab2+c516Close+tab+moaClose+tab+moaOpen+br+tab2+c516Open+br+tab3+e5025Open+'124'+e5025Close+tab3+e5004Open+sumVat+e5004Close+tab2+c516Close+tab+moaClose+tab+ftxOpen+br+tab2+e4451Open+'ZZZ'+e4451Close+tab2+c108Open+br+tab3+e4440Open+e4440Close+tab2+c108Close+tab+ftxClose;
				xmlDocumentMessageDetails = tab+sg1Open+br+tab2+rffOpen+br+tab3+c506Open+br+tab4+e1153Open+'on'+e1153Close+tab4+e1154Open+'<p class="no-transform">'+orderNumber+'</p>'+e1154Close+tab3+c506Close+tab2+rffClose+tab2+dtmOpen+br+tab3+c507Open+br+tab4+e2005Open+'171'+e2005Close+tab4+e2380Open+orderDate+e2380Close+tab4+e2379Open+'102'+e2379Close+tab3+c507Close+tab2+dtmClose+tab+sg1Close+tab+sg1Open+br+tab2+rffOpen+br+tab3+c506Open+br+tab4+e1153Open+'AWC'+e1153Close+tab4+e1154Open+e1154Close+tab3+c506Close+tab2+rffClose+tab+sg1Close+tab+sg1Open+br+tab2+rffOpen+br+tab3+c506Open+br+tab4+e1153Open+'IV'+e1153Close+tab4+e1154Open+'01/00000001-19'+e1154Close+tab3+c506Close+tab2+rffClose+tab2+dtmOpen+br+tab3+c507Open+br+tab4+e2005Open+'171'+e2005Close+tab4+e2380Open+deliveryDate+e2380Close+tab4+e2379Open+'102'+e2379Close+tab3+c507Close+tab2+dtmClose+tab+sg1Close;
				xmlDocumentParticipants = tab+sg2Open+br+tab2+nadOpen+br+tab3+e3035Open+'BY'+e3035Close+tab3+c082Open+br+tab4+e3039Open+distrGln+e3039Close+tab4+e3055Open+'9'+e3055Close+tab3+c082Close+tab2+nadClose+tab+sg2Close+tab+sg2Open+br+tab2+nadOpen+br+tab3+e3035Open+'su'+e3035Close+tab3+c082Open+br+tab4+e3039Open+supplierGln+e3039Close+tab4+e3055Open+'9'+e3055Close+tab3+c082Close+tab2+nadClose+tab+sg2Close+tab+sg2Open+br+tab2+nadOpen+br+tab3+e3035Open+'dp'+e3035Close+tab3+c082Open+br+tab4+e3039Open+deliveryPointGln+e3039Close+tab4+e3055Open+'9'+e3055Close+tab3+c082Close+tab2+nadClose+tab+sg2Close+tab+sg10Open+br+tab2+cpsOpen+br+tab3+e7164Open+'1'+e7164Close+tab2+cpsClose;
					

				xmlDocument = xmlDocumentHeader+xmlDocumentDtm+xmlDocumentMoaFtx+xmlDocumentMessageDetails+xmlDocumentParticipants+xmlDocumentGoods+tab+sg10Close+xmlDocumentSummary;
			}
			else if(docType=='recadv'){
				xmlDocument = xmlDocumentHeader+'Sorry, recadv is not completely available yet'+br+xmlDocumentSummary;
			}
			else {
				error('some sort of error...');
			}
			
		};
		createEancom();
		codeField.innerHTML = xmlDocument;
 	};
	
	btnStart.addEventListener('click', function startChech() {
		if (readyStatus == false) {
			codeField.innerHTML = 'Please select document type';
		}
		else if (readyStatus == true && readyStatus2 == false) {
			codeField.innerHTML = 'Complete the form (next)';
		}
		else if (readyStatus == true && readyStatus2 == true) {
			codeField.innerHTML = '';
			codeField.appendChild(loader);
			setTimeout(getData,300);
		}
		else {
			alert('something went wrong');
		}
	});
	
	btnCopy.addEventListener('click', function () {
		let range = document.createRange();
		range.selectNode(codeField);
		window.getSelection().addRange(range);
		try { 
			document.execCommand('copy'); 
		}
		catch(err) { 
			console.log('Can`t copy, boss'); 
		}
		window.getSelection().removeAllRanges();
	});
// notifications
	let overlay = document.getElementsByClassName('overlay')[0];
	let aboutWindow = document.getElementById('about-window');
	let close = document.getElementsByClassName('close')[0];
	let closeAlert = document.getElementsByClassName('close')[1];
	let about = document.getElementsByClassName('about')[0];
	let alertWindow = document.getElementsByClassName('notification')[0];
	let alertMessage = document.getElementsByClassName('notification-body')[0];
	about.addEventListener('click', function(){
		overlay.classList.remove('hidden');
		overlay.classList.add('visible');
		aboutWindow.classList.remove('hidden');
		aboutWindow.classList.add('visible');
	});
	overlay.addEventListener('click', function(){
		overlay.classList.add('hidden');
		overlay.classList.remove('visible');
		aboutWindow.classList.add('hidden');
		aboutWindow.classList.remove('visible');
		alertWindow.classList.add('hidden');
		alertWindow.classList.remove('visible');
	});
	close.addEventListener('click', function(){
		overlay.classList.add('hidden');
		overlay.classList.remove('visible');
		aboutWindow.classList.add('hidden');
		aboutWindow.classList.remove('visible');
	});

	function error(message) {
		let op = 99;
		alertMessage.innerHTML = message;
		overlay.classList.remove('hidden');
		overlay.classList.add('visible');
		alertWindow.classList.remove('hidden');
		alertWindow.classList.add('visible');

		setTimeout(function(){
			overlay.classList.add('hidden');
			overlay.classList.remove('visible');
			alertWindow.classList.add('hidden');
			alertWindow.classList.remove('visible');
		}, 3000);
	};

	closeAlert.addEventListener('click', function(){
		overlay.classList.add('hidden');
		overlay.classList.remove('visible');
		alertWindow.classList.add('hidden');
		alertWindow.classList.remove('visible');
	});

// "product" version
	let version = document.getElementsByClassName('version')[0];
		version.innerHTML = '0.0.9';

// auto filling doc number
	let orderNumberAf = document.getElementById('order-number'),
		docNumberAf = document.getElementById('doc-number');
	orderNumberAf.addEventListener('input', docNumberRefresh);

		function docNumberRefresh() {
		let docNumber = document.getElementById('doc-number').value,
			orderNumber = document.getElementById('order-number').value;
		docNumberAf.value = docType+'-'+orderNumber;
	}
}
