var mongoose = require('mongoose'),
	Contact  = require('./models/contact'),
	User		 = require('./models/user');

var contacts = [
  { name: 'Holden, Sylvia V.',
    contact:
     { mobile: '(980) 116-3860',
       email: 'Curabitur.sed@interdumfeugiat.net' },
    dob: 'November 6th, 2016' },
  { name: 'Love, Grant V.',
    contact:
     { mobile: '(858) 312-7435',
       email: 'enim.nec.tempus@egetmetusIn.org' },
    dob: 'July 14th, 2017' },
  { name: 'Long, Sarah U.',
    contact:
     { mobile: '(675) 477-3856',
       email: 'ipsum.Suspendisse@necmalesuadaut.net' },
    dob: 'March 12th, 2018' },
  { name: 'Nielsen, Brock N.',
    contact:
     { mobile: '(568) 789-9688',
       email: 'odio.Aliquam.vulputate@nec.org' },
    dob: 'August 28th, 2018' },
  { name: 'Parsons, Simon I.',
    contact:
     { mobile: '(335) 463-1252',
       email: 'cursus.vestibulum@Nullam.org' },
    dob: 'January 3rd, 2018' },
  { name: 'Foreman, Jeanette K.',
    contact: { mobile: '(967) 547-6367', email: 'Vivamus.nisi@Donec.com' },
    dob: 'September 21st, 2017' },
  { name: 'Norris, Claire U.',
    contact:
     { mobile: '(141) 323-8655',
       email: 'odio.Aliquam.vulputate@ultricies.edu' },
    dob: 'May 8th, 2017' },
  { name: 'Larsen, Ignatius B.',
    contact:
     { mobile: '(245) 430-0885',
       email: 'Integer.vulputate.risus@eleifend.co.uk' },
    dob: 'January 17th, 2018' },
  { name: 'Davis, Olga I.',
    contact:
     { mobile: '(873) 676-9177',
       email: 'porttitor.vulputate@Suspendissesagittis.net' },
    dob: 'June 2nd, 2018' },
  { name: 'Daugherty, Kevin N.',
    contact: { mobile: '(380) 315-1686', email: 'Quisque@orci.com' },
    dob: 'July 3rd, 2017' },
  { name: 'Fields, Steel F.',
    contact: { mobile: '(715) 749-3586', email: 'ac@blanditat.ca' },
    dob: 'June 30th, 2017' },
  { name: 'Gutierrez, Alden G.',
    contact: { mobile: '(710) 231-8302', email: 'luctus.lobortis@arcu.edu' },
    dob: 'April 18th, 2017' },
  { name: 'Mcneil, Orson C.',
    contact: { mobile: '(855) 609-1701', email: 'interdum@duiCumsociis.ca' },
    dob: 'February 15th, 2018' },
  { name: 'Dickson, Lacy O.',
    contact:
     { mobile: '(672) 352-2196',
       email: 'molestie.tortor@ornareFuscemollis.co.uk' },
    dob: 'March 26th, 2018' },
  { name: 'Golden, Xanthus A.',
    contact: { mobile: '(229) 923-7577', email: 'id@tristique.org' },
    dob: 'June 1st, 2017' },
  { name: 'Phelps, Clayton Z.',
    contact: { mobile: '(501) 880-9390', email: 'aliquet@pharetra.org' },
    dob: 'July 14th, 2018' },
  { name: 'Sandoval, Quemby X.',
    contact:
     { mobile: '(962) 495-0134',
       email: 'Quisque.ac.libero@velvulputate.com' },
    dob: 'September 3rd, 2018' },
  { name: 'Finley, Vera A.',
    contact:
     { mobile: '(287) 562-8069',
       email: 'magna.tellus@nonummyacfeugiat.com' },
    dob: 'December 19th, 2017' },
  { name: 'Rowe, Lillian Z.',
    contact:
     { mobile: '(743) 873-3554',
       email: 'montes.nascetur.ridiculus@leoMorbi.net' },
    dob: 'May 28th, 2017' },
  { name: 'Blake, Byron Z.',
    contact: { mobile: '(925) 403-6194', email: 'nibh.Donec@velmauris.ca' },
    dob: 'April 15th, 2017' },
  { name: 'Carlson, Kaseem M.',
    contact:
     { mobile: '(562) 957-0055',
       email: 'pellentesque.massa.lobortis@quisurna.net' },
    dob: 'February 5th, 2018' },
  { name: 'Keith, Charlotte X.',
    contact:
     { mobile: '(986) 794-6841',
       email: 'lacus.Mauris@blanditNamnulla.org' },
    dob: 'June 12th, 2017' },
  { name: 'Hancock, Rhea R.',
    contact: { mobile: '(892) 225-8632', email: 'id@accumsan.edu' },
    dob: 'March 8th, 2018' },
  { name: 'Luna, Mariam O.',
    contact:
     { mobile: '(411) 338-1985',
       email: 'habitant.morbi@nullaIntincidunt.edu' },
    dob: 'October 7th, 2016' },
  { name: 'Kidd, Maisie R.',
    contact:
     { mobile: '(966) 155-0936',
       email: 'Mauris.eu@nuncestmollis.edu' },
    dob: 'July 22nd, 2018' },
  { name: 'Saunders, Inez A.',
    contact: { mobile: '(382) 120-1959', email: 'erat@Aliquam.co.uk' },
    dob: 'December 6th, 2016' },
  { name: 'Ware, Suki B.',
    contact: { mobile: '(877) 892-2492', email: 'congue.a@nec.com' },
    dob: 'December 28th, 2016' },
  { name: 'Baxter, Whitney T.',
    contact:
     { mobile: '(397) 749-2662',
       email: 'dictum.eu.placerat@pellentesque.com' },
    dob: 'July 21st, 2017' },
  { name: 'Tyler, Reece M.',
    contact: { mobile: '(784) 640-1281', email: 'ultrices@Mauris.net' },
    dob: 'July 14th, 2018' },
  { name: 'Ashley, Hoyt F.',
    contact:
     { mobile: '(416) 483-6297',
       email: 'consectetuer@etultricesposuere.org' },
    dob: 'June 22nd, 2017' },
  { name: 'Mckenzie, Imelda P.',
    contact: { mobile: '(574) 715-5904', email: 'iaculis@pedeetrisus.com' },
    dob: 'January 12th, 2018' },
  { name: 'Mcfarland, Naomi C.',
    contact:
     { mobile: '(620) 677-5719',
       email: 'sit.amet@Integervulputate.com' },
    dob: 'June 2nd, 2017' },
  { name: 'Lucas, Erin C.',
    contact: { mobile: '(352) 293-6300', email: 'libero@Nulla.co.uk' },
    dob: 'October 22nd, 2017' },
  { name: 'Trevino, Rachel H.',
    contact:
     { mobile: '(474) 227-4406',
       email: 'Quisque.libero.lacus@dignissimpharetraNam.ca' },
    dob: 'November 26th, 2016' },
  { name: 'George, Martina S.',
    contact: { mobile: '(412) 191-4082', email: 'mi.Aliquam@nullaIn.ca' },
    dob: 'April 28th, 2017' },
  { name: 'Erickson, Daquan G.',
    contact:
     { mobile: '(572) 361-6980',
       email: 'et.magna.Praesent@Integer.com' },
    dob: 'November 8th, 2017' },
  { name: 'Jacobson, Tallulah S.',
    contact:
     { mobile: '(342) 294-7428',
       email: 'In.condimentum.Donec@nibh.com' },
    dob: 'October 15th, 2016' },
  { name: 'Colon, Ebony V.',
    contact:
     { mobile: '(426) 978-2906',
       email: 'posuere.cubilia.Curae@semperduilectus.com' },
    dob: 'April 8th, 2018' },
  { name: 'Porter, Rylee E.',
    contact: { mobile: '(357) 568-9626', email: 'diam@tincidunt.co.uk' },
    dob: 'April 10th, 2017' },
  { name: 'Price, Isaiah V.',
    contact: { mobile: '(641) 413-6162', email: 'non@Proin.org' },
    dob: 'April 19th, 2018' },
  { name: 'Kent, Gavin N.',
    contact:
     { mobile: '(593) 773-8496',
       email: 'ultricies.ornare.elit@cursus.co.uk' },
    dob: 'November 2nd, 2017' },
  { name: 'Nash, Cecilia Y.',
    contact: { mobile: '(184) 454-2731', email: 'eu@in.ca' },
    dob: 'January 6th, 2018' },
  { name: 'Rojas, Gwendolyn F.',
    contact: { mobile: '(600) 521-0109', email: 'vitae@ultrices.edu' },
    dob: 'January 15th, 2018' },
  { name: 'Allison, Curran R.',
    contact:
     { mobile: '(414) 376-3141',
       email: 'amet.dapibus.id@lobortis.edu' },
    dob: 'October 21st, 2017' },
  { name: 'Washington, Galena W.',
    contact: { mobile: '(481) 632-5443', email: 'Fusce@dolor.co.uk' },
    dob: 'January 29th, 2018' },
  { name: 'Holmes, Graiden J.',
    contact:
     { mobile: '(115) 964-0991',
       email: 'lorem@porttitorvulputate.org' },
    dob: 'March 28th, 2017' },
  { name: 'Reed, Bo C.',
    contact: { mobile: '(361) 167-2482', email: 'lorem.sit@vitae.com' },
    dob: 'November 9th, 2017' },
  { name: 'Weiss, Tiger O.',
    contact: { mobile: '(617) 163-8941', email: 'Cras@etpedeNunc.edu' },
    dob: 'January 23rd, 2017' },
  { name: 'Lott, Lucian Y.',
    contact:
     { mobile: '(568) 662-6954',
       email: 'at@tristiquealiquetPhasellus.edu' },
    dob: 'September 16th, 2018' },
  { name: 'Guzman, Wayne I.',
    contact: { mobile: '(942) 703-8279', email: 'aliquet.sem.ut@nisi.net' },
    dob: 'May 7th, 2018' },
  { name: 'Goodwin, Hammett Q.',
    contact:
     { mobile: '(342) 705-7181',
       email: 'luctus@turpisvitaepurus.org' },
    dob: 'February 28th, 2017' },
  { name: 'May, Malik C.',
    contact: { mobile: '(219) 245-5849', email: 'Phasellus.libero@est.ca' },
    dob: 'February 3rd, 2018' },
  { name: 'Horne, Eaton P.',
    contact: { mobile: '(874) 539-1823', email: 'mauris.a@loremvitae.org' },
    dob: 'September 17th, 2018' },
  { name: 'Baird, Lucy C.',
    contact:
     { mobile: '(504) 722-4472',
       email: 'orci.lobortis@euismodacfermentum.edu' },
    dob: 'August 5th, 2018' },
  { name: 'Bradford, Hasad E.',
    contact: { mobile: '(778) 279-9465', email: 'arcu@interdum.com' },
    dob: 'June 26th, 2017' },
  { name: 'Walsh, Jared V.',
    contact: { mobile: '(409) 467-8784', email: 'nec.ante@metusIn.ca' },
    dob: 'June 23rd, 2017' },
  { name: 'Santana, Sydnee E.',
    contact:
     { mobile: '(364) 483-2378',
       email: 'Quisque.ac.libero@dictum.org' },
    dob: 'March 18th, 2018' },
  { name: 'Mcintosh, Orlando O.',
    contact:
     { mobile: '(665) 331-7448',
       email: 'Donec.non@placeratorci.com' },
    dob: 'July 26th, 2017' },
  { name: 'Dunlap, Colton M.',
    contact:
     { mobile: '(955) 901-9135',
       email: 'ut.pellentesque.eget@semmagnanec.org' },
    dob: 'October 26th, 2016' },
  { name: 'Baker, Clark B.',
    contact:
     { mobile: '(198) 675-5256',
       email: 'adipiscing@amagnaLorem.net' },
    dob: 'November 2nd, 2016' },
  { name: 'Herman, Hector R.',
    contact:
     { mobile: '(500) 942-4490',
       email: 'turpis@imperdietornare.org' },
    dob: 'February 1st, 2017' },
  { name: 'Mosley, Cameron Q.',
    contact: { mobile: '(827) 477-2507', email: 'interdum@Phasellus.co.uk' },
    dob: 'April 1st, 2017' },
  { name: 'Morrison, Hamish M.',
    contact:
     { mobile: '(373) 149-5036',
       email: 'mattis.Integer@auctorquistristique.co.uk' },
    dob: 'October 22nd, 2017' },
  { name: 'Beck, Zia N.',
    contact: { mobile: '(844) 458-4408', email: 'metus.urna@vel.net' },
    dob: 'July 18th, 2017' },
  { name: 'Beck, Kyla X.',
    contact: { mobile: '(846) 633-8009', email: 'amet.diam@blanditenim.edu' },
    dob: 'December 12th, 2016' },
  { name: 'Holcomb, Dalton F.',
    contact:
     { mobile: '(469) 587-7593',
       email: 'lorem.vitae.odio@egestas.net' },
    dob: 'January 27th, 2017' },
  { name: 'Richmond, Jaden R.',
    contact:
     { mobile: '(971) 521-4722',
       email: 'sed.pede.nec@Integertinciduntaliquam.co.uk' },
    dob: 'March 31st, 2017' },
  { name: 'Schultz, Blake X.',
    contact:
     { mobile: '(961) 964-5160',
       email: 'Proin.ultrices.Duis@semmolestiesodales.edu' },
    dob: 'December 21st, 2017' },
  { name: 'Moore, Stella M.',
    contact: { mobile: '(460) 836-4977', email: 'in.cursus@erat.net' },
    dob: 'December 5th, 2016' },
  { name: 'Mayo, Libby O.',
    contact: { mobile: '(277) 326-6364', email: 'neque@Aliquamultrices.ca' },
    dob: 'December 20th, 2016' },
  { name: 'Hines, Tobias D.',
    contact: { mobile: '(796) 820-3475', email: 'justo@Curabiturvel.org' },
    dob: 'July 20th, 2018' },
  { name: 'Collier, Megan B.',
    contact:
     { mobile: '(510) 527-5581',
       email: 'dui.quis.accumsan@nuncestmollis.com' },
    dob: 'October 17th, 2016' },
  { name: 'Torres, Rashad T.',
    contact: { mobile: '(445) 405-0867', email: 'ullamcorper@torquent.com' },
    dob: 'October 2nd, 2017' },
  { name: 'Avila, Nero Z.',
    contact:
     { mobile: '(494) 579-2838',
       email: 'Etiam.vestibulum@nibhenim.co.uk' },
    dob: 'May 1st, 2017' },
  { name: 'Castro, Trevor B.',
    contact: { mobile: '(110) 499-1223', email: 'tristique@nuncest.org' },
    dob: 'March 7th, 2017' },
  { name: 'Price, Preston U.',
    contact:
     { mobile: '(120) 423-3025',
       email: 'Etiam.vestibulum@maurisSuspendissealiquet.com' },
    dob: 'November 23rd, 2017' },
  { name: 'Long, Whoopi G.',
    contact:
     { mobile: '(953) 671-5637',
       email: 'dignissim.magna@nascetur.com' },
    dob: 'July 31st, 2017' },
  { name: 'Richardson, Noble A.',
    contact: { mobile: '(988) 111-6339', email: 'penatibus.et@mienim.co.uk' },
    dob: 'June 11th, 2017' },
  { name: 'Tate, Hyatt E.',
    contact:
     { mobile: '(295) 431-2423',
       email: 'hymenaeos.Mauris@iaculisneceleifend.ca' },
    dob: 'February 5th, 2018' },
  { name: 'Santiago, Zephania J.',
    contact:
     { mobile: '(512) 106-5322',
       email: 'pulvinar.arcu.et@convallisantelectus.org' },
    dob: 'January 6th, 2018' },
  { name: 'Holden, Blaine O.',
    contact:
     { mobile: '(484) 866-9039',
       email: 'fringilla@quistristique.com' },
    dob: 'April 6th, 2018' },
  { name: 'Casey, Orlando O.',
    contact: { mobile: '(893) 127-1239', email: 'et.netus@pretium.edu' },
    dob: 'May 14th, 2017' },
  { name: 'Schmidt, Vance R.',
    contact:
     { mobile: '(414) 629-1363',
       email: 'vitae.diam.Proin@pedemalesuadavel.net' },
    dob: 'August 13th, 2018' },
  { name: 'Barry, Leo J.',
    contact: { mobile: '(816) 612-9067', email: 'orci.sem@aliquet.co.uk' },
    dob: 'May 18th, 2018' },
  { name: 'Campos, Charissa L.',
    contact: { mobile: '(219) 676-3137', email: 'mus@loremvehiculaet.ca' },
    dob: 'September 14th, 2018' },
  { name: 'Mckenzie, Duncan P.',
    contact:
     { mobile: '(849) 848-7301',
       email: 'dictum.sapien.Aenean@enimSed.org' },
    dob: 'April 26th, 2017' },
  { name: 'Harris, Zeph H.',
    contact: { mobile: '(628) 962-6734', email: 'non.nisi@eu.com' },
    dob: 'December 19th, 2017' },
  { name: 'Holt, Randall X.',
    contact:
     { mobile: '(927) 389-9879',
       email: 'dui.nec.tempus@consequatdolor.co.uk' },
    dob: 'March 14th, 2018' },
  { name: 'Mcknight, Ross O.',
    contact: { mobile: '(558) 554-1624', email: 'augue.Sed.molestie@et.org' },
    dob: 'May 6th, 2017' },
  { name: 'Obrien, Zenaida O.',
    contact: { mobile: '(896) 879-0346', email: 'vel@Maurisblandit.edu' },
    dob: 'December 23rd, 2016' },
  { name: 'Henderson, Leandra N.',
    contact: { mobile: '(596) 759-4411', email: 'mollis@nascetur.co.uk' },
    dob: 'December 6th, 2017' },
  { name: 'Strickland, Dieter V.',
    contact:
     { mobile: '(894) 758-0147',
       email: 'ipsum@Quisqueliberolacus.co.uk' },
    dob: 'February 18th, 2017' },
  { name: 'Dillard, Ralph J.',
    contact:
     { mobile: '(450) 807-0906',
       email: 'in.consectetuer@mauris.org' },
    dob: 'September 16th, 2018' },
  { name: 'Smith, Cullen H.',
    contact:
     { mobile: '(633) 186-4410',
       email: 'magnis.dis.parturient@laciniaat.co.uk' },
    dob: 'November 18th, 2016' },
  { name: 'Frost, Forrest Z.',
    contact:
     { mobile: '(255) 182-3463',
       email: 'scelerisque.scelerisque@idantedictum.net' },
    dob: 'June 7th, 2017' },
  { name: 'Pugh, Evelyn I.',
    contact:
     { mobile: '(713) 232-3459',
       email: 'Nunc.mauris.elit@Quisquefringillaeuismod.com' },
    dob: 'March 13th, 2018' },
  { name: 'Crosby, Hilary W.',
    contact:
     { mobile: '(638) 724-6231',
       email: 'Suspendisse@Curabitur.co.uk' },
    dob: 'February 5th, 2018' },
  { name: 'Hyde, Rajah M.',
    contact: { mobile: '(132) 897-4399', email: 'congue@turpis.ca' },
    dob: 'September 9th, 2018' },
  { name: 'Hayes, Carl J.',
    contact: { mobile: '(505) 970-9393', email: 'ut.mi.Duis@interdum.edu' },
    dob: 'October 4th, 2016' },
  { name: 'Lynn, Stephanie Y.',
    contact: { mobile: '(494) 848-1142', email: 'pede.ultrices.a@non.com' },
    dob: 'February 22nd, 2018' } ];

var users = [
	{
		username: 'Messi',
		password: 'football',
		email: 'messi@example.com'
	}
];

function seedDB() {
	// Remove any previous entries
	User.remove({}, function(err) {
		if(err) {
			console.log(err);
		} else {
			users.forEach(function(user) {
				User.create(user, function(err, user) {
					if(err) {
						console.log(err);
					} else {
						console.log("User Created");
					}
				});
			});
		}
	});
	Contact.remove({}, function(err){
		if(err){
			console.log(err);
		} else {
			contacts.forEach(function(data){
				Contact.create(data, function(err, contact){
					if(err){
						console.log(err);
					} else {
						contact.image = 'https://www.hassanlab.eu/sites/default/files/2016-02/blank_person_51.png';
						contact.save(function(err){
							if(err){
								console.log(err);
							} else {
								if(contacts.indexOf(data) === contacts.length - 1){
									console.log('Contacts created');
								}
							}
						});
					}
				});
			});
		}
	});
}

module.exports = seedDB;
