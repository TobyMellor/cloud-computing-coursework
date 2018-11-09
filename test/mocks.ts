import { deindent } from './test-utils';

export default {
  simple: {
    mapper: {
      testInputLines: deindent([
        `the quick brown fox jumps over the lazy dog race care`,
        `seventeen sixteen fifteen thirteen twelve eleven ten nine`,
        `eight seven six five four three two one zero`,
      ]),
      expectedOutputLines: deindent([
        `
          eht\tthe
          cikqu\tquick
          bnorw\tbrown
          fox\tfox
          jmpsu\tjumps
          eorv\tover
          eht\tthe
          alyz\tlazy
          dgo\tdog
          acer\trace
          acer\tcare
        `,
        `
          eeeennstv\tseventeen
          eeinstx\tsixteen
          eeffint\tfifteen
          eehinrtt\tthirteen
          eeltvw\ttwelve
          eeelnv\televen
          ent\tten
          einn\tnine
        `,
        `
          eghit\teight
          eensv\tseven
          isx\tsix
          efiv\tfive
          foru\tfour
          eehrt\tthree
          otw\ttwo
          eno\tone
          eorz\tzero
        `,
      ]),
    },
  },
  advanced: {
    mapper: {
      testInputLines: deindent([
        `rAcE caRe`,
        `care something another word`,
        `testing nice one okay! there!`,
        `e-mail one two three email`,
        `eamIl four five six`,
        `dog--god`,
        `ogd dgo test`,
      ]),
      expectedOutputLines: deindent([
        `
          acer\trace
          acer\tcare
        `,
        `
          acer\tcare
          eghimnost\tsomething
          aehnort\tanother
          dorw\tword
        `,
        `
          eginstt\ttesting
          cein\tnice
          eno\tone
          akoy\tokay
          eehrt\tthere
        `,
        `
          aeilm\te-mail
          eno\tone
          otw\ttwo
          eehrt\tthree
          aeilm\temail
        `,
        `
          aeilm\teamil
          foru\tfour
          efiv\tfive
          isx\tsix
        `,
        `
          dgo\tdog
          dgo\tgod
        `,
        `
          dgo\togd
          dgo\tdgo
          estt\ttest
        `,
      ]),
    },
  },
  realSample: {
    mapper: {
      testInputLines: deindent([
        `The Project Gutenberg EBook of The Home University Library catalogue`,
        `1914/15, by Williams and Norgate, Publishers`,
        ``,
        `This eBook is for the use of anyone anywhere at no cost and with`,
        `almost no restrictions whatsoever.  You may copy it, give it away or`,
        `re-use it under the terms of the Project Gutenberg License included`,
        `with this eBook or online at www.gutenberg.net`,
        ``,
        ``,
        `Title: The Home University Library catalogue 1914/15`,
        ``,
        `Author: Williams and Norgate, Publishers`,
        ``,
        `Release Date: June 27, 2010 [EBook #33006]`,
        ``,
        `Language: English`,
        ``,
        `Character set encoding: ASCII`,
        ``,
        `*** START OF THIS PROJECT GUTENBERG EBOOK HOME UNIVERSITY LIBRARY CATALOGUE ***`,
        ``,
        ``,
        ``,
        ``,
        `Produced by Brian Foley, Sam W. and the Online Distributed`,
        `Proofreading Team at http://www.pgdp.net (This file was`,
        `produced from images generously made available by The`,
        `Internet Archive/Canadian Libraries)`,
        ``,
        ``,
        ``,
        ``,
        ``,
        ``,
        ``,
        ``,
        ``,
        `Transcriber's Note`,
        ``,
        `This catalogue originally appeared in "An Outline of Russian Literature,"`,
        `by Maurice Baring: Williams and Norgate, London; first printed 1914/15.`,
        ``,
        ``,
        ``,
        ``,
        `                       The`,
        `                 Home University`,
        `           Library of Modern Knowledge`,
        ``,
        `         _A Comprehensive Series of New`,
        `          and Specially Written Books_`,
        ``,
        `                    EDITORS:`,
        ``,
        `   Prof. GILBERT MURRAY, D.Litt., LL.D., F.B.A.`,
        `          HERBERT FISHER, LL.D., F.B.A.`,
        `      Prof. J. ARTHUR THOMSON, M.A., LL.D.`,
        `         Prof. WILLIAM T. BREWSTER, M.A.`,
        ``,
        `   1/- net          256 Pages          2/6 net`,
        `  in cloth                           in leather`,
        ``,
        ``,
        `_History and Geography_`,
        ``,
        `3. _THE FRENCH REVOLUTION_`,
        ``,
        `By HILAIRE BELLOC, M.A. (With Maps.) "It is coloured with all the`,
        `militancy of the author's temperament."--_Daily News._`,
        ``,
        `4. _A SHORT HISTORY OF WAR AND PEACE_`,
        ``,
        `By G. H. PERRIS. The Rt. Hon. JAMES BRYCE writes: "I have read it with`,
        `much interest and pleasure, admiring the skill with which you have`,
        `managed to compress so many facts and views into so small a volume."`,
        ``,
        `8. _POLAR EXPLORATION_`,
        ``,
        `By Dr W. S. BRUCE, F.R.S.E., Leader of the "Scotia" Expedition. (With`,
        `Maps.) "A very freshly written and interesting narrative."--_The`,
        `Times._`,
        ``,
        `12. _THE OPENING-UP OF AFRICA_`,
        ``,
        `By Sir H. H. JOHNSTON, G.C.M.G., F.Z.S. (With Maps.) "The Home`,
        `University Library is much enriched by this excellent work."--_Daily`,
        `Mail._`,
        ``,
        `13. _MEDIAEVAL EUROPE_`,
        ``,
        `By H. W. C. DAVIS, M.A. (With Maps.) "One more illustration of the`,
        `fact that it takes a complete master of the subject to write briefly`,
        `upon it."--_Manchester Guardian._`,
        ``,
        `14. _THE PAPACY & MODERN TIMES (1303-1870)_`,
        ``,
        `By WILLIAM BARRY, D.D. "Dr Barry has a wide range of knowledge and an`,
        `artist's power of selection."--_Manchester Guardian._`,
        ``,
        `23. _HISTORY OF OUR TIME (1885-1911)_`,
        ``,
        `By G. P. GOOCH, M.A. "Mr Gooch contrives to breathe vitality into his`,
        `story, and to give us the flesh as well as the bones of recent`,
        `happenings."--_Observer._`,
        ``,
        `25. _THE CIVILISATION OF CHINA_`,
        ``,
        `By H. A. GILES, LL.D., Professor of Chinese at Cambridge. "In all the`,
        `mass of facts, Professor Giles never becomes dull. He is always ready`,
        `with a ghost story or a street adventure for the reader's`,
        `recreation."--_Spectator._`,
        ``,
        `29. _THE DAWN OF HISTORY_`,
        ``,
        `By J. L. MYRES, M.A., F.S.A., Wykeham Professor of Ancient History,`,
        `Oxford. "There is not a page in it that is not suggestive."--_Manchester`,
        `Guardian._`,
        ``,
        `33. _THE HISTORY OF ENGLAND_`,
        ``,
        `_A Study in Political Evolution_`,
        ``,
        `By Prof. A. F. POLLARD, M.A. With a Chronological Table. "It takes`,
        `its place at once among the authoritative works on English`,
        `history."--_Observer._`,
        ``,
        `34. _CANADA_`,
        ``,
        `By A. G. BRADLEY. "The volume makes an immediate appeal to the man who`,
        `wants to know something vivid and true about Canada."--_Canadian`,
        `Gazette._`,
        ``,
        `37. _PEOPLES & PROBLEMS OF INDIA_`,
        ``,
        `By Sir T. W. HOLDERNESS, K.C.S.I., Permanent Under-Secretary of State`,
        `of the India Office. "Just the book which newspaper readers require`,
        `to-day, and a marvel of comprehensiveness."--_Pall Mall Gazette._`,
        ``,
        `42. _ROME_`,
        ``,
        `By W. WARDE FOWLER, M.A. "A masterly sketch of Roman character and of`,
        `what it did for the world."--_The Spectator._`,
        ``,
        `48. _THE AMERICAN CIVIL WAR_`,
        ``,
        `By F. L. PAXSON, Professor of American History, Wisconsin University`,
        `(With Maps.) "A stirring study."--_The Guardian._`,
        ``,
        `51. _WARFARE IN BRITAIN_`,
        ``,
        `By HILAIRE BELLOC, M.A. "Rich in suggestion for the historical`,
        `student."--_Edinburgh Evening News._`,
        ``,
        `55. _MASTER MARINERS_`,
        ``,
        `By J. R. SPEARS. "A continuous story of shipping progress and`,
        `adventure.... It reads like a romance."--_Glasgow Herald._`,
        ``,
        `61. _NAPOLEON_`,
        ``,
        `By HERBERT FISHER, LL.D., F.B.A., Vice-Chancellor of Sheffield`,
        `University. (With Maps.) The story of the great Bonaparte's youth, his`,
        `career, and his downfall, with some sayings of Napoleon, a genealogy,`,
        `and a bibliography.`,
        ``,
        `66. _THE NAVY AND SEA POWER_`,
        ``,
        `By DAVID HANNAY. The author traces the growth of naval power from`,
        `early times, and discusses its principles and effects upon the history`,
        `of the Western world.`,
        ``,
        `71. _GERMANY OF TO-DAY_`,
        ``,
        `By CHARLES TOWER. "It would be difficult to name any better`,
        `summary."--_Daily News._`,
        ``,
        `82. _PREHISTORIC BRITAIN_`,
        ``,
        `By ROBERT MUNRO, M.A., M.D., LL.D., F.R.S.E. (Illustrated.)`,
        ``,
        `91. _THE ALPS_`,
        ``,
        `By ARNOLD LUNN, M.A. (Illustrated.)`,
        ``,
        `92. _CENTRAL & SOUTH AMERICA_`,
        ``,
        `By PROFESSOR W. R. SHEPHERD. (Maps.)`,
        ``,
        `97. _THE ANCIENT EAST_`,
        ``,
        `By D. G. HOGARTH, M.A. (Maps.)`,
        ``,
        `98. _THE WARS between ENGLAND and AMERICA_`,
        ``,
        `By Prof. T. C. SMITH.`,
        ``,
        `100. _HISTORY OF SCOTLAND_`,
        ``,
        `By Prof. R. S. RAIT.`,
        ``,
        ``,
        `_Literature and Art_`,
        ``,
        `2. _SHAKESPEARE_`,
        ``,
        `By JOHN MASEFIELD. "We have had more learned books on Shakespeare in`,
        `the last few years, but not one so wise."--_Manchester Guardian._`,
        ``,
        `27. _ENGLISH LITERATURE: MODERN_`,
        ``,
        `By G. H. MAIR, M.A. "Altogether a fresh and individual`,
        `book."--_Observer._`,
        ``,
        `35. _LANDMARKS IN FRENCH LITERATURE_`,
        ``,
        `By G. L. STRACHEY. "It is difficult to imagine how a better account of`,
        `French Literature could be given in 250 small pages."--_The Times._`,
        ``,
        `39. _ARCHITECTURE_`,
        ``,
        `By Prof. W. R. LETHABY. (Over forty Illustrations.) "Delightfully`,
        `bright reading."--_Christian World._`,
        ``,
        `43. _ENGLISH LITERATURE: MEDIAEVAL_`,
        ``,
        `By Prof. W. P. KER, M.A. "Prof. Ker's knowledge and taste are`,
        `unimpeachable, and his style is effective, simple, yet never`,
        `dry."--_The Athenaeum._`,
        ``,
        `45. _THE ENGLISH LANGUAGE_`,
        ``,
        `By L. PEARSALL SMITH, M.A. "A wholly fascinating study of the`,
        `different streams that make the great river of the English`,
        `speech."--_Daily News._`,
        ``,
        `52. _GREAT WRITERS OF AMERICA_`,
        ``,
        `By Prof. J. ERSKINE and Prof. W. P. TRENT. "An admirable summary, from`,
        `Franklin to Mark Twain, enlivened by a dry humour."--_Athenaeum._`,
        ``,
        `63. _PAINTERS AND PAINTING_`,
        ``,
        `By Sir FREDERICK WEDMORE. (With 16 half-tone illustrations.) From the`,
        `Primitives to the Impressionists.`,
        ``,
        `64. _DR JOHNSON AND HIS CIRCLE_`,
        ``,
        `By JOHN BAILEY, M.A. "A most delightful essay."--_Christian World._`,
        ``,
        `65. _THE LITERATURE OF GERMANY_`,
        ``,
        `By Professor J. G. ROBERTSON, M.A., Ph.D. "Under the author's skilful`,
        `treatment the subject shows life and continuity."--_Athenaeum._`,
        ``,
        `70. _THE VICTORIAN AGE IN LITERATURE_`,
        ``,
        `By G. K. CHESTERTON. "No one will put it down without a sense of`,
        `having taken a tonic or received a series of electric shocks."--_The`,
        `Times._`,
        ``,
        `73. _THE WRITING OF ENGLISH_`,
        ``,
        `By W. T. BREWSTER, A.M., Professor of English in Columbia University.`,
        `"Sensible, and not over-rigidly conventional."--_Manchester Guardian._`,
        ``,
        `75. _ANCIENT ART AND RITUAL_`,
        ``,
        `By JANE E. HARRISON, LL.D., D.Litt. "Charming in style and learned in`,
        `manner."--_Daily News._`,
        ``,
        `76. _EURIPIDES AND HIS AGE_`,
        ``,
        `By GILBERT MURRAY, D.Litt., LL.D., F.B.A., Regius Professor of Greek`,
        `at Oxford. "A beautiful piece of work.... Just in the fulness of time,`,
        `and exactly in the right place.... Euripides has come into his`,
        `own."--_The Nation._`,
        ``,
        `87. _CHAUCER AND HIS TIMES_`,
        ``,
        `By GRACE E. HADOW.`,
        ``,
        `89. _WILLIAM MORRIS: HIS WORK AND INFLUENCE_`,
        ``,
        `By A. CLUTTON BROCK.`,
        ``,
        `93. _THE RENAISSANCE_`,
        ``,
        `By EDITH SICHEL.`,
        ``,
        `95. _ELIZABETHAN LITERATURE_`,
        ``,
        `By J. M. ROBERTSON, M.P.`,
        ``,
        `99. _AN OUTLINE OF RUSSIAN LITERATURE_`,
        ``,
        `By Hon. MAURICE BARING.`,
        ``,
        ``,
        `_Science_`,
        ``,
        `7. _MODERN GEOGRAPHY_`,
        ``,
        `By Dr MARION NEWBIGIN. (Illustrated.) "Geography, again: what a dull,`,
        `tedious study that was wont to be!... But Miss Marion Newbigin invests`,
        `its dry bones with the flesh and blood of romantic interest."--_Daily`,
        `Telegraph._`,
        ``,
        `9. _THE EVOLUTION OF PLANTS_`,
        ``,
        `By Dr D. H. SCOTT, M.A., F.R.S., late Hon. Keeper of the Jodrell`,
        `Laboratory, Kew. (Fully illustrated.) "Dr Scott's candid and`,
        `familiar style makes the difficult subject both fascinating and`,
        `easy."--_Gardeners' Chronicle._`,
        ``,
        `17. _HEALTH AND DISEASE_`,
        ``,
        `By W. LESLIE MACKENZIE, M.D., Local Government Board, Edinburgh.`,
        ``,
        `18. _INTRODUCTION TO MATHEMATICS_`,
        ``,
        `By A. N. WHITEHEAD, Sc.D., F.R.S. (With Diagrams.) "Mr Whitehead has`,
        `discharged with conspicuous success the task he is so exceptionally`,
        `qualified to undertake. For he is one of our great authorities upon`,
        `the foundations of the science."--_Westminster Gazette._`,
        ``,
        `19. _THE ANIMAL WORLD_`,
        ``,
        `By Professor F. W. GAMBLE, F.R.S. With Introduction by Sir Oliver`,
        `Lodge. (Many Illustrations.) "A fascinating and suggestive`,
        `survey."--_Morning Post._`,
        ``,
        `20. _EVOLUTION_`,
        ``,
        `By Professor J. ARTHUR THOMSON and Professor PATRICK GEDDES. "A`,
        `many-coloured and romantic panorama, opening up, like no other book we`,
        `know, a rational vision of world-development."--_Belfast News-Letter._`,
        ``,
        `22. _CRIME AND INSANITY_`,
        ``,
        `By Dr C. A. MERCIER. "Furnishes much valuable information from one`,
        `occupying the highest position among medico-legal psychologists."--_Asylum`,
        `News._`,
        ``,
        `28. _PSYCHICAL RESEARCH_`,
        ``,
        `By Sir W. F. BARRETT, F.R.S., Professor of Physics, Royal College of`,
        `Science, Dublin, 1873-1910. "What he has to say on thought-reading,`,
        `hypnotism, telepathy, crystal-vision, spiritualism, divinings, and so`,
        `on, will be read with avidity."--_Dundee Courier._`,
        ``,
        `31. _ASTRONOMY_`,
        ``,
        `By A. R. HINKS, M.A., Chief Assistant, Cambridge Observatory.`,
        `"Original in thought, eclectic in substance, and critical in`,
        `treatment.... No better little book is available."--_School World._`,
        ``,
        `32. _INTRODUCTION TO SCIENCE_`,
        ``,
        `By J. ARTHUR THOMSON, M.A., Regius Professor of Natural History,`,
        `Aberdeen University. "Professor Thomson's delightful literary style is`,
        `well known; and here he discourses freshly and easily on the methods`,
        `of science and its relations with philosophy, art, religion, and`,
        `practical life."--_Aberdeen Journal._`,
        ``,
        `36. _CLIMATE AND WEATHER_`,
        ``,
        `By Prof. H. N. DICKSON, D.Sc.Oxon., M.A., F.R.S.E., President of the`,
        `Royal Meteorological Society. (With Diagrams.) "The author has`,
        `succeeded in presenting in a very lucid and agreeable manner the`,
        `causes of the movements of the atmosphere and of the more stable`,
        `winds."--_Manchester Guardian._`,
        ``,
        `41. _ANTHROPOLOGY_`,
        ``,
        `By R. R. MARETT, M.A., Reader in Social Anthropology in Oxford`,
        `University. "An absolutely perfect handbook, so clear that a child`,
        `could understand it, so fascinating and human that it beats fiction`,
        `'to a frazzle.'"--_Morning Leader._`,
        ``,
        `44. _THE PRINCIPLES OF PHYSIOLOGY_`,
        ``,
        `By Prof. J. G. MCKENDRICK, M.D. "Upon every page of it is stamped the`,
        `impress of a creative imagination."--_Glasgow Herald._`,
        ``,
        `46. _MATTER AND ENERGY_`,
        ``,
        `By F. SODDY, M.A., F.R.S. "Prof. Soddy has successfully accomplished`,
        `the very difficult task of making physics of absorbing interest on`,
        `popular lines."--_Nature._`,
        ``,
        `49. _PSYCHOLOGY, THE STUDY OF BEHAVIOUR_`,
        ``,
        `By Prof. W. MCDOUGALL, F.R.S., M.B. "A happy example of the`,
        `non-technical handling of an unwieldy science, suggesting rather than`,
        `dogmatising. It should whet appetites for deeper study."--_Christian`,
        `World._`,
        ``,
        `53. _THE MAKING OF THE EARTH_`,
        ``,
        `By Prof. J. W. GREGORY, F.R.S. (With 38 Maps and Figures.) "A`,
        `fascinating little volume.... Among the many good things contained in`,
        `the series this takes a high place."--_The Athenaeum._`,
        ``,
        `57. _THE HUMAN BODY_`,
        ``,
        `By A. KEITH, M.D., LL.D., Conservator of Museum and Hunterian`,
        `Professor, Royal College of Surgeons. (Illustrated.) "It literally`,
        `makes the 'dry bones' to live. It will certainly take a high place`,
        `among the classics of popular science."--_Manchester Guardian._`,
        ``,
        `58. _ELECTRICITY_`,
        ``,
        `By GISBERT KAPP, D.Eng., Professor of Electrical Engineering in the`,
        `University of Birmingham. (Illustrated.) "It will be appreciated`,
        `greatly by learners and by the great number of amateurs who are`,
        `interested in what is one of the most fascinating of scientific`,
        `studies."--_Glasgow Herald._`,
        ``,
        `62. _THE ORIGIN AND NATURE OF LIFE_`,
        ``,
        `By Dr BENJAMIN MOORE, Professor of Bio-Chemistry, University College,`,
        `Liverpool. "Stimulating, learned, lucid."--_Liverpool Courier._`,
        ``,
        `67. _CHEMISTRY_`,
        ``,
        `By RAPHAEL MELDOLA, F.R.S., Professor of Chemistry in Finsbury`,
        `Technical College, London. Presents clearly, without the detail`,
        `demanded by the expert, the way in which chemical science has`,
        `developed, and the stage it has reached.`,
        ``,
        `72. _PLANT LIFE_`,
        ``,
        `By Prof. J. B. FARMER, D.Sc., F.R.S. (Illustrated.) "Professor Farmer`,
        `has contrived to convey all the most vital facts of plant physiology,`,
        `and also to present a good many of the chief problems which confront`,
        `investigators to-day in the realms of morphology and of`,
        `heredity."--_Morning Post._`,
        ``,
        `78. _THE OCEAN_`,
        ``,
        `A General Account of the Science of the Sea. By Sir JOHN MURRAY,`,
        `K.C.B. F.R.S. (Colour plates and other illustrations.)`,
        ``,
        `79. _NERVES_`,
        ``,
        `By Prof. D. FRASER HARRIS, M.D., D.Sc. (Illustrated.) A description,`,
        `in non-technical language, of the nervous system, its intricate`,
        `mechanism and the strange phenomena of energy and fatigue, with some`,
        `practical reflections.`,
        ``,
        `86. _SEX_`,
        ``,
        `By Prof. PATRICK GEDDES and Prof. J. ARTHUR THOMSON, LL.D. (Illus.)`,
        ``,
        `88. _THE GROWTH OF EUROPE_`,
        ``,
        `By Prof. GRENVILLE COLE, (Illus.)`,
        ``,
        ``,
        `_Philosophy and Religion_`,
        ``,
        `15. _MOHAMMEDANISM_`,
        ``,
        `By Prof. D. S. MARGOLIOUTH, M.A., D.Litt. "This generous shilling's`,
        `worth of wisdom.... A delicate, humorous, and most responsible`,
        `tractate by an illuminative professor."--_Daily Mail._`,
        ``,
        `40. _THE PROBLEMS OF PHILOSOPHY_`,
        ``,
        `By the Hon. BERTRAND RUSSELL, F.R.S. "A book that the 'man in the`,
        `street' will recognise at once to be a boon.... Consistently lucid and`,
        `non-technical throughout."--_Christian World._`,
        ``,
        `47. _BUDDHISM_`,
        ``,
        `By Mrs RHYS DAVIDS, M.A. "The author presents very attractively as`,
        `well as very learnedly the philosophy of Buddhism."--_Daily News._`,
        ``,
        `50. _NONCONFORMITY: Its ORIGIN and PROGRESS_`,
        ``,
        `By Principal W. B. SELBIE, M.A. "The historical part is brilliant in`,
        `its insight, clarity, and proportion."--_Christian World._`,
        ``,
        `54. _ETHICS_`,
        ``,
        `By G. E. MOORE, M.A., Lecturer in Moral Science in Cambridge`,
        `University. "A very lucid though closely reasoned outline of the logic`,
        `of good conduct."--_Christian World._`,
        ``,
        `56. _THE MAKING OF THE NEW TESTAMENT_`,
        ``,
        `By Prof. B. W. BACON, LL.D., D.D. "Professor Bacon has boldly, and`,
        `wisely, taken his own line, and has produced, as a result, an`,
        `extraordinarily vivid, stimulating, and lucid book."--_Manchester`,
        `Guardian._`,
        ``,
        `60. _MISSIONS: THEIR RISE and DEVELOPMENT_`,
        ``,
        `By Mrs CREIGHTON. "Very interestingly done.... Its style is simple,`,
        `direct, unhackneyed, and should find appreciation where a more`,
        `fervently pious style of writing repels."--_Methodist Recorder._`,
        ``,
        `68. _COMPARATIVE RELIGION_`,
        ``,
        `By Prof. J. ESTLIN CARPENTER, D.Litt., Principal of Manchester`,
        `College, Oxford. "Puts into the reader's hand a wealth of learning and`,
        `independent thought."--_Christian World._`,
        ``,
        `74. _A HISTORY OF FREEDOM OF THOUGHT_`,
        ``,
        `By J. B. BURY, Litt.D., LL.D., Regius Professor of Modern History at`,
        `Cambridge. "A little masterpiece, which every thinking man will`,
        `enjoy."--_The Observer._`,
        ``,
        `84. _LITERATURE OF THE OLD TESTAMENT_`,
        ``,
        `By Prof. GEORGE MOORE, D.D., LL.D., of Harvard. A detailed examination`,
        `of the books of the Old Testament in the light of the most recent`,
        `research.`,
        ``,
        `90. _THE CHURCH OF ENGLAND_`,
        ``,
        `By Canon E. W. WATSON, Regius Professor of Ecclesiastical History at`,
        `Oxford.`,
        ``,
        `94. _RELIGIOUS DEVELOPMENT BETWEEN THE OLD AND NEW TESTAMENTS_`,
        ``,
        `By Canon R. H. CHARLES, D.D., D.Litt.`,
        ``,
        ``,
        `_Social Science_`,
        ``,
        `1. _PARLIAMENT_`,
        ``,
        `Its History, Constitution, and Practice. By Sir COURTENAY P. ILBERT,`,
        `G.C.B., K.C.S.I., Clerk of the House of Commons. "The best book on the`,
        `history and practice of the House of Commons since Bagehot's`,
        `'Constitution.'"--_Yorkshire Post._`,
        ``,
        `5. _THE STOCK EXCHANGE_`,
        ``,
        `By F. W. HIRST, Editor of "The Economist." "To an unfinancial mind`,
        `must be a revelation.... The book is as clear, vigorous, and sane as`,
        `Bagehot's 'Lombard Street,' than which there is no higher`,
        `compliment."--_Morning Leader._`,
        ``,
        `6. _IRISH NATIONALITY_`,
        ``,
        `By Mrs J. R. GREEN. "As glowing as it is learned. No book could be`,
        `more timely."--_Daily News._`,
        ``,
        `10. _THE SOCIALIST MOVEMENT_`,
        ``,
        `By J. RAMSAY MACDONALD, M.P. "Admirably adapted for the purpose of`,
        `exposition."--_The Times._`,
        ``,
        `11. _CONSERVATISM_`,
        ``,
        `By LORD HUGH CECIL, M.A., M.P. "One of those great little books which`,
        `seldom appear more than once in a generation."--_Morning Post._`,
        ``,
        `16. _THE SCIENCE OF WEALTH_`,
        ``,
        `By J. A. HOBSON, M.A. "Mr J. A. Hobson holds an unique position among`,
        `living economists.... Original, reasonable, and illuminating."--_The`,
        `Nation._`,
        ``,
        `21. _LIBERALISM_`,
        ``,
        `By L. T. HOBHOUSE, M.A., Professor of Sociology in the University of`,
        `London. "A book of rare quality.... We have nothing but praise for the`,
        `rapid and masterly summaries of the arguments from first principles`,
        `which form a large part of this book."--_Westminster Gazette._`,
        ``,
        `24. _THE EVOLUTION OF INDUSTRY_`,
        ``,
        `By D. H. MACGREGOR, M.A., Professor of Political Economy in the`,
        `University of Leeds. "A volume so dispassionate in terms may be read with`,
        `profit by all interested in the present state of unrest."--_Aberdeen`,
        `Journal._`,
        ``,
        `26. _AGRICULTURE_`,
        ``,
        `By Prof. W. SOMERVILLE, F.L.S. "It makes the results of laboratory work`,
        `at the University accessible to the practical farmer."--_Athenaeum._`,
        ``,
        `30. _ELEMENTS OF ENGLISH LAW_`,
        ``,
        `By W. M. GELDART, M.A., B.C.L., Vinerian Professor of English Law at`,
        `Oxford. "Contains a very clear account of the elementary principles`,
        `underlying the rules of English Law."--_Scots Law Times._`,
        ``,
        `38. _THE SCHOOL: An Introduction to the Study of Education._`,
        ``,
        `By J. J. FINDLAY, M.A., Ph.D., Professor of Education in Manchester`,
        `University. "An amazingly comprehensive volume.... It is a remarkable`,
        `performance, distinguished in its crisp, striking phraseology as well`,
        `as its inclusiveness of subject-matter."--_Morning Post._`,
        ``,
        `59. _ELEMENTS OF POLITICAL ECONOMY_`,
        ``,
        `By S. J. CHAPMAN, M.A., Professor of Political Economy in Manchester`,
        `University. "Its importance is not to be measured by its price.`,
        `Probably the best recent critical exposition of the analytical method`,
        `in economic science."--_Glasgow Herald._`,
        ``,
        `69. _THE NEWSPAPER_`,
        ``,
        `By G. BINNEY DIBBLEE, M.A. (Illustrated.) The best account extant of`,
        `the organisation of the newspaper press, at home and abroad.`,
        ``,
        `77. _SHELLEY, GODWIN, AND THEIR CIRCLE_`,
        ``,
        `By H. N. BRAILSFORD, M.A. "Mr Brailsford sketches vividly the`,
        `influence of the French Revolution on Shelley's and Godwin's England;`,
        `and the charm and strength of his style make his book an authentic`,
        `contribution to literature."--_The Bookman._`,
        ``,
        `80. _CO-PARTNERSHIP AND PROFIT-SHARING_`,
        ``,
        `By ANEURIN WILLIAMS, M.A. "A judicious but enthusiastic history, with much`,
        `interesting speculation on the future of Co-partnership."--_Christian`,
        `World._`,
        ``,
        `81. _PROBLEMS OF VILLAGE LIFE_`,
        ``,
        `By E. N. BENNETT, M.A. Discusses the leading aspects of the British`,
        `land problem, including housing, small holdings, rural credit, and the`,
        `minimum wage.`,
        ``,
        `83. _COMMON-SENSE IN LAW_`,
        ``,
        `By Prof. P. VINOGRADOFF, D.C.L.`,
        ``,
        `85. _UNEMPLOYMENT_`,
        ``,
        `By Prof. A. C. PIGOU, M.A.`,
        ``,
        `96. _POLITICAL THOUGHT IN ENGLAND: FROM BACON TO HALIFAX_`,
        ``,
        `By G. P. GOOCH, M.A.`,
        ``,
        ``,
        `IN PREPARATION`,
        ``,
        `_ANCIENT EGYPT._ By F. LL. GRIFFITH, M.A.`,
        ``,
        `_A SHORT HISTORY OF EUROPE._ By HERBERT FISHER, LL.D.`,
        ``,
        `_THE BYZANTINE EMPIRE._ By NORMAN H. BAYNES.`,
        ``,
        `_THE REFORMATION._ By President LINDSAY, LL.D.`,
        ``,
        `_A SHORT HISTORY OF RUSSIA._ By Prof. MILYOUKOV.`,
        ``,
        `_MODERN TURKEY._ By D. G. HOGARTH, M.A.`,
        ``,
        `_FRANCE OF TO-DAY._ By ALBERT THOMAS.`,
        ``,
        `_HISTORY AND LITERATURE OF SPAIN._ By J. FITZMAURICE-KELLY, F.B.A.,`,
        `    Litt.D.`,
        ``,
        `_LATIN LITERATURE._ By Prof. J. S. PHILLIMORE.`,
        ``,
        `_ITALIAN ART OF THE RENAISSANCE._ By ROGER E. FRY.`,
        ``,
        `_LITERARY TASTE._ By THOMAS SECCOMBE.`,
        ``,
        `_SCANDINAVIAN HISTORY & LITERATURE._ By T. C. SNOW.`,
        ``,
        `_THE MINERAL WORLD._ By Sir T. H. HOLLAND, K.C.I.E., D.Sc.`,
        ``,
        `_A HISTORY OF PHILOSOPHY._ By CLEMENT WEBB, M.A.`,
        ``,
        `_POLITICAL THOUGHT IN ENGLAND: From Bentham to J. S. Mill._ By Prof.`,
        `    W. L. DAVIDSON.`,
        ``,
        `_POLITICAL THOUGHT IN ENGLAND: From Herbert Spencer to To-day._ By`,
        `    ERNEST BARKER, M.A.`,
        ``,
        `_THE CRIMINAL AND THE COMMUNITY._ By Viscount ST. CYRES.`,
        ``,
        `_THE CIVIL SERVICE._ By GRAHAM WALLAS, M.A.`,
        ``,
        `_THE SOCIAL SETTLEMENT._ By JANE ADDAMS and R. A. WOODS.`,
        ``,
        `_GREAT INVENTIONS._ By Prof. J. L. MYRES, M.A., F.S.A.`,
        ``,
        `_TOWN PLANNING._ By RAYMOND UNWIN.`,
        ``,
        ``,
        `          London: WILLIAMS AND NORGATE`,
        `     _And of all Bookshops and Bookstalls._`,
        ``,
        ``,
        ``,
        ``,
        ``,
        `End of the Project Gutenberg EBook of The Home University Library catalogue`,
        `1914/15, by Williams and Norgate, Publishers`,
        ``,
        `*** END OF THIS PROJECT GUTENBERG EBOOK HOME UNIVERSITY LIBRARY CATALOGUE ***`,
        ``,
        `***** This file should be named 33006.txt or 33006.zip *****`,
        `This and all associated files of various formats will be found in:`,
        `        http://www.gutenberg.org/3/3/0/0/33006/`,
        ``,
        `Produced by Brian Foley, Sam W. and the Online Distributed`,
        `Proofreading Team at http://www.pgdp.net (This file was`,
        `produced from images generously made available by The`,
        `Internet Archive/Canadian Libraries)`,
        ``,
        ``,
        `Updated editions will replace the previous one--the old editions`,
        `will be renamed.`,
        ``,
        `Creating the works from public domain print editions means that no`,
        `one owns a United States copyright in these works, so the Foundation`,
        `(and you!) can copy and distribute it in the United States without`,
        `permission and without paying copyright royalties.  Special rules,`,
        `set forth in the General Terms of Use part of this license, apply to`,
        `copying and distributing Project Gutenberg-tm electronic works to`,
        `protect the PROJECT GUTENBERG-tm concept and trademark.  Project`,
        `Gutenberg is a registered trademark, and may not be used if you`,
        `charge for the eBooks, unless you receive specific permission.  If you`,
        `do not charge anything for copies of this eBook, complying with the`,
        `rules is very easy.  You may use this eBook for nearly any purpose`,
        `such as creation of derivative works, reports, performances and`,
        `research.  They may be modified and printed and given away--you may do`,
        `practically ANYTHING with public domain eBooks.  Redistribution is`,
        `subject to the trademark license, especially commercial`,
        `redistribution.`,
        ``,
        ``,
        ``,
        `*** START: FULL LICENSE ***`,
        ``,
        `THE FULL PROJECT GUTENBERG LICENSE`,
        `PLEASE READ THIS BEFORE YOU DISTRIBUTE OR USE THIS WORK`,
        ``,
        `To protect the Project Gutenberg-tm mission of promoting the free`,
        `distribution of electronic works, by using or distributing this work`,
        `(or any other work associated in any way with the phrase "Project`,
        `Gutenberg"), you agree to comply with all the terms of the Full Project`,
        `Gutenberg-tm License (available with this file or online at`,
        `http://gutenberg.net/license).`,
        ``,
        ``,
        `Section 1.  General Terms of Use and Redistributing Project Gutenberg-tm`,
        `electronic works`,
        ``,
        `1.A.  By reading or using any part of this Project Gutenberg-tm`,
        `electronic work, you indicate that you have read, understand, agree to`,
        `and accept all the terms of this license and intellectual property`,
        `(trademark/copyright) agreement.  If you do not agree to abide by all`,
        `the terms of this agreement, you must cease using and return or destroy`,
        `all copies of Project Gutenberg-tm electronic works in your possession.`,
        `If you paid a fee for obtaining a copy of or access to a Project`,
        `Gutenberg-tm electronic work and you do not agree to be bound by the`,
        `terms of this agreement, you may obtain a refund from the person or`,
        `entity to whom you paid the fee as set forth in paragraph 1.E.8.`,
        ``,
        `1.B.  "Project Gutenberg" is a registered trademark.  It may only be`,
        `used on or associated in any way with an electronic work by people who`,
        `agree to be bound by the terms of this agreement.  There are a few`,
        `things that you can do with most Project Gutenberg-tm electronic works`,
        `even without complying with the full terms of this agreement.  See`,
        `paragraph 1.C below.  There are a lot of things you can do with Project`,
        `Gutenberg-tm electronic works if you follow the terms of this agreement`,
        `and help preserve free future access to Project Gutenberg-tm electronic`,
        `works.  See paragraph 1.E below.`,
        ``,
        `1.C.  The Project Gutenberg Literary Archive Foundation ("the Foundation"`,
        `or PGLAF), owns a compilation copyright in the collection of Project`,
        `Gutenberg-tm electronic works.  Nearly all the individual works in the`,
        `collection are in the public domain in the United States.  If an`,
        `individual work is in the public domain in the United States and you are`,
        `located in the United States, we do not claim a right to prevent you from`,
        `copying, distributing, performing, displaying or creating derivative`,
        `works based on the work as long as all references to Project Gutenberg`,
        `are removed.  Of course, we hope that you will support the Project`,
        `Gutenberg-tm mission of promoting free access to electronic works by`,
        `freely sharing Project Gutenberg-tm works in compliance with the terms of`,
        `this agreement for keeping the Project Gutenberg-tm name associated with`,
        `the work.  You can easily comply with the terms of this agreement by`,
        `keeping this work in the same format with its attached full Project`,
        `Gutenberg-tm License when you share it without charge with others.`,
        ``,
        `1.D.  The copyright laws of the place where you are located also govern`,
        `what you can do with this work.  Copyright laws in most countries are in`,
        `a constant state of change.  If you are outside the United States, check`,
        `the laws of your country in addition to the terms of this agreement`,
        `before downloading, copying, displaying, performing, distributing or`,
        `creating derivative works based on this work or any other Project`,
        `Gutenberg-tm work.  The Foundation makes no representations concerning`,
        `the copyright status of any work in any country outside the United`,
        `States.`,
        ``,
        `1.E.  Unless you have removed all references to Project Gutenberg:`,
        ``,
        `1.E.1.  The following sentence, with active links to, or other immediate`,
        `access to, the full Project Gutenberg-tm License must appear prominently`,
        `whenever any copy of a Project Gutenberg-tm work (any work on which the`,
        `phrase "Project Gutenberg" appears, or with which the phrase "Project`,
        `Gutenberg" is associated) is accessed, displayed, performed, viewed,`,
        `copied or distributed:`,
        ``,
        `This eBook is for the use of anyone anywhere at no cost and with`,
        `almost no restrictions whatsoever.  You may copy it, give it away or`,
        `re-use it under the terms of the Project Gutenberg License included`,
        `with this eBook or online at www.gutenberg.net`,
        ``,
        `1.E.2.  If an individual Project Gutenberg-tm electronic work is derived`,
        `from the public domain (does not contain a notice indicating that it is`,
        `posted with permission of the copyright holder), the work can be copied`,
        `and distributed to anyone in the United States without paying any fees`,
        `or charges.  If you are redistributing or providing access to a work`,
        `with the phrase "Project Gutenberg" associated with or appearing on the`,
        `work, you must comply either with the requirements of paragraphs 1.E.1`,
        `through 1.E.7 or obtain permission for the use of the work and the`,
        `Project Gutenberg-tm trademark as set forth in paragraphs 1.E.8 or`,
        `1.E.9.`,
        ``,
        `1.E.3.  If an individual Project Gutenberg-tm electronic work is posted`,
        `with the permission of the copyright holder, your use and distribution`,
        `must comply with both paragraphs 1.E.1 through 1.E.7 and any additional`,
        `terms imposed by the copyright holder.  Additional terms will be linked`,
        `to the Project Gutenberg-tm License for all works posted with the`,
        `permission of the copyright holder found at the beginning of this work.`,
        ``,
        `1.E.4.  Do not unlink or detach or remove the full Project Gutenberg-tm`,
        `License terms from this work, or any files containing a part of this`,
        `work or any other work associated with Project Gutenberg-tm.`,
        ``,
        `1.E.5.  Do not copy, display, perform, distribute or redistribute this`,
        `electronic work, or any part of this electronic work, without`,
        `prominently displaying the sentence set forth in paragraph 1.E.1 with`,
        `active links or immediate access to the full terms of the Project`,
        `Gutenberg-tm License.`,
        ``,
        `1.E.6.  You may convert to and distribute this work in any binary,`,
        `compressed, marked up, nonproprietary or proprietary form, including any`,
        `word processing or hypertext form.  However, if you provide access to or`,
        `distribute copies of a Project Gutenberg-tm work in a format other than`,
        `"Plain Vanilla ASCII" or other format used in the official version`,
        `posted on the official Project Gutenberg-tm web site (www.gutenberg.net),`,
        `you must, at no additional cost, fee or expense to the user, provide a`,
        `copy, a means of exporting a copy, or a means of obtaining a copy upon`,
        `request, of the work in its original "Plain Vanilla ASCII" or other`,
        `form.  Any alternate format must include the full Project Gutenberg-tm`,
        `License as specified in paragraph 1.E.1.`,
        ``,
        `1.E.7.  Do not charge a fee for access to, viewing, displaying,`,
        `performing, copying or distributing any Project Gutenberg-tm works`,
        `unless you comply with paragraph 1.E.8 or 1.E.9.`,
        ``,
        `1.E.8.  You may charge a reasonable fee for copies of or providing`,
        `access to or distributing Project Gutenberg-tm electronic works provided`,
        `that`,
        ``,
        `- You pay a royalty fee of 20% of the gross profits you derive from`,
        `     the use of Project Gutenberg-tm works calculated using the method`,
        `     you already use to calculate your applicable taxes.  The fee is`,
        `     owed to the owner of the Project Gutenberg-tm trademark, but he`,
        `     has agreed to donate royalties under this paragraph to the`,
        `     Project Gutenberg Literary Archive Foundation.  Royalty payments`,
        `     must be paid within 60 days following each date on which you`,
        `     prepare (or are legally required to prepare) your periodic tax`,
        `     returns.  Royalty payments should be clearly marked as such and`,
        `     sent to the Project Gutenberg Literary Archive Foundation at the`,
        `     address specified in Section 4, "Information about donations to`,
        `     the Project Gutenberg Literary Archive Foundation."`,
        ``,
        `- You provide a full refund of any money paid by a user who notifies`,
        `     you in writing (or by e-mail) within 30 days of receipt that s/he`,
        `     does not agree to the terms of the full Project Gutenberg-tm`,
        `     License.  You must require such a user to return or`,
        `     destroy all copies of the works possessed in a physical medium`,
        `     and discontinue all use of and all access to other copies of`,
        `     Project Gutenberg-tm works.`,
        ``,
        `- You provide, in accordance with paragraph 1.F.3, a full refund of any`,
        `     money paid for a work or a replacement copy, if a defect in the`,
        `     electronic work is discovered and reported to you within 90 days`,
        `     of receipt of the work.`,
        ``,
        `- You comply with all other terms of this agreement for free`,
        `     distribution of Project Gutenberg-tm works.`,
        ``,
        `1.E.9.  If you wish to charge a fee or distribute a Project Gutenberg-tm`,
        `electronic work or group of works on different terms than are set`,
        `forth in this agreement, you must obtain permission in writing from`,
        `both the Project Gutenberg Literary Archive Foundation and Michael`,
        `Hart, the owner of the Project Gutenberg-tm trademark.  Contact the`,
        `Foundation as set forth in Section 3 below.`,
        ``,
        `1.F.`,
        ``,
        `1.F.1.  Project Gutenberg volunteers and employees expend considerable`,
        `effort to identify, do copyright research on, transcribe and proofread`,
        `public domain works in creating the Project Gutenberg-tm`,
        `collection.  Despite these efforts, Project Gutenberg-tm electronic`,
        `works, and the medium on which they may be stored, may contain`,
        `"Defects," such as, but not limited to, incomplete, inaccurate or`,
        `corrupt data, transcription errors, a copyright or other intellectual`,
        `property infringement, a defective or damaged disk or other medium, a`,
        `computer virus, or computer codes that damage or cannot be read by`,
        `your equipment.`,
        ``,
        `1.F.2.  LIMITED WARRANTY, DISCLAIMER OF DAMAGES - Except for the "Right`,
        `of Replacement or Refund" described in paragraph 1.F.3, the Project`,
        `Gutenberg Literary Archive Foundation, the owner of the Project`,
        `Gutenberg-tm trademark, and any other party distributing a Project`,
        `Gutenberg-tm electronic work under this agreement, disclaim all`,
        `liability to you for damages, costs and expenses, including legal`,
        `fees.  YOU AGREE THAT YOU HAVE NO REMEDIES FOR NEGLIGENCE, STRICT`,
        `LIABILITY, BREACH OF WARRANTY OR BREACH OF CONTRACT EXCEPT THOSE`,
        `PROVIDED IN PARAGRAPH F3.  YOU AGREE THAT THE FOUNDATION, THE`,
        `TRADEMARK OWNER, AND ANY DISTRIBUTOR UNDER THIS AGREEMENT WILL NOT BE`,
        `LIABLE TO YOU FOR ACTUAL, DIRECT, INDIRECT, CONSEQUENTIAL, PUNITIVE OR`,
        `INCIDENTAL DAMAGES EVEN IF YOU GIVE NOTICE OF THE POSSIBILITY OF SUCH`,
        `DAMAGE.`,
        ``,
        `1.F.3.  LIMITED RIGHT OF REPLACEMENT OR REFUND - If you discover a`,
        `defect in this electronic work within 90 days of receiving it, you can`,
        `receive a refund of the money (if any) you paid for it by sending a`,
        `written explanation to the person you received the work from.  If you`,
        `received the work on a physical medium, you must return the medium with`,
        `your written explanation.  The person or entity that provided you with`,
        `the defective work may elect to provide a replacement copy in lieu of a`,
        `refund.  If you received the work electronically, the person or entity`,
        `providing it to you may choose to give you a second opportunity to`,
        `receive the work electronically in lieu of a refund.  If the second copy`,
        `is also defective, you may demand a refund in writing without further`,
        `opportunities to fix the problem.`,
        ``,
        `1.F.4.  Except for the limited right of replacement or refund set forth`,
        `in paragraph 1.F.3, this work is provided to you 'AS-IS' WITH NO OTHER`,
        `WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO`,
        `WARRANTIES OF MERCHANTIBILITY OR FITNESS FOR ANY PURPOSE.`,
        ``,
        `1.F.5.  Some states do not allow disclaimers of certain implied`,
        `warranties or the exclusion or limitation of certain types of damages.`,
        `If any disclaimer or limitation set forth in this agreement violates the`,
        `law of the state applicable to this agreement, the agreement shall be`,
        `interpreted to make the maximum disclaimer or limitation permitted by`,
        `the applicable state law.  The invalidity or unenforceability of any`,
        `provision of this agreement shall not void the remaining provisions.`,
        ``,
        `1.F.6.  INDEMNITY - You agree to indemnify and hold the Foundation, the`,
        `trademark owner, any agent or employee of the Foundation, anyone`,
        `providing copies of Project Gutenberg-tm electronic works in accordance`,
        `with this agreement, and any volunteers associated with the production,`,
        `promotion and distribution of Project Gutenberg-tm electronic works,`,
        `harmless from all liability, costs and expenses, including legal fees,`,
        `that arise directly or indirectly from any of the following which you do`,
        `or cause to occur: (a) distribution of this or any Project Gutenberg-tm`,
        `work, (b) alteration, modification, or additions or deletions to any`,
        `Project Gutenberg-tm work, and (c) any Defect you cause.`,
        ``,
        ``,
        `Section  2.  Information about the Mission of Project Gutenberg-tm`,
        ``,
        `Project Gutenberg-tm is synonymous with the free distribution of`,
        `electronic works in formats readable by the widest variety of computers`,
        `including obsolete, old, middle-aged and new computers.  It exists`,
        `because of the efforts of hundreds of volunteers and donations from`,
        `people in all walks of life.`,
        ``,
        `Volunteers and financial support to provide volunteers with the`,
        `assistance they need are critical to reaching Project Gutenberg-tm's`,
        `goals and ensuring that the Project Gutenberg-tm collection will`,
        `remain freely available for generations to come.  In 2001, the Project`,
        `Gutenberg Literary Archive Foundation was created to provide a secure`,
        `and permanent future for Project Gutenberg-tm and future generations.`,
        `To learn more about the Project Gutenberg Literary Archive Foundation`,
        `and how your efforts and donations can help, see Sections 3 and 4`,
        `and the Foundation web page at http://www.pglaf.org.`,
        ``,
        ``,
        `Section 3.  Information about the Project Gutenberg Literary Archive`,
        `Foundation`,
        ``,
        `The Project Gutenberg Literary Archive Foundation is a non profit`,
        `501(c)(3) educational corporation organized under the laws of the`,
        `state of Mississippi and granted tax exempt status by the Internal`,
        `Revenue Service.  The Foundation's EIN or federal tax identification`,
        `number is 64-6221541.  Its 501(c)(3) letter is posted at`,
        `http://pglaf.org/fundraising.  Contributions to the Project Gutenberg`,
        `Literary Archive Foundation are tax deductible to the full extent`,
        `permitted by U.S. federal laws and your state's laws.`,
        ``,
        `The Foundation's principal office is located at 4557 Melan Dr. S.`,
        `Fairbanks, AK, 99712., but its volunteers and employees are scattered`,
        `throughout numerous locations.  Its business office is located at`,
        `809 North 1500 West, Salt Lake City, UT 84116, (801) 596-1887, email`,
        `business@pglaf.org.  Email contact links and up to date contact`,
        `information can be found at the Foundation's web site and official`,
        `page at http://pglaf.org`,
        ``,
        `For additional contact information:`,
        `     Dr. Gregory B. Newby`,
        `     Chief Executive and Director`,
        `     gbnewby@pglaf.org`,
        ``,
        ``,
        `Section 4.  Information about Donations to the Project Gutenberg`,
        `Literary Archive Foundation`,
        ``,
        `Project Gutenberg-tm depends upon and cannot survive without wide`,
        `spread public support and donations to carry out its mission of`,
        `increasing the number of public domain and licensed works that can be`,
        `freely distributed in machine readable form accessible by the widest`,
        `array of equipment including outdated equipment.  Many small donations`,
        `($1 to $5,000) are particularly important to maintaining tax exempt`,
        `status with the IRS.`,
        ``,
        `The Foundation is committed to complying with the laws regulating`,
        `charities and charitable donations in all 50 states of the United`,
        `States.  Compliance requirements are not uniform and it takes a`,
        `considerable effort, much paperwork and many fees to meet and keep up`,
        `with these requirements.  We do not solicit donations in locations`,
        `where we have not received written confirmation of compliance.  To`,
        `SEND DONATIONS or determine the status of compliance for any`,
        `particular state visit http://pglaf.org`,
        ``,
        `While we cannot and do not solicit contributions from states where we`,
        `have not met the solicitation requirements, we know of no prohibition`,
        `against accepting unsolicited donations from donors in such states who`,
        `approach us with offers to donate.`,
        ``,
        `International donations are gratefully accepted, but we cannot make`,
        `any statements concerning tax treatment of donations received from`,
        `outside the United States.  U.S. laws alone swamp our small staff.`,
        ``,
        `Please check the Project Gutenberg Web pages for current donation`,
        `methods and addresses.  Donations are accepted in a number of other`,
        `ways including including checks, online payments and credit card`,
        `donations.  To donate, please visit: http://pglaf.org/donate`,
        ``,
        ``,
        `Section 5.  General Information About Project Gutenberg-tm electronic`,
        `works.`,
        ``,
        `Professor Michael S. Hart is the originator of the Project Gutenberg-tm`,
        `concept of a library of electronic works that could be freely shared`,
        `with anyone.  For thirty years, he produced and distributed Project`,
        `Gutenberg-tm eBooks with only a loose network of volunteer support.`,
        ``,
        ``,
        `Project Gutenberg-tm eBooks are often created from several printed`,
        `editions, all of which are confirmed as Public Domain in the U.S.`,
        `unless a copyright notice is included.  Thus, we do not necessarily`,
        `keep eBooks in compliance with any particular paper edition.`,
        ``,
        ``,
        `Most people start at our Web site which has the main PG search facility:`,
        ``,
        `     http://www.gutenberg.net`,
        ``,
        `This Web site includes information about Project Gutenberg-tm,`,
        `including how to make donations to the Project Gutenberg Literary`,
        `Archive Foundation, how to help produce our new eBooks, and how to`,
        `subscribe to our email newsletter to hear about new eBooks.`,
        ``,
      ]),
      expectedOutputLines: deindent([
        `
          eht\tThe
          cejoprt\tProject
          beeggnrtu\tGutenberg
          bekoo\tEBook
          fo\tof
          eht\tThe
          ehmo\tHome
          eiinrstuvy\tUniversity
          abilrry\tLibrary
          aaceglotu\tcatalogue
        `,
        `
          111459\t191415
          by\tby
          aiillmsw\tWilliams
          adn\tand
          aegnort\tNorgate
          behilprssu\tPublishers
        `,
        `
          hist\tThis
          bekoo\teBook
          is\tis
          for\tfor
          eht\tthe
          esu\tuse
          fo\tof
          aennoy\tanyone
          aeehnrwy\tanywhere
          at\tat
          no\tno
          cost\tcost
          adn\tand
          hitw\twith
        `,
        `
          almost\talmost
          no\tno
          ceiinorrsstt\trestrictions
          aeehorstvw\twhatsoever
          ouy\tYou
          amy\tmay
          copy\tcopy
          it\tit
          egiv\tgive
          it\tit
          aawy\taway
          or\tor
        `,
        `
          eersu\tre-use
          it\tit
          denru\tunder
          eht\tthe
          emrst\tterms
          fo\tof
          eht\tthe
          cejoprt\tProject
          beeggnrtu\tGutenberg
          ceeilns\tLicense
          cddeilnu\tincluded
        `,
        `
          hitw\twith
          hist\tthis
          bekoo\teBook
          or\tor
          eilnno\tonline
          at\tat
          beeeggnnrttuwww\twwwgutenbergnet
        `,
        `
          eiltt\tTitle
          eht\tThe
          ehmo\tHome
          eiinrstuvy\tUniversity
          abilrry\tLibrary
          aaceglotu\tcatalogue
          111459\t191415
        `,
        `
          ahortu\tAuthor
          aiillmsw\tWilliams
          adn\tand
          aegnort\tNorgate
          behilprssu\tPublishers
        `,
        `
          aeeelrs\tRelease
          adet\tDate
          ejnu\tJune
          27\t27
          0012\t2010
          [bekoo	[EBook
          00336\t	33006]
        `,
        `
          aaegglnu\tLanguage
          eghilns\tEnglish
        `,
        `
          aaccehrrt\tCharacter
          est\tset
          cdeginno\tencoding
          aciis\tASCII
        `,
        `
            
          arstt\tSTART
          fo\tOF
          hist\tTHIS
          cejoprt\tPROJECT
          beeggnrtu\tGUTENBERG
          bekoo\tEBOOK
          ehmo\tHOME
          eiinrstuvy\tUNIVERSITY
          abilrry\tLIBRARY
          aaceglotu\tCATALOGUE
        `,
        `
          cddeopru\tProduced
          by\tby
          abinr\tBrian
          efloy\tFoley
          ams\tSam
          w\tW
          adn\tand
          eht\tthe
          eilnno\tOnline
          bddeiirsttu\tDistributed
        `,
        `
          adefginooprr\tProofreading
          aemt\tTeam
          at\tat
          deghnppptttwww\thttpwwwpgdpnet
          hist\tThis
          efil\tfile
          asw\twas
        `,
        `
          cddeopru\tproduced
          fmor\tfrom
          aegims\timages
          eeglnorsuy\tgenerously
          adem\tmade
          aaabeillv\tavailable
          by\tby
          eht\tThe
        `,
        `
          eeinnrtt\tInternet
          aaaaccdehiinnrv\tArchiveCanadian
          abeiilrrs\tLibraries
        `,
        `
          abceinrrrsst\tTranscriber's
          enot\tNote
        `,
        `
          hist\tThis
          aaceglotu\tcatalogue
          agiillnory\toriginally
          aadeeppr\tappeared
          in\tin
          an\tAn
          eilnotu\tOutline
          fo\tof
          ainrssu\tRussian
          aeeilrrttu\tLiterature
        `,
        `
          by\tby
          aceimru\tMaurice
          abginr\tBaring
          aiillmsw\tWilliams
          adn\tand
          aegnort\tNorgate
          dlnnoo\tLondon
          first\tfirst
          deinprt\tprinted
          111459\t191415
        `,
        `
          eht\tThe
        `,
        `
          ehmo\tHome
          eiinrstuvy\tUniversity
        `,
        `
          abilrry\tLibrary
          fo\tof
          demnor\tModern
          deegklnow\tKnowledge
        `,
        `
          a\tA
          ceeehimnoprsv\tComprehensive
          eeirss\tSeries
          fo\tof
          enw\tNew
        `,
        `
          adn\tand
          aceillpsy\tSpecially
          einrttw\tWritten
          bkoos\tBooks
        `,
        `
          deiorst\tEDITORS
        `,
        `
          fopr\tProf
          begilrt\tGILBERT
          amrruy\tMURRAY
          diltt\tDLitt
          dll\tLLD
          abf\tFBA
        `,
        `
          beehrrt\tHERBERT
          efhirs\tFISHER
          dll\tLLD
          abf\tFBA
        `,
        `
          fopr\tProf
          j\tJ
          ahrrtu\tARTHUR
          hmnoost\tTHOMSON
          am\tMA
          dll\tLLD
        `,
        `
          fopr\tProf
          aiillmw\tWILLIAM
          t\tT
          beerrstw\tBREWSTER
          am\tMA
        `,
        `
          1\t1-
          ent\tnet
          256\t256
          aegps\tPages
          26\t26
          ent\tnet
        `,
        `
          in\tin
          chlot\tcloth
          in\tin
          aeehlrt\tleather
        `,
        `
          hiorsty\tHistory
          adn\tand
          _aegghopry	Geography_
        `,
        `
          3\t3
          eht\tTHE
          cefhnr\tFRENCH
          _eilnoortuv	REVOLUTION_
        `,
        `
          by\tBy
          aehiilr\tHILAIRE
          bcello\tBELLOC
          am\tMA
          hitw\tWith
          amps\tMaps
          it\tIt
          is\tis
          cdelooru\tcoloured
          hitw\twith
          all\tall
          eht\tthe
        `,
        `
          aciilmnty\tmilitancy
          fo\tof
          eht\tthe
          ahorstu\tauthor's
          aeeemmnprtt\ttemperament
          adily\tDaily
          _ensw	News_
        `,
        `
          4\t4
          a\tA
          horst\tSHORT
          hiorsty\tHISTORY
          fo\tOF
          arw\tWAR
          adn\tAND
          _aceep	PEACE_
        `,
        `
          by\tBy
          g\tG
          h\tH
          eiprrs\tPERRIS
          eht\tThe
          rt\tRt
          hno\tHon
          aejms\tJAMES
          bcery\tBRYCE
          eirstw\twrites
          i\tI
          aehv\thave
          ader\tread
          it\tit
          hitw\twith
        `,
        `
          chmu\tmuch
          eeinrstt\tinterest
          adn\tand
          aeelprsu\tpleasure
          adgiimnr\tadmiring
          eht\tthe
          iklls\tskill
          hitw\twith
          chhiw\twhich
          ouy\tyou
          aehv\thave
        `,
        `
          aadegmn\tmanaged
          ot\tto
          cemoprss\tcompress
          os\tso
          amny\tmany
          acfst\tfacts
          adn\tand
          eisvw\tviews
          inot\tinto
          os\tso
          allms\tsmall
          a\ta
          elmouv\tvolume
        `,
        `
          8\t8
          alopr\tPOLAR
          _aeilnooprtx	EXPLORATION_
        `,
        `
          by\tBy
          dr\tDr
          w\tW
          s\tS
          bceru\tBRUCE
          efrs\tFRSE
          adeelr\tLeader
          fo\tof
          eht\tthe
          aciost\tScotia
          deeiinoptx\tExpedition
          hitw\tWith
        `,
        `
          amps\tMaps
          a\tA
          ervy\tvery
          efhlrsy\tfreshly
          einrttw\twritten
          adn\tand
          eegiinnrstt\tinteresting
          aaeinrrtv\tnarrative
          eht\tThe
        `,
        `
          eimst\tTimes
        `,
        `
          12\t12
          eht\tTHE
          eginnoppu\tOPENING-UP
          fo\tOF
          _aacfir	AFRICA_
        `,
        `
          by\tBy
          irs\tSir
          h\tH
          h\tH
          hjnnoost\tJOHNSTON
          cggm\tGCMG
          fsz\tFZS
          hitw\tWith
          amps\tMaps
          eht\tThe
          ehmo\tHome
        `,
        `
          eiinrstuvy\tUniversity
          abilrry\tLibrary
          is\tis
          chmu\tmuch
          cdeehinr\tenriched
          by\tby
          hist\tthis
          ceeellntx\texcellent
          korw\twork
          adily\tDaily
        `,
        `
          ailm\tMail
        `,
        `
          13\t13
          aadeeilmv\tMEDIAEVAL
          _eeopru	EUROPE_
        `,
        `
          by\tBy
          h\tH
          w\tW
          c\tC
          adisv\tDAVIS
          am\tMA
          hitw\tWith
          amps\tMaps
          eno\tOne
          emor\tmore
          aiillnorsttu\tillustration
          fo\tof
          eht\tthe
        `,
        `
          acft\tfact
          ahtt\tthat
          it\tit
          aekst\ttakes
          a\ta
          ceelmopt\tcomplete
          aemrst\tmaster
          fo\tof
          eht\tthe
          bcejstu\tsubject
          ot\tto
          eirtw\twrite
          befilry\tbriefly
        `,
        `
          nopu\tupon
          it\tit
          aceehmnrst\tManchester
          _aadginru	Guardian_
        `,
        `
          14\t14
          eht\tTHE
          aacppy\tPAPACY
          demnor\tMODERN
          eimst\tTIMES
          00113378_\t1303-1870_
        `,
        `
          by\tBy
          aiillmw\tWILLIAM
          abrry\tBARRY
          dd\tDD
          dr\tDr
          abrry\tBarry
          ahs\thas
          a\ta
          deiw\twide
          aegnr\trange
          fo\tof
          deegklnow\tknowledge
          adn\tand
          an\tan
        `,
        `
          airsstt\tartist's
          eoprw\tpower
          fo\tof
          ceeilnost\tselection
          aceehmnrst\tManchester
          _aadginru	Guardian_
        `,
        `
          23\t23
          hiorsty\tHISTORY
          fo\tOF
          oru\tOUR
          eimt\tTIME
          11115889_\t1885-1911_
        `,
        `
          by\tBy
          g\tG
          p\tP
          cghoo\tGOOCH
          am\tMA
          mr\tMr
          cghoo\tGooch
          ceinorstv\tcontrives
          ot\tto
          abeehrt\tbreathe
          aiilttvy\tvitality
          inot\tinto
          his\this
        `,
        `
          orsty\tstory
          adn\tand
          ot\tto
          egiv\tgive
          su\tus
          eht\tthe
          efhls\tflesh
          as\tas
          ellw\twell
          as\tas
          eht\tthe
          benos\tbones
          fo\tof
          ceenrt\trecent
        `,
        `
          aeghinnpps\thappenings
          _beeorrsv	Observer_
        `,
        `
          25\t25
          eht\tTHE
          aciiiilnostv\tCIVILISATION
          fo\tOF
          _achin	CHINA_
        `,
        `
          by\tBy
          h\tH
          a\tA
          egils\tGILES
          dll\tLLD
          efooprrss\tProfessor
          fo\tof
          ceehins\tChinese
          at\tat
          abcdegimr\tCambridge
          in\tIn
          all\tall
          eht\tthe
        `,
        `
          amss\tmass
          fo\tof
          acfst\tfacts
          efooprrss\tProfessor
          egils\tGiles
          eenrv\tnever
          bceemos\tbecomes
          dllu\tdull
          eh\tHe
          is\tis
          aalswy\talways
          adery\tready
        `,
        `
          hitw\twith
          a\ta
          ghost\tghost
          orsty\tstory
          or\tor
          a\ta
          eerstt\tstreet
          adeenrtuv\tadventure
          for\tfor
          eht\tthe
          adeerrs\treader's
        `,
        `
          aceeinorrt\trecreation
          _aceoprstt	Spectator_
        `,
        `
          29\t29
          eht\tTHE
          adnw\tDAWN
          fo\tOF
          _hiorsty	HISTORY_
        `,
        `
          by\tBy
          j\tJ
          l\tL
          emrsy\tMYRES
          am\tMA
          afs\tFSA
          aehkmwy\tWykeham
          efooprrss\tProfessor
          fo\tof
          aceinnt\tAncient
          hiorsty\tHistory
        `,
        `
          dfoorx\tOxford
          eehrt\tThere
          is\tis
          not\tnot
          a\ta
          aegp\tpage
          in\tin
          it\tit
          ahtt\tthat
          is\tis
          not\tnot
          eeggisstuv\tsuggestive
          aceehmnrst\tManchester
        `,
        `
          aadginru\tGuardian
        `,
        `
          33\t33
          eht\tTHE
          hiorsty\tHISTORY
          fo\tOF
          _adeglnn	ENGLAND_
        `,
        `
          a\tA
          dstuy\tStudy
          in\tin
          aciillopt\tPolitical
          _eilnootuv	Evolution_
        `,
        `
          by\tBy
          fopr\tProf
          a\tA
          f\tF
          adllopr\tPOLLARD
          am\tMA
          hitw\tWith
          a\ta
          accghillnooor\tChronological
          abelt\tTable
          it\tIt
          aekst\ttakes
        `,
        `
          ist\tits
          acelp\tplace
          at\tat
          ceno\tonce
          agmno\tamong
          eht\tthe
          aaehiiortttuv\tauthoritative
          korsw\tworks
          no\ton
          eghilns\tEnglish
        `,
        `
          hiorsty\thistory
          _beeorrsv	Observer_
        `,
        `
          34\t34
          _aaacdn	CANADA_
        `,
        `
          by\tBy
          a\tA
          g\tG
          abdelry\tBRADLEY
          eht\tThe
          elmouv\tvolume
          aekms\tmakes
          an\tan
          adeeiimmt\timmediate
          aaelpp\tappeal
          ot\tto
          eht\tthe
          amn\tman
          how\twho
        `,
        `
          anstw\twants
          ot\tto
          know\tknow
          eghimnost\tsomething
          diivv\tvivid
          adn\tand
          ertu\ttrue
          abotu\tabout
          aaacdn\tCanada
          aaacdinn\tCanadian
        `,
        `
          aeegttz\tGazette
        `,
        `
          37\t37
          eelopps\tPEOPLES
          belmoprs\tPROBLEMS
          fo\tOF
          _adiin	INDIA_
        `,
        `
          by\tBy
          irs\tSir
          t\tT
          w\tW
          deehlnorss\tHOLDERNESS
          ciks\tKCSI
          aeemnnprt\tPermanent
          acdeeenrrrstuy\tUnder-Secretary
          fo\tof
          aestt\tState
        `,
        `
          fo\tof
          eht\tthe
          adiin\tIndia
          ceffio\tOffice
          jstu\tJust
          eht\tthe
          bkoo\tbook
          chhiw\twhich
          aeenpprsw\tnewspaper
          adeerrs\treaders
          eeiqrru\trequire
        `,
        `
          adoty\tto-day
          adn\tand
          a\ta
          aelmrv\tmarvel
          fo\tof
          ceeeehimnnoprsssv\tcomprehensiveness
          allp\tPall
          allm\tMall
          _aeegttz	Gazette_
        `,
        `
          24\t42
          _emor	ROME_
        `,
        `
          by\tBy
          w\tW
          aderw\tWARDE
          eflorw\tFOWLER
          am\tMA
          a\tA
          aelmrsty\tmasterly
          cehkst\tsketch
          fo\tof
          amnor\tRoman
          aaccehrrt\tcharacter
          adn\tand
          fo\tof
        `,
        `
          ahtw\twhat
          it\tit
          ddi\tdid
          for\tfor
          eht\tthe
          dlorw\tworld
          eht\tThe
          _aceoprstt	Spectator_
        `,
        `
          48\t48
          eht\tTHE
          aaceimnr\tAMERICAN
          ciilv\tCIVIL
          _arw	WAR_
        `,
        `
          by\tBy
          f\tF
          l\tL
          anopsx\tPAXSON
          efooprrss\tProfessor
          fo\tof
          aaceimnr\tAmerican
          hiorsty\tHistory
          ciinnossw\tWisconsin
          eiinrstuvy\tUniversity
        `,
        `
          hitw\tWith
          amps\tMaps
          a\tA
          giinrrst\tstirring
          dstuy\tstudy
          eht\tThe
          _aadginru	Guardian_
        `,
        `
          15\t51
          aaefrrw\tWARFARE
          in\tIN
          _abiinrt	BRITAIN_
        `,
        `
          by\tBy
          aehiilr\tHILAIRE
          bcello\tBELLOC
          am\tMA
          chir\tRich
          in\tin
          egginosstu\tsuggestion
          for\tfor
          eht\tthe
          achiilorst\thistorical
        `,
        `
          densttu\tstudent
          bdeghinru\tEdinburgh
          eeginnv\tEvening
          _ensw	News_
        `,
        `
          55\t55
          aemrst\tMASTER
          _aeimnrrs	MARINERS_
        `,
        `
          by\tBy
          j\tJ
          r\tR
          aeprss\tSPEARS
          a\tA
          cinnoostuu\tcontinuous
          orsty\tstory
          fo\tof
          ghiinpps\tshipping
          egoprrss\tprogress
          adn\tand
        `,
        `
          adeenrtuv\tadventure
          it\tIt
          aders\treads
          eikl\tlike
          a\ta
          acemnor\tromance
          agglosw\tGlasgow
          _adehlr	Herald_
        `,
        `
          16\t61
          _aelnnoop	NAPOLEON_
        `,
        `
          by\tBy
          beehrrt\tHERBERT
          efhirs\tFISHER
          dll\tLLD
          abf\tFBA
          accceehillnorv\tVice-Chancellor
          fo\tof
          deeffhils\tSheffield
        `,
        `
          eiinrstuvy\tUniversity
          hitw\tWith
          amps\tMaps
          eht\tThe
          orsty\tstory
          fo\tof
          eht\tthe
          aegrt\tgreat
          aabenoprst\tBonaparte's
          hotuy\tyouth
          his\this
        `,
        `
          aceerr\tcareer
          adn\tand
          his\this
          adfllnow\tdownfall
          hitw\twith
          emos\tsome
          aginssy\tsayings
          fo\tof
          aelnnoop\tNapoleon
          a\ta
          aeegglnoy\tgenealogy
        `,
        `
          adn\tand
          a\ta
          abbghiilopry\tbibliography
        `,
        `
          66\t66
          eht\tTHE
          anvy\tNAVY
          adn\tAND
          aes\tSEA
          _eoprw	POWER_
        `,
        `
          by\tBy
          addiv\tDAVID
          aahnny\tHANNAY
          eht\tThe
          ahortu\tauthor
          acerst\ttraces
          eht\tthe
          ghortw\tgrowth
          fo\tof
          aalnv\tnaval
          eoprw\tpower
          fmor\tfrom
        `,
        `
          aelry\tearly
          eimst\ttimes
          adn\tand
          cdeissssu\tdiscusses
          ist\tits
          ceiilnpprs\tprinciples
          adn\tand
          ceeffst\teffects
          nopu\tupon
          eht\tthe
          hiorsty\thistory
        `,
        `
          fo\tof
          eht\tthe
          eenrstw\tWestern
          dlorw\tworld
        `,
        `
          17\t71
          aegmnry\tGERMANY
          fo\tOF
          _adoty	TO-DAY_
        `,
        `
          by\tBy
          acehlrs\tCHARLES
          eortw\tTOWER
          it\tIt
          dlouw\twould
          be\tbe
          cdffiiltu\tdifficult
          ot\tto
          aemn\tname
          any\tany
          beertt\tbetter
        `,
        `
          ammrsuy\tsummary
          adily\tDaily
          _ensw	News_
        `,
        `
          28\t82
          cehiioprrst\tPREHISTORIC
          _abiinrt	BRITAIN_
        `,
        `
          by\tBy
          beorrt\tROBERT
          mnoru\tMUNRO
          am\tMA
          dm\tMD
          dll\tLLD
          efrs\tFRSE
          adeillrsttu\tIllustrated
        `,
        `
          19\t91
          eht\tTHE
          _alps	ALPS_
        `,
        `
          by\tBy
          adlnor\tARNOLD
          lnnu\tLUNN
          am\tMA
          adeillrsttu\tIllustrated
        `,
        `
          29\t92
          acelnrt\tCENTRAL
          hostu\tSOUTH
          _aaceimr	AMERICA_
        `,
        `
          by\tBy
          efooprrss\tPROFESSOR
          w\tW
          r\tR
          deehhprs\tSHEPHERD
          amps\tMaps
        `,
        `
          79\t97
          eht\tTHE
          aceinnt\tANCIENT
          _aest	EAST_
        `,
        `
          by\tBy
          d\tD
          g\tG
          aghhort\tHOGARTH
          am\tMA
          amps\tMaps
        `,
        `
          89\t98
          eht\tTHE
          arsw\tWARS
          beeentw\tbetween
          adeglnn\tENGLAND
          adn\tand
          _aaceimr	AMERICA_
        `,
        `
          by\tBy
          fopr\tProf
          t\tT
          c\tC
          himst\tSMITH
        `,
        `
          001\t100
          hiorsty\tHISTORY
          fo\tOF
          _acdlnost	SCOTLAND_
        `,
        `
          by\tBy
          fopr\tProf
          r\tR
          s\tS
          airt\tRAIT
        `,
        `
          aeeilrrttu\tLiterature
          adn\tand
          _art	Art_
        `,
        `
          2\t2
          _aaeeehkprss	SHAKESPEARE_
        `,
        `
          by\tBy
          hjno\tJOHN
          adeefilms\tMASEFIELD
          ew\tWe
          aehv\thave
          adh\thad
          emor\tmore
          adeelnr\tlearned
          bkoos\tbooks
          no\ton
          aaeeehkprss\tShakespeare
          in\tin
        `,
        `
          eht\tthe
          alst\tlast
          efw\tfew
          aersy\tyears
          btu\tbut
          not\tnot
          eno\tone
          os\tso
          eisw\twise
          aceehmnrst\tManchester
          _aadginru	Guardian_
        `,
        `
          27\t27
          eghilns\tENGLISH
          aeeilrrttu\tLITERATURE
          _demnor	MODERN_
        `,
        `
          by\tBy
          g\tG
          h\tH
          aimr\tMAIR
          am\tMA
          aeeghlortt\tAltogether
          a\ta
          efhrs\tfresh
          adn\tand
          addiiilnuv\tindividual
        `,
        `
          bkoo\tbook
          _beeorrsv	Observer_
        `,
        `
          35\t35
          aadklmnrs\tLANDMARKS
          in\tIN
          cefhnr\tFRENCH
          _aeeilrrttu	LITERATURE_
        `,
        `
          by\tBy
          g\tG
          l\tL
          acehrsty\tSTRACHEY
          it\tIt
          is\tis
          cdffiiltu\tdifficult
          ot\tto
          aegiimn\timagine
          how\thow
          a\ta
          beertt\tbetter
          accnotu\taccount
          fo\tof
        `,
        `
          cefhnr\tFrench
          aeeilrrttu\tLiterature
          cdlou\tcould
          be\tbe
          eginv\tgiven
          in\tin
          025\t250
          allms\tsmall
          aegps\tpages
          eht\tThe
          _eimst	Times_
        `,
        `
          39\t39
          _acceehirrttu	ARCHITECTURE_
        `,
        `
          by\tBy
          fopr\tProf
          w\tW
          r\tR
          abehlty\tLETHABY
          eorv\tOver
          forty\tforty
          aiillnorssttu\tIllustrations
          defghillltuy\tDelightfully
        `,
        `
          bghirt\tbright
          adeginr\treading
          achiinrst\tChristian
          _dlorw	World_
        `,
        `
          34\t43
          eghilns\tENGLISH
          aeeilrrttu\tLITERATURE
          _aadeeilmv	MEDIAEVAL_
        `,
        `
          by\tBy
          fopr\tProf
          w\tW
          p\tP
          ekr\tKER
          am\tMA
          fopr\tProf
          ekrs\tKer's
          deegklnow\tknowledge
          adn\tand
          aestt\ttaste
          aer\tare
        `,
        `
          aabceehilmnpu\tunimpeachable
          adn\tand
          his\this
          elsty\tstyle
          is\tis
          ceeeffitv\teffective
          eilmps\tsimple
          ety\tyet
          eenrv\tnever
        `,
        `
          dry\tdry
          eht\tThe
          _aaeehmntu	Athenaeum_
        `,
        `
          45\t45
          eht\tTHE
          eghilns\tENGLISH
          _aaegglnu	LANGUAGE_
        `,
        `
          by\tBy
          l\tL
          aaellprs\tPEARSALL
          himst\tSMITH
          am\tMA
          a\tA
          hllowy\twholly
          aacfgiinnst\tfascinating
          dstuy\tstudy
          fo\tof
          eht\tthe
        `,
        `
          deeffinrt\tdifferent
          aemrsst\tstreams
          ahtt\tthat
          aekm\tmake
          eht\tthe
          aegrt\tgreat
          eirrv\triver
          fo\tof
          eht\tthe
          eghilns\tEnglish
        `,
        `
          ceehps\tspeech
          adily\tDaily
          _ensw	News_
        `,
        `
          25\t52
          aegrt\tGREAT
          eirrstw\tWRITERS
          fo\tOF
          _aaceimr	AMERICA_
        `,
        `
          by\tBy
          fopr\tProf
          j\tJ
          eeiknrs\tERSKINE
          adn\tand
          fopr\tProf
          w\tW
          p\tP
          enrtt\tTRENT
          an\tAn
          aabdeilmr\tadmirable
          ammrsuy\tsummary
          fmor\tfrom
        `,
        `
          afiklnnr\tFranklin
          ot\tto
          akmr\tMark
          aintw\tTwain
          deeeilnnv\tenlivened
          by\tby
          a\ta
          dry\tdry
          hmoruu\thumour
          _aaeehmntu	Athenaeum_
        `,
        `
          36\t63
          aeinprst\tPAINTERS
          adn\tAND
          _agiinnpt	PAINTING_
        `,
        `
          by\tBy
          irs\tSir
          cdeefikrr\tFREDERICK
          deemorw\tWEDMORE
          hitw\tWith
          16\t16
          aefhlnot\thalf-tone
          aiillnorssttu\tillustrations
          fmor\tFrom
          eht\tthe
        `,
        `
          eiiimprstv\tPrimitives
          ot\tto
          eht\tthe
          eiiimnoprsssst\tImpressionists
        `,
        `
          46\t64
          dr\tDR
          hjnnoos\tJOHNSON
          adn\tAND
          his\tHIS
          _cceilr	CIRCLE_
        `,
        `
          by\tBy
          hjno\tJOHN
          abeily\tBAILEY
          am\tMA
          a\tA
          most\tmost
          defghilltu\tdelightful
          aessy\tessay
          achiinrst\tChristian
          _dlorw	World_
        `,
        `
          56\t65
          eht\tTHE
          aeeilrrttu\tLITERATURE
          fo\tOF
          _aegmnry	GERMANY_
        `,
        `
          by\tBy
          efooprrss\tProfessor
          j\tJ
          g\tG
          benoorrst\tROBERTSON
          am\tMA
          dhp\tPhD
          denru\tUnder
          eht\tthe
          ahorstu\tauthor's
          fikllsu\tskilful
        `,
        `
          aeemnrttt\ttreatment
          eht\tthe
          bcejstu\tsubject
          hossw\tshows
          efil\tlife
          adn\tand
          ciinnottuy\tcontinuity
          _aaeehmntu	Athenaeum_
        `,
        `
          07\t70
          eht\tTHE
          aciinortv\tVICTORIAN
          aeg\tAGE
          in\tIN
          _aeeilrrttu	LITERATURE_
        `,
        `
          by\tBy
          g\tG
          k\tK
          ceehnorstt\tCHESTERTON
          no\tNo
          eno\tone
          illw\twill
          ptu\tput
          it\tit
          dnow\tdown
          hiottuw\twithout
          a\ta
          eenss\tsense
          fo\tof
        `,
        `
          aghinv\thaving
          aeknt\ttaken
          a\ta
          cinot\ttonic
          or\tor
          cdeeeirv\treceived
          a\ta
          eeirss\tseries
          fo\tof
          cceeilrt\telectric
          chkoss\tshocks
          eht\tThe
        `,
        `
          eimst\tTimes
        `,
        `
          37\t73
          eht\tTHE
          giinrtw\tWRITING
          fo\tOF
          _eghilns	ENGLISH_
        `,
        `
          by\tBy
          w\tW
          t\tT
          beerrstw\tBREWSTER
          am\tAM
          efooprrss\tProfessor
          fo\tof
          eghilns\tEnglish
          in\tin
          abcilmou\tColumbia
          eiinrstuvy\tUniversity
        `,
        `
          beeilnss\tSensible
          adn\tand
          not\tnot
          degiilorrvy\tover-rigidly
          aceilnnnootv\tconventional
          aceehmnrst\tManchester
          _aadginru	Guardian_
        `,
        `
          57\t75
          aceinnt\tANCIENT
          art\tART
          adn\tAND
          _ailrtu	RITUAL_
        `,
        `
          by\tBy
          aejn\tJANE
          e\tE
          ahinorrs\tHARRISON
          dll\tLLD
          diltt\tDLitt
          acghimnr\tCharming
          in\tin
          elsty\tstyle
          adn\tand
          adeelnr\tlearned
          in\tin
        `,
        `
          aemnnr\tmanner
          adily\tDaily
          _ensw	News_
        `,
        `
          67\t76
          deeiiprsu\tEURIPIDES
          adn\tAND
          his\tHIS
          _aeg	AGE_
        `,
        `
          by\tBy
          begilrt\tGILBERT
          amrruy\tMURRAY
          diltt\tDLitt
          dll\tLLD
          abf\tFBA
          egirsu\tRegius
          efooprrss\tProfessor
          fo\tof
          eegkr\tGreek
        `,
        `
          at\tat
          dfoorx\tOxford
          a\tA
          abefiltuu\tbeautiful
          ceeip\tpiece
          fo\tof
          korw\twork
          jstu\tJust
          in\tin
          eht\tthe
          eflnssu\tfulness
          fo\tof
          eimt\ttime
        `,
        `
          adn\tand
          aceltxy\texactly
          in\tin
          eht\tthe
          ghirt\tright
          acelp\tplace
          deeiiprsu\tEuripides
          ahs\thas
          cemo\tcome
          inot\tinto
          his\this
        `,
        `
          now\town
          eht\tThe
          _ainnot	Nation_
        `,
        `
          78\t87
          accehru\tCHAUCER
          adn\tAND
          his\tHIS
          _eimst	TIMES_
        `,
        `
          by\tBy
          acegr\tGRACE
          e\tE
          adhow\tHADOW
        `,
        `
          89\t89
          aiillmw\tWILLIAM
          imorrs\tMORRIS
          his\tHIS
          korw\tWORK
          adn\tAND
          _ceefilnnu	INFLUENCE_
        `,
        `
          by\tBy
          a\tA
          clnottu\tCLUTTON
          bckor\tBROCK
        `,
        `
          39\t93
          eht\tTHE
          _aaceeinnrss	RENAISSANCE_
        `,
        `
          by\tBy
          dehit\tEDITH
          cehils\tSICHEL
        `,
        `
          59\t95
          aabeehilntz\tELIZABETHAN
          _aeeilrrttu	LITERATURE_
        `,
        `
          by\tBy
          j\tJ
          m\tM
          benoorrst\tROBERTSON
          mp\tMP
        `,
        `
          99\t99
          an\tAN
          eilnotu\tOUTLINE
          fo\tOF
          ainrssu\tRUSSIAN
          _aeeilrrttu	LITERATURE_
        `,
        `
          by\tBy
          hno\tHon
          aceimru\tMAURICE
          abginr\tBARING
        `,
        `
          _cceeins	Science_
        `,
        `
          7\t7
          demnor\tMODERN
          _aegghopry	GEOGRAPHY_
        `,
        `
          by\tBy
          dr\tDr
          aimnor\tMARION
          begiinnw\tNEWBIGIN
          adeillrsttu\tIllustrated
          aegghopry\tGeography
          aagin\tagain
          ahtw\twhat
          a\ta
          dllu\tdull
        `,
        `
          deiostu\ttedious
          dstuy\tstudy
          ahtt\tthat
          asw\twas
          notw\twont
          ot\tto
          be\tbe
          btu\tBut
          imss\tMiss
          aimnor\tMarion
          begiinnw\tNewbigin
          einsstv\tinvests
        `,
        `
          ist\tits
          dry\tdry
          benos\tbones
          hitw\twith
          eht\tthe
          efhls\tflesh
          adn\tand
          bdloo\tblood
          fo\tof
          acimnort\tromantic
          eeinrstt\tinterest
          adily\tDaily
        `,
        `
          aeeghlprt\tTelegraph
        `,
        `
          9\t9
          eht\tTHE
          eilnootuv\tEVOLUTION
          fo\tOF
          _alnpst	PLANTS_
        `,
        `
          by\tBy
          dr\tDr
          d\tD
          h\tH
          costt\tSCOTT
          am\tMA
          frs\tFRS
          aelt\tlate
          hno\tHon
          eeekpr\tKeeper
          fo\tof
          eht\tthe
          dejllor\tJodrell
        `,
        `
          aabloorrty\tLaboratory
          ekw\tKew
          flluy\tFully
          adeillrsttu\tillustrated
          dr\tDr
          cosstt\tScott's
          acddin\tcandid
          adn\tand
        `,
        `
          aafiilmr\tfamiliar
          elsty\tstyle
          aekms\tmakes
          eht\tthe
          cdffiiltu\tdifficult
          bcejstu\tsubject
          bhot\tboth
          aacfgiinnst\tfascinating
          adn\tand
        `,
        `
          aesy\teasy
          adeegnrrs\tGardeners'
          _ccehilnor	Chronicle_
        `,
        `
          17\t17
          aehhlt\tHEALTH
          adn\tAND
          _adeeiss	DISEASE_
        `,
        `
          by\tBy
          w\tW
          eeills\tLESLIE
          aceeikmnz\tMACKENZIE
          dm\tMD
          acllo\tLocal
          eegmnnortv\tGovernment
          abdor\tBoard
          bdeghinru\tEdinburgh
        `,
        `
          18\t18
          cdiinnoorttu\tINTRODUCTION
          ot\tTO
          _aacehimmstt	MATHEMATICS_
        `,
        `
          by\tBy
          a\tA
          n\tN
          adeehhitw\tWHITEHEAD
          cds\tScD
          frs\tFRS
          hitw\tWith
          aadgimrs\tDiagrams
          mr\tMr
          adeehhitw\tWhitehead
          ahs\thas
        `,
        `
          acddeghirs\tdischarged
          hitw\twith
          ccinoopssuu\tconspicuous
          ccesssu\tsuccess
          eht\tthe
          akst\ttask
          eh\the
          is\tis
          os\tso
          aceeillnoptxy\texceptionally
        `,
        `
          adefiilqu\tqualified
          ot\tto
          adeeknrtu\tundertake
          for\tFor
          eh\the
          is\tis
          eno\tone
          fo\tof
          oru\tour
          aegrt\tgreat
          aehiiorsttu\tauthorities
          nopu\tupon
        `,
        `
          eht\tthe
          adfinnoostu\tfoundations
          fo\tof
          eht\tthe
          cceeins\tscience
          eeimnrssttw\tWestminster
          _aeegttz	Gazette_
        `,
        `
          19\t19
          eht\tTHE
          aailmn\tANIMAL
          _dlorw	WORLD_
        `,
        `
          by\tBy
          efooprrss\tProfessor
          f\tF
          w\tW
          abeglm\tGAMBLE
          frs\tFRS
          hitw\tWith
          cdiinnoorttu\tIntroduction
          by\tby
          irs\tSir
          eilorv\tOliver
        `,
        `
          deglo\tLodge
          amny\tMany
          aiillnorssttu\tIllustrations
          a\tA
          aacfgiinnst\tfascinating
          adn\tand
          eeggisstuv\tsuggestive
        `,
        `
          ersuvy\tsurvey
          gimnnor\tMorning
          _opst	Post_
        `,
        `
          02\t20
          _eilnootuv	EVOLUTION_
        `,
        `
          by\tBy
          efooprrss\tProfessor
          j\tJ
          ahrrtu\tARTHUR
          hmnoost\tTHOMSON
          adn\tand
          efooprrss\tProfessor
          acikprt\tPATRICK
          ddeegs\tGEDDES
          a\tA
        `,
        `
          acdelmnooruy\tmany-coloured
          adn\tand
          acimnort\tromantic
          aaamnopr\tpanorama
          eginnop\topening
          pu\tup
          eikl\tlike
          no\tno
          ehort\tother
          bkoo\tbook
          ew\twe
        `,
        `
          know\tknow
          a\ta
          aailnort\trational
          iinosv\tvision
          fo\tof
          ddeeellmnooprtvw\tworld-development
          abeflst\tBelfast
          _eeelnrsttw	News-Letter_
        `,
        `
          22\t22
          ceimr\tCRIME
          adn\tAND
          _aiinnsty	INSANITY_
        `,
        `
          by\tBy
          dr\tDr
          c\tC
          a\tA
          ceeimrr\tMERCIER
          efhinrssu\tFurnishes
          chmu\tmuch
          aabelluv\tvaluable
          afiimnnoort\tinformation
          fmor\tfrom
          eno\tone
        `,
        `
          ccginopuy\toccupying
          eht\tthe
          eghhist\thighest
          iinoopst\tposition
          agmno\tamong
          acdeegillmo\tmedico-legal
          cghiloopsssty\tpsychologists
          almsuy\tAsylum
        `,
        `
          ensw\tNews
        `,
        `
          28\t28
          acchilpsy\tPSYCHICAL
          _aceehrrs	RESEARCH_
        `,
        `
          by\tBy
          irs\tSir
          w\tW
          f\tF
          aberrtt\tBARRETT
          frs\tFRS
          efooprrss\tProfessor
          fo\tof
          chipssy\tPhysics
          alory\tRoyal
          ceegllo\tCollege
          fo\tof
        `,
        `
          cceeins\tScience
          bdilnu\tDublin
          01113789\t1873-1910
          ahtw\tWhat
          eh\the
          ahs\thas
          ot\tto
          asy\tsay
          no\ton
          adegghhinorttu\tthought-reading
        `,
        `
          himnopsty\thypnotism
          aeehlptty\ttelepathy
          aciilnorsstvy\tcrystal-vision
          aiiilmprsstu\tspiritualism
          dgiiinnsv\tdivinings
          adn\tand
          os\tso
        `,
        `
          no\ton
          illw\twill
          be\tbe
          ader\tread
          hitw\twith
          adiitvy\tavidity
          ddeenu\tDundee
          _ceiorru	Courier_
        `,
        `
          13\t31
          _amnoorsty	ASTRONOMY_
        `,
        `
          by\tBy
          a\tA
          r\tR
          hikns\tHINKS
          am\tMA
          cefhi\tChief
          aainssstt\tAssistant
          abcdegimr\tCambridge
          abeoorrstvy\tObservatory
        `,
        `
          agiilnor\tOriginal
          in\tin
          ghhottu\tthought
          ccceeilt\teclectic
          in\tin
          abcensstu\tsubstance
          adn\tand
          acciilrt\tcritical
          in\tin
        `,
        `
          aeemnrttt\ttreatment
          no\tNo
          beertt\tbetter
          eilltt\tlittle
          bkoo\tbook
          is\tis
          aaabeillv\tavailable
          chloos\tSchool
          _dlorw	World_
        `,
        `
          23\t32
          cdiinnoorttu\tINTRODUCTION
          ot\tTO
          _cceeins	SCIENCE_
        `,
        `
          by\tBy
          j\tJ
          ahrrtu\tARTHUR
          hmnoost\tTHOMSON
          am\tMA
          egirsu\tRegius
          efooprrss\tProfessor
          fo\tof
          aalnrtu\tNatural
          hiorsty\tHistory
        `,
        `
          abdeeenr\tAberdeen
          eiinrstuvy\tUniversity
          efooprrss\tProfessor
          hmnoosst\tThomson's
          defghilltu\tdelightful
          aeilrrty\tliterary
          elsty\tstyle
          is\tis
        `,
        `
          ellw\twell
          knnow\tknown
          adn\tand
          eehr\there
          eh\the
          cdeiorsssu\tdiscourses
          efhlrsy\tfreshly
          adn\tand
          aeilsy\teasily
          no\ton
          eht\tthe
          dehmost\tmethods
        `,
        `
          fo\tof
          cceeins\tscience
          adn\tand
          ist\tits
          aeilnorst\trelations
          hitw\twith
          hhilooppsy\tphilosophy
          art\tart
          egiilnor\treligion
          adn\tand
        `,
        `
          aaccilprt\tpractical
          efil\tlife
          abdeeenr\tAberdeen
          _ajlnoru	Journal_
        `,
        `
          36\t36
          aceilmt\tCLIMATE
          adn\tAND
          _aeehrtw	WEATHER_
        `,
        `
          by\tBy
          fopr\tProf
          h\tH
          n\tN
          cdiknos\tDICKSON
          cdnoosx\tDScOxon
          am\tMA
          efrs\tFRSE
          deeinprst\tPresident
          fo\tof
          eht\tthe
        `,
        `
          alory\tRoyal
          aceegillmooort\tMeteorological
          ceiosty\tSociety
          hitw\tWith
          aadgimrs\tDiagrams
          eht\tThe
          ahortu\tauthor
          ahs\thas
        `,
        `
          ccddeeesu\tsucceeded
          in\tin
          eeginnprst\tpresenting
          in\tin
          a\ta
          ervy\tvery
          cdilu\tlucid
          adn\tand
          aabeeeglr\tagreeable
          aemnnr\tmanner
          eht\tthe
        `,
        `
          acessu\tcauses
          fo\tof
          eht\tthe
          eemmnostv\tmovements
          fo\tof
          eht\tthe
          aeehmoprst\tatmosphere
          adn\tand
          fo\tof
          eht\tthe
          emor\tmore
          abelst\tstable
        `,
        `
          dinsw\twinds
          aceehmnrst\tManchester
          _aadginru	Guardian_
        `,
        `
          14\t41
          _aghlnoooprty	ANTHROPOLOGY_
        `,
        `
          by\tBy
          r\tR
          r\tR
          aemrtt\tMARETT
          am\tMA
          adeerr\tReader
          in\tin
          acilos\tSocial
          aghlnoooprty\tAnthropology
          in\tin
          dfoorx\tOxford
        `,
        `
          eiinrstuvy\tUniversity
          an\tAn
          abellostuy\tabsolutely
          ceefprt\tperfect
          abdhknoo\thandbook
          os\tso
          acelr\tclear
          ahtt\tthat
          a\ta
          cdhil\tchild
        `,
        `
          cdlou\tcould
          addennrstu\tunderstand
          it\tit
          os\tso
          aacfgiinnst\tfascinating
          adn\tand
          ahmnu\thuman
          ahtt\tthat
          it\tit
          abest\tbeats
          cfiinot\tfiction
        `,
        `
          ot\t'to
          a\ta
          aeflrzz\tfrazzle'
          gimnnor\tMorning
          _adeelr	Leader_
        `,
        `
          44\t44
          eht\tTHE
          ceiilnpprs\tPRINCIPLES
          fo\tOF
          _ghiloopsyy	PHYSIOLOGY_
        `,
        `
          by\tBy
          fopr\tProf
          j\tJ
          g\tG
          ccdeikkmnr\tMCKENDRICK
          dm\tMD
          nopu\tUpon
          eervy\tevery
          aegp\tpage
          fo\tof
          it\tit
          is\tis
          adempst\tstamped
          eht\tthe
        `,
        `
          eimprss\timpress
          fo\tof
          a\ta
          aceeirtv\tcreative
          aagiiimnnot\timagination
          agglosw\tGlasgow
          _adehlr	Herald_
        `,
        `
          46\t46
          aemrtt\tMATTER
          adn\tAND
          _eegnry	ENERGY_
        `,
        `
          by\tBy
          f\tF
          ddosy\tSODDY
          am\tMA
          frs\tFRS
          fopr\tProf
          ddosy\tSoddy
          ahs\thas
          ccefllsssuuy\tsuccessfully
          accdehilmops\taccomplished
        `,
        `
          eht\tthe
          ervy\tvery
          cdffiiltu\tdifficult
          akst\ttask
          fo\tof
          agikmn\tmaking
          chipssy\tphysics
          fo\tof
          abbginors\tabsorbing
          eeinrstt\tinterest
          no\ton
        `,
        `
          aloppru\tpopular
          eilns\tlines
          _aenrtu	Nature_
        `,
        `
          49\t49
          cghloopsyy\tPSYCHOLOGY
          eht\tTHE
          dstuy\tSTUDY
          fo\tOF
          _abehioruv	BEHAVIOUR_
        `,
        `
          by\tBy
          fopr\tProf
          w\tW
          acdgllmou\tMCDOUGALL
          frs\tFRS
          bm\tMB
          a\tA
          ahppy\thappy
          aeelmpx\texample
          fo\tof
          eht\tthe
        `,
        `
          accehilnnnot\tnon-technical
          adghilnn\thandling
          fo\tof
          an\tan
          deilnuwy\tunwieldy
          cceeins\tscience
          eggginsstu\tsuggesting
          aehrrt\trather
          ahnt\tthan
        `,
        `
          adggiimnost\tdogmatising
          it\tIt
          dhlosu\tshould
          ehtw\twhet
          aeeippstt\tappetites
          for\tfor
          deeepr\tdeeper
          dstuy\tstudy
          achiinrst\tChristian
        `,
        `
          dlorw\tWorld
        `,
        `
          35\t53
          eht\tTHE
          agikmn\tMAKING
          fo\tOF
          eht\tTHE
          _aehrt	EARTH_
        `,
        `
          by\tBy
          fopr\tProf
          j\tJ
          w\tW
          eggorry\tGREGORY
          frs\tFRS
          hitw\tWith
          38\t38
          amps\tMaps
          adn\tand
          efgirsu\tFigures
          a\tA
        `,
        `
          aacfgiinnst\tfascinating
          eilltt\tlittle
          elmouv\tvolume
          agmno\tAmong
          eht\tthe
          amny\tmany
          dgoo\tgood
          ghinst\tthings
          acdeinnot\tcontained
          in\tin
        `,
        `
          eht\tthe
          eeirss\tseries
          hist\tthis
          aekst\ttakes
          a\ta
          ghhi\thigh
          acelp\tplace
          eht\tThe
          _aaeehmntu	Athenaeum_
        `,
        `
          57\t57
          eht\tTHE
          ahmnu\tHUMAN
          _bdoy	BODY_
        `,
        `
          by\tBy
          a\tA
          ehikt\tKEITH
          dm\tMD
          dll\tLLD
          acenoorrstv\tConservator
          fo\tof
          emmsuu\tMuseum
          adn\tand
          aehinnrtu\tHunterian
        `,
        `
          efooprrss\tProfessor
          alory\tRoyal
          ceegllo\tCollege
          fo\tof
          egnorssu\tSurgeons
          adeillrsttu\tIllustrated
          it\tIt
          aeilllrty\tliterally
        `,
        `
          aekms\tmakes
          eht\tthe
          dry\t'dry
          benos\tbones'
          ot\tto
          eilv\tlive
          it\tIt
          illw\twill
          aceilnrty\tcertainly
          aekt\ttake
          a\ta
          ghhi\thigh
          acelp\tplace
        `,
        `
          agmno\tamong
          eht\tthe
          accilsss\tclassics
          fo\tof
          aloppru\tpopular
          cceeins\tscience
          aceehmnrst\tManchester
          _aadginru	Guardian_
        `,
        `
          58\t58
          _cceeiilrtty	ELECTRICITY_
        `,
        `
          by\tBy
          begirst\tGISBERT
          akpp\tKAPP
          degn\tDEng
          efooprrss\tProfessor
          fo\tof
          acceeillrt\tElectrical
          eeeggiinnnr\tEngineering
          in\tin
          eht\tthe
        `,
        `
          eiinrstuvy\tUniversity
          fo\tof
          abghiimmnr\tBirmingham
          adeillrsttu\tIllustrated
          it\tIt
          illw\twill
          be\tbe
          aacdeeipprt\tappreciated
        `,
        `
          aeglrty\tgreatly
          by\tby
          aeelnrrs\tlearners
          adn\tand
          by\tby
          eht\tthe
          aegrt\tgreat
          bemnru\tnumber
          fo\tof
          aaemrstu\tamateurs
          how\twho
          aer\tare
        `,
        `
          deeeinrstt\tinterested
          in\tin
          ahtw\twhat
          is\tis
          eno\tone
          fo\tof
          eht\tthe
          most\tmost
          aacfgiinnst\tfascinating
          fo\tof
          ccefiiinst\tscientific
        `,
        `
          deisstu\tstudies
          agglosw\tGlasgow
          _adehlr	Herald_
        `,
        `
          26\t62
          eht\tTHE
          giinor\tORIGIN
          adn\tAND
          aenrtu\tNATURE
          fo\tOF
          _efil	LIFE_
        `,
        `
          by\tBy
          dr\tDr
          abeijmnn\tBENJAMIN
          emoor\tMOORE
          efooprrss\tProfessor
          fo\tof
          bcehiimorsty\tBio-Chemistry
          eiinrstuvy\tUniversity
          ceegllo\tCollege
        `,
        `
          eillooprv\tLiverpool
          agiilmnsttu\tStimulating
          adeelnr\tlearned
          cdilu\tlucid
          eillooprv\tLiverpool
          _ceiorru	Courier_
        `,
        `
          67\t67
          _cehimrsty	CHEMISTRY_
        `,
        `
          by\tBy
          aaehlpr\tRAPHAEL
          adellmo\tMELDOLA
          frs\tFRS
          efooprrss\tProfessor
          fo\tof
          cehimrsty\tChemistry
          in\tin
          bfinrsuy\tFinsbury
        `,
        `
          accehilnt\tTechnical
          ceegllo\tCollege
          dlnnoo\tLondon
          eenprsst\tPresents
          acellry\tclearly
          hiottuw\twithout
          eht\tthe
          adeilt\tdetail
        `,
        `
          adddeemn\tdemanded
          by\tby
          eht\tthe
          eeprtx\texpert
          eht\tthe
          awy\tway
          in\tin
          chhiw\twhich
          accehilm\tchemical
          cceeins\tscience
          ahs\thas
        `,
        `
          ddeeelopv\tdeveloped
          adn\tand
          eht\tthe
          aegst\tstage
          it\tit
          ahs\thas
          acdeehr\treached
        `,
        `
          27\t72
          alnpt\tPLANT
          _efil	LIFE_
        `,
        `
          by\tBy
          fopr\tProf
          j\tJ
          b\tB
          aefmrr\tFARMER
          cds\tDSc
          frs\tFRS
          adeillrsttu\tIllustrated
          efooprrss\tProfessor
          aefmrr\tFarmer
        `,
        `
          ahs\thas
          cdeinortv\tcontrived
          ot\tto
          cenovy\tconvey
          all\tall
          eht\tthe
          most\tmost
          ailtv\tvital
          acfst\tfacts
          fo\tof
          alnpt\tplant
          ghiloopsyy\tphysiology
        `,
        `
          adn\tand
          alos\talso
          ot\tto
          eenprst\tpresent
          a\ta
          dgoo\tgood
          amny\tmany
          fo\tof
          eht\tthe
          cefhi\tchief
          belmoprs\tproblems
          chhiw\twhich
          cfnnoort\tconfront
        `,
        `
          aegiinorssttv\tinvestigators
          adoty\tto-day
          in\tin
          eht\tthe
          aelmrs\trealms
          fo\tof
          ghlmooopry\tmorphology
          adn\tand
          fo\tof
        `,
        `
          deehirty\theredity
          gimnnor\tMorning
          _opst	Post_
        `,
        `
          78\t78
          eht\tTHE
          _aceno	OCEAN_
        `,
        `
          a\tA
          aeeglnr\tGeneral
          accnotu\tAccount
          fo\tof
          eht\tthe
          cceeins\tScience
          fo\tof
          eht\tthe
          aes\tSea
          by\tBy
          irs\tSir
          hjno\tJOHN
          amrruy\tMURRAY
        `,
        `
          bck\tKCB
          frs\tFRS
          clooru\tColour
          aelpst\tplates
          adn\tand
          ehort\tother
          aiillnorssttu\tillustrations
        `,
        `
          79\t79
          _eenrsv	NERVES_
        `,
        `
          by\tBy
          fopr\tProf
          d\tD
          aefrrs\tFRASER
          ahirrs\tHARRIS
          dm\tMD
          cds\tDSc
          adeillrsttu\tIllustrated
          a\tA
          cdeiinoprst\tdescription
        `,
        `
          in\tin
          accehilnnnot\tnon-technical
          aaegglnu\tlanguage
          fo\tof
          eht\tthe
          enorsuv\tnervous
          emssty\tsystem
          ist\tits
          aceiinrtt\tintricate
        `,
        `
          acehimmns\tmechanism
          adn\tand
          eht\tthe
          aegnrst\tstrange
          aeehmnnop\tphenomena
          fo\tof
          eegnry\tenergy
          adn\tand
          aefgitu\tfatigue
          hitw\twith
          emos\tsome
        `,
        `
          aaccilprt\tpractical
          ceefilnorst\treflections
        `,
        `
          68\t86
          _esx	SEX_
        `,
        `
          by\tBy
          fopr\tProf
          acikprt\tPATRICK
          ddeegs\tGEDDES
          adn\tand
          fopr\tProf
          j\tJ
          ahrrtu\tARTHUR
          hmnoost\tTHOMSON
          dll\tLLD
          illsu\tIllus
        `,
        `
          88\t88
          eht\tTHE
          ghortw\tGROWTH
          fo\tOF
          _eeopru	EUROPE_
        `,
        `
          by\tBy
          fopr\tProf
          eegillnrv\tGRENVILLE
          celo\tCOLE
          illsu\tIllus
        `,
        `
          hhilooppsy\tPhilosophy
          adn\tand
          _egiilnor	Religion_
        `,
        `
          15\t15
          _aadehimmmmnos	MOHAMMEDANISM_
        `,
        `
          by\tBy
          fopr\tProf
          d\tD
          s\tS
          aghilmoortu\tMARGOLIOUTH
          am\tMA
          diltt\tDLitt
          hist\tThis
          eegnorsu\tgenerous
          ghiillnss\tshilling's
        `,
        `
          hortw\tworth
          fo\tof
          dimosw\twisdom
          a\tA
          acdeeilt\tdelicate
          hmoorsuu\thumorous
          adn\tand
          most\tmost
          beeilnoprss\tresponsible
        `,
        `
          aacerttt\ttractate
          by\tby
          an\tan
          aeiiillmntuv\tilluminative
          efooprrss\tprofessor
          adily\tDaily
          _ailm	Mail_
        `,
        `
          04\t40
          eht\tTHE
          belmoprs\tPROBLEMS
          fo\tOF
          _hhilooppsy	PHILOSOPHY_
        `,
        `
          by\tBy
          eht\tthe
          hno\tHon
          abdenrrt\tBERTRAND
          ellrssu\tRUSSELL
          frs\tFRS
          a\tA
          bkoo\tbook
          ahtt\tthat
          eht\tthe
          amn\t'man
          in\tin
          eht\tthe
        `,
        `
          eerstt\tstreet'
          illw\twill
          ceeginors\trecognise
          at\tat
          ceno\tonce
          ot\tto
          be\tbe
          a\ta
          bnoo\tboon
          ceilnnosstty\tConsistently
          cdilu\tlucid
          adn\tand
        `,
        `
          accehilnnnot\tnon-technical
          ghhoorttuu\tthroughout
          achiinrst\tChristian
          _dlorw	World_
        `,
        `
          47\t47
          _bddhimsu	BUDDHISM_
        `,
        `
          by\tBy
          mrs\tMrs
          hrsy\tRHYS
          addisv\tDAVIDS
          am\tMA
          eht\tThe
          ahortu\tauthor
          eenprsst\tpresents
          ervy\tvery
          aaceilrtttvy\tattractively
          as\tas
        `,
        `
          ellw\twell
          as\tas
          ervy\tvery
          adeellnry\tlearnedly
          eht\tthe
          hhilooppsy\tphilosophy
          fo\tof
          bddhimsu\tBuddhism
          adily\tDaily
          _ensw	News_
        `,
        `
          05\t50
          cfimnnnooorty\tNONCONFORMITY
          ist\tIts
          giinor\tORIGIN
          adn\tand
          _egoprrss	PROGRESS_
        `,
        `
          by\tBy
          aciilnppr\tPrincipal
          w\tW
          b\tB
          beeils\tSELBIE
          am\tMA
          eht\tThe
          achiilorst\thistorical
          aprt\tpart
          is\tis
          abiillnrt\tbrilliant
          in\tin
        `,
        `
          ist\tits
          ghiinst\tinsight
          acilrty\tclarity
          adn\tand
          inooopprrt\tproportion
          achiinrst\tChristian
          _dlorw	World_
        `,
        `
          45\t54
          _cehist	ETHICS_
        `,
        `
          by\tBy
          g\tG
          e\tE
          emoor\tMOORE
          am\tMA
          ceelrrtu\tLecturer
          in\tin
          almor\tMoral
          cceeins\tScience
          in\tin
          abcdegimr\tCambridge
        `,
        `
          eiinrstuvy\tUniversity
          a\tA
          ervy\tvery
          cdilu\tlucid
          ghhotu\tthough
          cellosy\tclosely
          adeenors\treasoned
          eilnotu\toutline
          fo\tof
          eht\tthe
          cgilo\tlogic
        `,
        `
          fo\tof
          dgoo\tgood
          ccdnotu\tconduct
          achiinrst\tChristian
          _dlorw	World_
        `,
        `
          56\t56
          eht\tTHE
          agikmn\tMAKING
          fo\tOF
          eht\tTHE
          enw\tNEW
          _aeemnsttt	TESTAMENT_
        `,
        `
          by\tBy
          fopr\tProf
          b\tB
          w\tW
          abcno\tBACON
          dll\tLLD
          dd\tDD
          efooprrss\tProfessor
          abcno\tBacon
          ahs\thas
          bdlloy\tboldly
          adn\tand
        `,
        `
          eilswy\twisely
          aeknt\ttaken
          his\this
          now\town
          eiln\tline
          adn\tand
          ahs\thas
          cddeopru\tproduced
          as\tas
          a\ta
          elrstu\tresult
          an\tan
        `,
        `
          aadeiilnorrrtxy\textraordinarily
          diivv\tvivid
          agiilmnsttu\tstimulating
          adn\tand
          cdilu\tlucid
          bkoo\tbook
          aceehmnrst\tManchester
        `,
        `
          aadginru\tGuardian
        `,
        `
          06\t60
          iimnosss\tMISSIONS
          ehirt\tTHEIR
          eirs\tRISE
          adn\tand
          _deeelmnoptv	DEVELOPMENT_
        `,
        `
          by\tBy
          mrs\tMrs
          ceghinort\tCREIGHTON
          ervy\tVery
          eegiilnnrstty\tinterestingly
          deno\tdone
          ist\tIts
          elsty\tstyle
          is\tis
          eilmps\tsimple
        `,
        `
          cdeirt\tdirect
          acdeehknnuy\tunhackneyed
          adn\tand
          dhlosu\tshould
          dfin\tfind
          aaceiinopprt\tappreciation
          eehrw\twhere
          a\ta
          emor\tmore
        `,
        `
          eeflnrtvy\tfervently
          iopsu\tpious
          elsty\tstyle
          fo\tof
          giinrtw\twriting
          eelprs\trepels
          dehimostt\tMethodist
          _cdeeorrr	Recorder_
        `,
        `
          68\t68
          aaceimoprtv\tCOMPARATIVE
          _egiilnor	RELIGION_
        `,
        `
          by\tBy
          fopr\tProf
          j\tJ
          eilnst\tESTLIN
          aceenprrt\tCARPENTER
          diltt\tDLitt
          aciilnppr\tPrincipal
          fo\tof
          aceehmnrst\tManchester
        `,
        `
          ceegllo\tCollege
          dfoorx\tOxford
          pstu\tPuts
          inot\tinto
          eht\tthe
          adeerrs\treader's
          adhn\thand
          a\ta
          aehltw\twealth
          fo\tof
          aegilnnr\tlearning
          adn\tand
        `,
        `
          ddeeeinnnpt\tindependent
          ghhottu\tthought
          achiinrst\tChristian
          _dlorw	World_
        `,
        `
          47\t74
          a\tA
          hiorsty\tHISTORY
          fo\tOF
          deefmor\tFREEDOM
          fo\tOF
          _ghhottu	THOUGHT_
        `,
        `
          by\tBy
          j\tJ
          b\tB
          bruy\tBURY
          diltt\tLittD
          dll\tLLD
          egirsu\tRegius
          efooprrss\tProfessor
          fo\tof
          demnor\tModern
          hiorsty\tHistory
          at\tat
        `,
        `
          abcdegimr\tCambridge
          a\tA
          eilltt\tlittle
          aceeeimprst\tmasterpiece
          chhiw\twhich
          eervy\tevery
          ghiiknnt\tthinking
          amn\tman
          illw\twill
        `,
        `
          ejnoy\tenjoy
          eht\tThe
          _beeorrsv	Observer_
        `,
        `
          48\t84
          aeeilrrttu\tLITERATURE
          fo\tOF
          eht\tTHE
          dlo\tOLD
          _aeemnsttt	TESTAMENT_
        `,
        `
          by\tBy
          fopr\tProf
          eeggor\tGEORGE
          emoor\tMOORE
          dd\tDD
          dll\tLLD
          fo\tof
          aadhrrv\tHarvard
          a\tA
          addeeilt\tdetailed
          aaeiimnnotx\texamination
        `,
        `
          fo\tof
          eht\tthe
          bkoos\tbooks
          fo\tof
          eht\tthe
          dlo\tOld
          aeemnsttt\tTestament
          in\tin
          eht\tthe
          ghilt\tlight
          fo\tof
          eht\tthe
          most\tmost
          ceenrt\trecent
        `,
        `
          aceehrrs\tresearch
        `,
        `
          09\t90
          eht\tTHE
          cchhru\tCHURCH
          fo\tOF
          _adeglnn	ENGLAND_
        `,
        `
          by\tBy
          acnno\tCanon
          e\tE
          w\tW
          anostw\tWATSON
          egirsu\tRegius
          efooprrss\tProfessor
          fo\tof
          aaccceeiillsst\tEcclesiastical
          hiorsty\tHistory
          at\tat
        `,
        `
          dfoorx\tOxford
        `,
        `
          49\t94
          egiilorsu\tRELIGIOUS
          deeelmnoptv\tDEVELOPMENT
          beeentw\tBETWEEN
          eht\tTHE
          dlo\tOLD
          adn\tAND
          enw\tNEW
          _aeemnssttt	TESTAMENTS_
        `,
        `
          by\tBy
          acnno\tCanon
          r\tR
          h\tH
          acehlrs\tCHARLES
          dd\tDD
          diltt\tDLitt
        `,
        `
          acilos\tSocial
          _cceeins	Science_
        `,
        `
          1\t1
          _aaeilmnprt	PARLIAMENT_
        `,
        `
          ist\tIts
          hiorsty\tHistory
          ciinnoostttu\tConstitution
          adn\tand
          acceiprt\tPractice
          by\tBy
          irs\tSir
          acenortuy\tCOURTENAY
          p\tP
          beilrt\tILBERT
        `,
        `
          bcg\tGCB
          ciks\tKCSI
          ceklr\tClerk
          fo\tof
          eht\tthe
          ehosu\tHouse
          fo\tof
          cmmnoos\tCommons
          eht\tThe
          best\tbest
          bkoo\tbook
          no\ton
          eht\tthe
        `,
        `
          hiorsty\thistory
          adn\tand
          acceiprt\tpractice
          fo\tof
          eht\tthe
          ehosu\tHouse
          fo\tof
          cmmnoos\tCommons
          ceins\tsince
          abeghost\tBagehot's
        `,
        `
          ciinnoostttu\t'Constitution'
          ehikorrsy\tYorkshire
          _opst	Post_
        `,
        `
          5\t5
          eht\tTHE
          ckost\tSTOCK
          _aceeghnx	EXCHANGE_
        `,
        `
          by\tBy
          f\tF
          w\tW
          hirst\tHIRST
          deiort\tEditor
          fo\tof
          eht\tThe
          ceimnoost\tEconomist
          ot\tTo
          an\tan
          aacfiilnnnu\tunfinancial
          dimn\tmind
        `,
        `
          mstu\tmust
          be\tbe
          a\ta
          aeeilnortv\trevelation
          eht\tThe
          bkoo\tbook
          is\tis
          as\tas
          acelr\tclear
          gioorsuv\tvigorous
          adn\tand
          aens\tsane
          as\tas
        `,
        `
          abeghost\tBagehot's
          abdlmor\t'Lombard
          eerstt\tStreet'
          ahnt\tthan
          chhiw\twhich
          eehrt\tthere
          is\tis
          no\tno
          eghhir\thigher
        `,
        `
          ceilmmnopt\tcompliment
          gimnnor\tMorning
          _adeelr	Leader_
        `,
        `
          6\t6
          hiirs\tIRISH
          _aaiilnnotty	NATIONALITY_
        `,
        `
          by\tBy
          mrs\tMrs
          j\tJ
          r\tR
          eegnr\tGREEN
          as\tAs
          ggilnow\tglowing
          as\tas
          it\tit
          is\tis
          adeelnr\tlearned
          no\tNo
          bkoo\tbook
          cdlou\tcould
          be\tbe
        `,
        `
          emor\tmore
          eilmty\ttimely
          adily\tDaily
          _ensw	News_
        `,
        `
          01\t10
          eht\tTHE
          aciilosst\tSOCIALIST
          _eemmnotv	MOVEMENT_
        `,
        `
          by\tBy
          j\tJ
          aamrsy\tRAMSAY
          aacddlmno\tMACDONALD
          mp\tMP
          aabdilmry\tAdmirably
          aaddept\tadapted
          for\tfor
          eht\tthe
          eopprsu\tpurpose
          fo\tof
        `,
        `
          eiinoopstx\texposition
          eht\tThe
          _eimst	Times_
        `,
        `
          11\t11
          _aceimnorsstv	CONSERVATISM_
        `,
        `
          by\tBy
          dlor\tLORD
          ghhu\tHUGH
          cceil\tCECIL
          am\tMA
          mp\tMP
          eno\tOne
          fo\tof
          ehost\tthose
          aegrt\tgreat
          eilltt\tlittle
          bkoos\tbooks
          chhiw\twhich
        `,
        `
          delmos\tseldom
          aaeppr\tappear
          emor\tmore
          ahnt\tthan
          ceno\tonce
          in\tin
          a\ta
          aeeginnort\tgeneration
          gimnnor\tMorning
          _opst	Post_
        `,
        `
          16\t16
          eht\tTHE
          cceeins\tSCIENCE
          fo\tOF
          _aehltw	WEALTH_
        `,
        `
          by\tBy
          j\tJ
          a\tA
          bhnoos\tHOBSON
          am\tMA
          mr\tMr
          j\tJ
          a\tA
          bhnoos\tHobson
          dhlos\tholds
          an\tan
          einquu\tunique
          iinoopst\tposition
          agmno\tamong
        `,
        `
          giilnv\tliving
          ceimnoosst\teconomists
          agiilnor\tOriginal
          aabeelnors\treasonable
          adn\tand
          agiiillmnntu\tilluminating
          eht\tThe
        `,
        `
          ainnot\tNation
        `,
        `
          12\t21
          _abeiillmrs	LIBERALISM_
        `,
        `
          by\tBy
          l\tL
          t\tT
          behhoosu\tHOBHOUSE
          am\tMA
          efooprrss\tProfessor
          fo\tof
          cgilooosy\tSociology
          in\tin
          eht\tthe
          eiinrstuvy\tUniversity
          fo\tof
        `,
        `
          dlnnoo\tLondon
          a\tA
          bkoo\tbook
          fo\tof
          aerr\trare
          ailqtuy\tquality
          ew\tWe
          aehv\thave
          ghinnot\tnothing
          btu\tbut
          aeiprs\tpraise
          for\tfor
          eht\tthe
        `,
        `
          adipr\trapid
          adn\tand
          aelmrsty\tmasterly
          aeimmrssu\tsummaries
          fo\tof
          eht\tthe
          aegmnrstu\targuments
          fmor\tfrom
          first\tfirst
          ceiilnpprs\tprinciples
        `,
        `
          chhiw\twhich
          fmor\tform
          a\ta
          aeglr\tlarge
          aprt\tpart
          fo\tof
          hist\tthis
          bkoo\tbook
          eeimnrssttw\tWestminster
          _aeegttz	Gazette_
        `,
        `
          24\t24
          eht\tTHE
          eilnootuv\tEVOLUTION
          fo\tOF
          _dinrstuy	INDUSTRY_
        `,
        `
          by\tBy
          d\tD
          h\tH
          aceggmorr\tMACGREGOR
          am\tMA
          efooprrss\tProfessor
          fo\tof
          aciillopt\tPolitical
          cemnooy\tEconomy
          in\tin
          eht\tthe
        `,
        `
          eiinrstuvy\tUniversity
          fo\tof
          deels\tLeeds
          a\tA
          elmouv\tvolume
          os\tso
          aadeiinopssst\tdispassionate
          in\tin
          emrst\tterms
          amy\tmay
          be\tbe
          ader\tread
          hitw\twith
        `,
        `
          fioprt\tprofit
          by\tby
          all\tall
          deeeinrstt\tinterested
          in\tin
          eht\tthe
          eenprst\tpresent
          aestt\tstate
          fo\tof
          enrstu\tunrest
          abdeeenr\tAberdeen
        `,
        `
          ajlnoru\tJournal
        `,
        `
          26\t26
          _acegilrrtuu	AGRICULTURE_
        `,
        `
          by\tBy
          fopr\tProf
          w\tW
          eeillmorsv\tSOMERVILLE
          fls\tFLS
          it\tIt
          aekms\tmakes
          eht\tthe
          elrsstu\tresults
          fo\tof
          aabloorrty\tlaboratory
          korw\twork
        `,
        `
          at\tat
          eht\tthe
          eiinrstuvy\tUniversity
          abcceeilss\taccessible
          ot\tto
          eht\tthe
          aaccilprt\tpractical
          aefmrr\tfarmer
          _aaeehmntu	Athenaeum_
        `,
        `
          03\t30
          eeelmnst\tELEMENTS
          fo\tOF
          eghilns\tENGLISH
          _alw	LAW_
        `,
        `
          by\tBy
          w\tW
          m\tM
          adeglrt\tGELDART
          am\tMA
          bcl\tBCL
          aeiinnrv\tVinerian
          efooprrss\tProfessor
          fo\tof
          eghilns\tEnglish
          alw\tLaw
          at\tat
        `,
        `
          dfoorx\tOxford
          acinnost\tContains
          a\ta
          ervy\tvery
          acelr\tclear
          accnotu\taccount
          fo\tof
          eht\tthe
          aeeelmnrty\telementary
          ceiilnpprs\tprinciples
        `,
        `
          degilnnruy\tunderlying
          eht\tthe
          elrsu\trules
          fo\tof
          eghilns\tEnglish
          alw\tLaw
          cosst\tScots
          alw\tLaw
          _eimst	Times_
        `,
        `
          38\t38
          eht\tTHE
          chloos\tSCHOOL
          an\tAn
          cdiinnoorttu\tIntroduction
          ot\tto
          eht\tthe
          dstuy\tStudy
          fo\tof
          _acdeinotu	Education_
        `,
        `
          by\tBy
          j\tJ
          j\tJ
          adfilny\tFINDLAY
          am\tMA
          dhp\tPhD
          efooprrss\tProfessor
          fo\tof
          acdeinotu\tEducation
          in\tin
          aceehmnrst\tManchester
        `,
        `
          eiinrstuvy\tUniversity
          an\tAn
          aagilmnyz\tamazingly
          ceeehimnoprsv\tcomprehensive
          elmouv\tvolume
          it\tIt
          is\tis
          a\ta
          aabeeklmrr\tremarkable
        `,
        `
          aceefmnoprr\tperformance
          ddeghiiinsstu\tdistinguished
          in\tin
          ist\tits
          ciprs\tcrisp
          giiknrst\tstriking
          aeghlooprsy\tphraseology
          as\tas
          ellw\twell
        `,
        `
          as\tas
          ist\tits
          ceeiilnnsssuv\tinclusiveness
          fo\tof
          abceejmrstttu\tsubject-matter
          gimnnor\tMorning
          _opst	Post_
        `,
        `
          59\t59
          eeelmnst\tELEMENTS
          fo\tOF
          aciillopt\tPOLITICAL
          _cemnooy	ECONOMY_
        `,
        `
          by\tBy
          s\tS
          j\tJ
          aachmnp\tCHAPMAN
          am\tMA
          efooprrss\tProfessor
          fo\tof
          aciillopt\tPolitical
          cemnooy\tEconomy
          in\tin
          aceehmnrst\tManchester
        `,
        `
          eiinrstuvy\tUniversity
          ist\tIts
          aceimnoprt\timportance
          is\tis
          not\tnot
          ot\tto
          be\tbe
          adeemrsu\tmeasured
          by\tby
          ist\tits
          ceipr\tprice
        `,
        `
          abblopry\tProbably
          eht\tthe
          best\tbest
          ceenrt\trecent
          acciilrt\tcritical
          eiinoopstx\texposition
          fo\tof
          eht\tthe
          aaacillnty\tanalytical
          dehmot\tmethod
        `,
        `
          in\tin
          cceimnoo\teconomic
          cceeins\tscience
          agglosw\tGlasgow
          _adehlr	Herald_
        `,
        `
          69\t69
          eht\tTHE
          _aeenpprsw	NEWSPAPER_
        `,
        `
          by\tBy
          g\tG
          beinny\tBINNEY
          bbdeeil\tDIBBLEE
          am\tMA
          adeillrsttu\tIllustrated
          eht\tThe
          best\tbest
          accnotu\taccount
          aenttx\textant
          fo\tof
        `,
        `
          eht\tthe
          aagiinnoorst\torganisation
          fo\tof
          eht\tthe
          aeenpprsw\tnewspaper
          eprss\tpress
          at\tat
          ehmo\thome
          adn\tand
          aabdor\tabroad
        `,
        `
          77\t77
          eehllsy\tSHELLEY
          dginow\tGODWIN
          adn\tAND
          ehirt\tTHEIR
          _cceilr	CIRCLE_
        `,
        `
          by\tBy
          h\tH
          n\tN
          abdfilorrs\tBRAILSFORD
          am\tMA
          mr\tMr
          abdfilorrs\tBrailsford
          ceehksst\tsketches
          diilvvy\tvividly
          eht\tthe
        `,
        `
          ceefilnnu\tinfluence
          fo\tof
          eht\tthe
          cefhnr\tFrench
          eilnoortuv\tRevolution
          no\ton
          eehllssy\tShelley's
          adn\tand
          dginosw\tGodwin's
          adeglnn\tEngland
        `,
        `
          adn\tand
          eht\tthe
          achmr\tcharm
          adn\tand
          eghnrstt\tstrength
          fo\tof
          his\this
          elsty\tstyle
          aekm\tmake
          his\this
          bkoo\tbook
          an\tan
          acehinttu\tauthentic
        `,
        `
          bciinnoorttu\tcontribution
          ot\tto
          aeeilrrttu\tliterature
          eht\tThe
          _abkmnoo	Bookman_
        `,
        `
          08\t80
          acehinopprrst\tCO-PARTNERSHIP
          adn\tAND
          _afghiinoprrst	PROFIT-SHARING_
        `,
        `
          by\tBy
          aeinnru\tANEURIN
          aiillmsw\tWILLIAMS
          am\tMA
          a\tA
          cdiijosuu\tjudicious
          btu\tbut
          acehiinssttu\tenthusiastic
          hiorsty\thistory
          hitw\twith
          chmu\tmuch
        `,
        `
          eegiinnrstt\tinteresting
          aceilnopstu\tspeculation
          no\ton
          eht\tthe
          efrtuu\tfuture
          fo\tof
          acehinopprrst\tCo-partnership
          achiinrst\tChristian
        `,
        `
          dlorw\tWorld
        `,
        `
          18\t81
          belmoprs\tPROBLEMS
          fo\tOF
          aegillv\tVILLAGE
          _efil	LIFE_
        `,
        `
          by\tBy
          e\tE
          n\tN
          beenntt\tBENNETT
          am\tMA
          cdeissssu\tDiscusses
          eht\tthe
          adegiln\tleading
          acepsst\taspects
          fo\tof
          eht\tthe
          bhiirst\tBritish
        `,
        `
          adln\tland
          belmopr\tproblem
          cdgiilnnu\tincluding
          ghinosu\thousing
          allms\tsmall
          dghilnos\tholdings
          alrru\trural
          cdeirt\tcredit
          adn\tand
          eht\tthe
        `,
        `
          iimmmnu\tminimum
          aegw\twage
        `,
        `
          38\t83
          ceemmnnooss\tCOMMON-SENSE
          in\tIN
          _alw	LAW_
        `,
        `
          by\tBy
          fopr\tProf
          p\tP
          adffginoorv\tVINOGRADOFF
          cdl\tDCL
        `,
        `
          58\t85
          _eelmmnnoptuy	UNEMPLOYMENT_
        `,
        `
          by\tBy
          fopr\tProf
          a\tA
          c\tC
          giopu\tPIGOU
          am\tMA
        `,
        `
          69\t96
          aciillopt\tPOLITICAL
          ghhottu\tTHOUGHT
          in\tIN
          adeglnn\tENGLAND
          fmor\tFROM
          abcno\tBACON
          ot\tTO
          _aafhilx	HALIFAX_
        `,
        `
          by\tBy
          g\tG
          p\tP
          cghoo\tGOOCH
          am\tMA
        `,
        `
          in\tIN
          aaeinopprrt\tPREPARATION
        `,
        `
          aceinnt\tANCIENT
          _egpty	EGYPT_
          by\tBy
          f\tF
          ll\tLL
          ffghiirt\tGRIFFITH
          am\tMA
        `,
        `
          a\tA
          horst\tSHORT
          hiorsty\tHISTORY
          fo\tOF
          _eeopru	EUROPE_
          by\tBy
          beehrrt\tHERBERT
          efhirs\tFISHER
          dll\tLLD
        `,
        `
          eht\tTHE
          abeinntyz\tBYZANTINE
          _eeimpr	EMPIRE_
          by\tBy
          amnnor\tNORMAN
          h\tH
          abensy\tBAYNES
        `,
        `
          eht\tTHE
          _aefimnoorrt	REFORMATION_
          by\tBy
          deeinprst\tPresident
          adilnsy\tLINDSAY
          dll\tLLD
        `,
        `
          a\tA
          horst\tSHORT
          hiorsty\tHISTORY
          fo\tOF
          _airssu	RUSSIA_
          by\tBy
          fopr\tProf
          iklmoouvy\tMILYOUKOV
        `,
        `
          demnor\tMODERN
          _ekrtuy	TURKEY_
          by\tBy
          d\tD
          g\tG
          aghhort\tHOGARTH
          am\tMA
        `,
        `
          acefnr\tFRANCE
          fo\tOF
          _adoty	TO-DAY_
          by\tBy
          abelrt\tALBERT
          ahmost\tTHOMAS
        `,
        `
          hiorsty\tHISTORY
          adn\tAND
          aeeilrrttu\tLITERATURE
          fo\tOF
          _ainps	SPAIN_
          by\tBy
          j\tJ
          aceefiikllmrtuyz\tFITZMAURICE-KELLY
          abf\tFBA
        `,
        `
          diltt\tLittD
        `,
        `
          ailnt\tLATIN
          _aeeilrrttu	LITERATURE_
          by\tBy
          fopr\tProf
          j\tJ
          s\tS
          ehiillmopr\tPHILLIMORE
        `,
        `
          aaiilnt\tITALIAN
          art\tART
          fo\tOF
          eht\tTHE
          _aaceeinnrss	RENAISSANCE_
          by\tBy
          egorr\tROGER
          e\tE
          fry\tFRY
        `,
        `
          aeilrrty\tLITERARY
          _aestt	TASTE_
          by\tBy
          ahmost\tTHOMAS
          bcceemos\tSECCOMBE
        `,
        `
          aaacdiinnnsv\tSCANDINAVIAN
          hiorsty\tHISTORY
          _aeeilrrttu	LITERATURE_
          by\tBy
          t\tT
          c\tC
          nosw\tSNOW
        `,
        `
          eht\tTHE
          aeilmnr\tMINERAL
          _dlorw	WORLD_
          by\tBy
          irs\tSir
          t\tT
          h\tH
          adhllno\tHOLLAND
          ceik\tKCIE
          cds\tDSc
        `,
        `
          a\tA
          hiorsty\tHISTORY
          fo\tOF
          _hhilooppsy	PHILOSOPHY_
          by\tBy
          ceelmnt\tCLEMENT
          bbew\tWEBB
          am\tMA
        `,
        `
          aciillopt\tPOLITICAL
          ghhottu\tTHOUGHT
          in\tIN
          adeglnn\tENGLAND
          fmor\tFrom
          abehmnt\tBentham
          ot\tto
          j\tJ
          s\tS
          _illm	Mill_
          by\tBy
          fopr\tProf
        `,
        `
          w\tW
          l\tL
          addinosv\tDAVIDSON
        `,
        `
          aciillopt\tPOLITICAL
          ghhottu\tTHOUGHT
          in\tIN
          adeglnn\tENGLAND
          fmor\tFrom
          beehrrt\tHerbert
          ceenprs\tSpencer
          ot\tto
          _adoty	To-day_
          by\tBy
        `,
        `
          eenrst\tERNEST
          abekrr\tBARKER
          am\tMA
        `,
        `
          eht\tTHE
          aciilmnr\tCRIMINAL
          adn\tAND
          eht\tTHE
          _cimmnotuy	COMMUNITY_
          by\tBy
          cinostuv\tViscount
          st\tST
          cersy\tCYRES
        `,
        `
          eht\tTHE
          ciilv\tCIVIL
          _ceeirsv	SERVICE_
          by\tBy
          aaghmr\tGRAHAM
          aallsw\tWALLAS
          am\tMA
        `,
        `
          eht\tTHE
          acilos\tSOCIAL
          _eeelmnsttt	SETTLEMENT_
          by\tBy
          aejn\tJANE
          aaddms\tADDAMS
          adn\tand
          r\tR
          a\tA
          doosw\tWOODS
        `,
        `
          aegrt\tGREAT
          _eiinnnostv	INVENTIONS_
          by\tBy
          fopr\tProf
          j\tJ
          l\tL
          emrsy\tMYRES
          am\tMA
          afs\tFSA
        `,
        `
          notw\tTOWN
          _agilnnnp	PLANNING_
          by\tBy
          admnory\tRAYMOND
          innuw\tUNWIN
        `,
        `
          dlnnoo\tLondon
          aiillmsw\tWILLIAMS
          adn\tAND
          aegnort\tNORGATE
        `,
        `
          adn\tAnd
          fo\tof
          all\tall
          bhkooopss\tBookshops
          adn\tand
          _abklloosst	Bookstalls_
        `,
        `
          den\tEnd
          fo\tof
          eht\tthe
          cejoprt\tProject
          beeggnrtu\tGutenberg
          bekoo\tEBook
          fo\tof
          eht\tThe
          ehmo\tHome
          eiinrstuvy\tUniversity
          abilrry\tLibrary
          aaceglotu\tcatalogue
        `,
        `
          111459\t191415
          by\tby
          aiillmsw\tWilliams
          adn\tand
          aegnort\tNorgate
          behilprssu\tPublishers
        `,
        `
          den\tEND
          fo\tOF
          hist\tTHIS
          cejoprt\tPROJECT
          beeggnrtu\tGUTENBERG
          bekoo\tEBOOK
          ehmo\tHOME
          eiinrstuvy\tUNIVERSITY
          abilrry\tLIBRARY
          aaceglotu\tCATALOGUE
        `,
        `
          hist\tThis
          efil\tfile
          dhlosu\tshould
          be\tbe
          ademn\tnamed
          00336ttx\t33006txt
          or\tor
          00336ipz\t33006zip
        `,
        `
          hist\tThis
          adn\tand
          all\tall
          aacdeiosst\tassociated
          efils\tfiles
          fo\tof
          aiorsuv\tvarious
          afmorst\tformats
          illw\twill
          be\tbe
          dfnou\tfound
          in\tin
        `,
        `
          000033336beeggghnoprrtttuwww\thttpwwwgutenbergorg330033006
        `,
        `
          cddeopru\tProduced
          by\tby
          abinr\tBrian
          efloy\tFoley
          ams\tSam
          w\tW
          adn\tand
          eht\tthe
          eilnno\tOnline
          bddeiirsttu\tDistributed
        `,
        `
          adefginooprr\tProofreading
          aemt\tTeam
          at\tat
          deghnppptttwww\thttpwwwpgdpnet
          hist\tThis
          efil\tfile
          asw\twas
        `,
        `
          cddeopru\tproduced
          fmor\tfrom
          aegims\timages
          eeglnorsuy\tgenerously
          adem\tmade
          aaabeillv\tavailable
          by\tby
          eht\tThe
        `,
        `
          eeinnrtt\tInternet
          aaaaccdehiinnrv\tArchiveCanadian
          abeiilrrs\tLibraries
        `,
        `
          addeptu\tUpdated
          deiinost\teditions
          illw\twill
          aceelpr\treplace
          eht\tthe
          eioprsuv\tprevious
          eno\tone
          eht\tthe
          dlo\told
          deiinost\teditions
        `,
        `
          illw\twill
          be\tbe
          adeemnr\trenamed
        `,
        `
          aceginrt\tCreating
          eht\tthe
          korsw\tworks
          fmor\tfrom
          bcilpu\tpublic
          adimno\tdomain
          inprt\tprint
          deiinost\teditions
          aemns\tmeans
          ahtt\tthat
          no\tno
        `,
        `
          eno\tone
          nosw\towns
          a\ta
          deintu\tUnited
          aesstt\tStates
          cghioprty\tcopyright
          in\tin
          eehst\tthese
          korsw\tworks
          os\tso
          eht\tthe
          adfinnootu\tFoundation
        `,
        `
          adn\tand
          ouy\tyou
          acn\tcan
          copy\tcopy
          adn\tand
          bdeiirsttu\tdistribute
          it\tit
          in\tin
          eht\tthe
          deintu\tUnited
          aesstt\tStates
          hiottuw\twithout
        `,
        `
          eiimnoprss\tpermission
          adn\tand
          hiottuw\twithout
          aginpy\tpaying
          cghioprty\tcopyright
          aeilorsty\troyalties
          aceilps\tSpecial
          elrsu\trules
        `,
        `
          est\tset
          fhort\tforth
          in\tin
          eht\tthe
          aeeglnr\tGeneral
          emrst\tTerms
          fo\tof
          esu\tUse
          aprt\tpart
          fo\tof
          hist\tthis
          ceeilns\tlicense
          alppy\tapply
          ot\tto
        `,
        `
          cginopy\tcopying
          adn\tand
          bdgiiinrsttu\tdistributing
          cejoprt\tProject
          beeggmnrttu\tGutenberg-tm
          cceeilnort\telectronic
          korsw\tworks
          ot\tto
        `,
        `
          ceoprtt\tprotect
          eht\tthe
          cejoprt\tPROJECT
          beeggmnrttu\tGUTENBERG-tm
          ccenopt\tconcept
          adn\tand
          aadekmrrt\ttrademark
          cejoprt\tProject
        `,
        `
          beeggnrtu\tGutenberg
          is\tis
          a\ta
          deeegirrst\tregistered
          aadekmrrt\ttrademark
          adn\tand
          amy\tmay
          not\tnot
          be\tbe
          desu\tused
          fi\tif
          ouy\tyou
        `,
        `
          aceghr\tcharge
          for\tfor
          eht\tthe
          bekoos\teBooks
          elnssu\tunless
          ouy\tyou
          ceeeirv\treceive
          ccefiips\tspecific
          eiimnoprss\tpermission
          fi\tIf
          ouy\tyou
        `,
        `
          do\tdo
          not\tnot
          aceghr\tcharge
          aghinnty\tanything
          for\tfor
          ceiops\tcopies
          fo\tof
          hist\tthis
          bekoo\teBook
          cgilmnopy\tcomplying
          hitw\twith
          eht\tthe
        `,
        `
          elrsu\trules
          is\tis
          ervy\tvery
          aesy\teasy
          ouy\tYou
          amy\tmay
          esu\tuse
          hist\tthis
          bekoo\teBook
          for\tfor
          aelnry\tnearly
          any\tany
          eopprsu\tpurpose
        `,
        `
          chsu\tsuch
          as\tas
          aceinort\tcreation
          fo\tof
          adeeiirtvv\tderivative
          korsw\tworks
          eoprrst\treports
          aceefmnoprrs\tperformances
          adn\tand
        `,
        `
          aceehrrs\tresearch
          ehty\tThey
          amy\tmay
          be\tbe
          ddefiimo\tmodified
          adn\tand
          deinprt\tprinted
          adn\tand
          eginv\tgiven
          aawy\taway
          ouy\tyou
          amy\tmay
          do\tdo
        `,
        `
          aaccillprty\tpractically
          aghinnty\tANYTHING
          hitw\twith
          bcilpu\tpublic
          adimno\tdomain
          bekoos\teBooks
          bdeiiinorrsttu\tRedistribution
          is\tis
        `,
        `
          bcejstu\tsubject
          ot\tto
          eht\tthe
          aadekmrrt\ttrademark
          ceeilns\tlicense
          aceeillpsy\tespecially
          acceilmmor\tcommercial
        `,
        `
          bdeiiinorrsttu\tredistribution
        `,
        `
          arstt\tSTART
          fllu\tFULL
          ceeilns\tLICENSE
        `,
        `
          eht\tTHE
          fllu\tFULL
          cejoprt\tPROJECT
          beeggnrtu\tGUTENBERG
          ceeilns\tLICENSE
        `,
        `
          aeelps\tPLEASE
          ader\tREAD
          hist\tTHIS
          beefor\tBEFORE
          ouy\tYOU
          bdeiirsttu\tDISTRIBUTE
          or\tOR
          esu\tUSE
          hist\tTHIS
          korw\tWORK
        `,
        `
          ot\tTo
          ceoprtt\tprotect
          eht\tthe
          cejoprt\tProject
          beeggmnrttu\tGutenberg-tm
          iimnoss\tmission
          fo\tof
          gimnooprt\tpromoting
          eht\tthe
          eefr\tfree
        `,
        `
          bdiiinorsttu\tdistribution
          fo\tof
          cceeilnort\telectronic
          korsw\tworks
          by\tby
          ginsu\tusing
          or\tor
          bdgiiinrsttu\tdistributing
          hist\tthis
          korw\twork
        `,
        `
          or\tor
          any\tany
          ehort\tother
          korw\twork
          aacdeiosst\tassociated
          in\tin
          any\tany
          awy\tway
          hitw\twith
          eht\tthe
          aehprs\tphrase
          cejoprt\tProject
        `,
        `
          beeggnrtu\tGutenberg
          ouy\tyou
          aeegr\tagree
          ot\tto
          clmopy\tcomply
          hitw\twith
          all\tall
          eht\tthe
          emrst\tterms
          fo\tof
          eht\tthe
          fllu\tFull
          cejoprt\tProject
        `,
        `
          beeggmnrttu\tGutenberg-tm
          ceeilns\tLicense
          aaabeillv\tavailable
          hitw\twith
          hist\tthis
          efil\tfile
          or\tor
          eilnno\tonline
          at\tat
        `,
        `
          bceeeeegghilnnnprsttttu\thttpgutenbergnetlicense
        `,
        `
          ceinost\tSection
          1\t1
          aeeglnr\tGeneral
          emrst\tTerms
          fo\tof
          esu\tUse
          adn\tand
          bdegiiinrrsttu\tRedistributing
          cejoprt\tProject
          beeggmnrttu\tGutenberg-tm
        `,
        `
          cceeilnort\telectronic
          korsw\tworks
        `,
        `
          1a\t1A
          by\tBy
          adeginr\treading
          or\tor
          ginsu\tusing
          any\tany
          aprt\tpart
          fo\tof
          hist\tthis
          cejoprt\tProject
          beeggmnrttu\tGutenberg-tm
        `,
        `
          cceeilnort\telectronic
          korw\twork
          ouy\tyou
          acdeiint\tindicate
          ahtt\tthat
          ouy\tyou
          aehv\thave
          ader\tread
          addennrstu\tunderstand
          aeegr\tagree
          ot\tto
        `,
        `
          adn\tand
          accept\taccept
          all\tall
          eht\tthe
          emrst\tterms
          fo\tof
          hist\tthis
          ceeilns\tlicense
          adn\tand
          aceeilllnttu\tintellectual
          eopprrty\tproperty
        `,
        `
          aacdeghikmoprrrtty\ttrademarkcopyright
          aeeegmnrt\tagreement
          fi\tIf
          ouy\tyou
          do\tdo
          not\tnot
          aeegr\tagree
          ot\tto
          abdei\tabide
          by\tby
          all\tall
        `,
        `
          eht\tthe
          emrst\tterms
          fo\tof
          hist\tthis
          aeeegmnrt\tagreement
          ouy\tyou
          mstu\tmust
          acees\tcease
          ginsu\tusing
          adn\tand
          enrrtu\treturn
          or\tor
          deorsty\tdestroy
        `,
        `
          all\tall
          ceiops\tcopies
          fo\tof
          cejoprt\tProject
          beeggmnrttu\tGutenberg-tm
          cceeilnort\telectronic
          korsw\tworks
          in\tin
          oruy\tyour
          einoopssss\tpossession
        `,
        `
          fi\tIf
          ouy\tyou
          adip\tpaid
          a\ta
          eef\tfee
          for\tfor
          abgiinnot\tobtaining
          a\ta
          copy\tcopy
          fo\tof
          or\tor
          access\taccess
          ot\tto
          a\ta
          cejoprt\tProject
        `,
        `
          beeggmnrttu\tGutenberg-tm
          cceeilnort\telectronic
          korw\twork
          adn\tand
          ouy\tyou
          do\tdo
          not\tnot
          aeegr\tagree
          ot\tto
          be\tbe
          bdnou\tbound
          by\tby
          eht\tthe
        `,
        `
          emrst\tterms
          fo\tof
          hist\tthis
          aeeegmnrt\tagreement
          ouy\tyou
          amy\tmay
          abinot\tobtain
          a\ta
          defnru\trefund
          fmor\tfrom
          eht\tthe
          enoprs\tperson
          or\tor
        `,
        `
          eintty\tentity
          ot\tto
          hmow\twhom
          ouy\tyou
          adip\tpaid
          eht\tthe
          eef\tfee
          as\tas
          est\tset
          fhort\tforth
          in\tin
          aaaghpprr\tparagraph
          18e\t1E8
        `,
        `
          1b\t1B
          cejoprt\tProject
          beeggnrtu\tGutenberg
          is\tis
          a\ta
          deeegirrst\tregistered
          aadekmrrt\ttrademark
          it\tIt
          amy\tmay
          lnoy\tonly
          be\tbe
        `,
        `
          desu\tused
          no\ton
          or\tor
          aacdeiosst\tassociated
          in\tin
          any\tany
          awy\tway
          hitw\twith
          an\tan
          cceeilnort\telectronic
          korw\twork
          by\tby
          eelopp\tpeople
          how\twho
        `,
        `
          aeegr\tagree
          ot\tto
          be\tbe
          bdnou\tbound
          by\tby
          eht\tthe
          emrst\tterms
          fo\tof
          hist\tthis
          aeeegmnrt\tagreement
          eehrt\tThere
          aer\tare
          a\ta
          efw\tfew
        `,
        `
          ghinst\tthings
          ahtt\tthat
          ouy\tyou
          acn\tcan
          do\tdo
          hitw\twith
          most\tmost
          cejoprt\tProject
          beeggmnrttu\tGutenberg-tm
          cceeilnort\telectronic
          korsw\tworks
        `,
        `
          eenv\teven
          hiottuw\twithout
          cgilmnopy\tcomplying
          hitw\twith
          eht\tthe
          fllu\tfull
          emrst\tterms
          fo\tof
          hist\tthis
          aeeegmnrt\tagreement
          ees\tSee
        `,
        `
          aaaghpprr\tparagraph
          1c\t1C
          below\tbelow
          eehrt\tThere
          aer\tare
          a\ta
          lot\tlot
          fo\tof
          ghinst\tthings
          ouy\tyou
          acn\tcan
          do\tdo
          hitw\twith
          cejoprt\tProject
        `,
        `
          beeggmnrttu\tGutenberg-tm
          cceeilnort\telectronic
          korsw\tworks
          fi\tif
          ouy\tyou
          flloow\tfollow
          eht\tthe
          emrst\tterms
          fo\tof
          hist\tthis
          aeeegmnrt\tagreement
        `,
        `
          adn\tand
          ehlp\thelp
          eeeprrsv\tpreserve
          eefr\tfree
          efrtuu\tfuture
          access\taccess
          ot\tto
          cejoprt\tProject
          beeggmnrttu\tGutenberg-tm
          cceeilnort\telectronic
        `,
        `
          korsw\tworks
          ees\tSee
          aaaghpprr\tparagraph
          1e\t1E
          below\tbelow
        `,
        `
          1c\t1C
          eht\tThe
          cejoprt\tProject
          beeggnrtu\tGutenberg
          aeilrrty\tLiterary
          acehirv\tArchive
          adfinnootu\tFoundation
          eht\tthe
          adfinnootu\tFoundation
        `,
        `
          or\tor
          afglp\tPGLAF
          nosw\towns
          a\ta
          aciilmnoopt\tcompilation
          cghioprty\tcopyright
          in\tin
          eht\tthe
          cceillnoot\tcollection
          fo\tof
          cejoprt\tProject
        `,
        `
          beeggmnrttu\tGutenberg-tm
          cceeilnort\telectronic
          korsw\tworks
          aelnry\tNearly
          all\tall
          eht\tthe
          addiiilnuv\tindividual
          korsw\tworks
          in\tin
          eht\tthe
        `,
        `
          cceillnoot\tcollection
          aer\tare
          in\tin
          eht\tthe
          bcilpu\tpublic
          adimno\tdomain
          in\tin
          eht\tthe
          deintu\tUnited
          aesstt\tStates
          fi\tIf
          an\tan
        `,
        `
          addiiilnuv\tindividual
          korw\twork
          is\tis
          in\tin
          eht\tthe
          bcilpu\tpublic
          adimno\tdomain
          in\tin
          eht\tthe
          deintu\tUnited
          aesstt\tStates
          adn\tand
          ouy\tyou
          aer\tare
        `,
        `
          acdelot\tlocated
          in\tin
          eht\tthe
          deintu\tUnited
          aesstt\tStates
          ew\twe
          do\tdo
          not\tnot
          acilm\tclaim
          a\ta
          ghirt\tright
          ot\tto
          eenprtv\tprevent
          ouy\tyou
          fmor\tfrom
        `,
        `
          cginopy\tcopying
          bdgiiinrsttu\tdistributing
          efgimnoprr\tperforming
          adgiilnpsy\tdisplaying
          or\tor
          aceginrt\tcreating
          adeeiirtvv\tderivative
        `,
        `
          korsw\tworks
          abdes\tbased
          no\ton
          eht\tthe
          korw\twork
          as\tas
          glno\tlong
          as\tas
          all\tall
          ceeeefnrrs\treferences
          ot\tto
          cejoprt\tProject
          beeggnrtu\tGutenberg
        `,
        `
          aer\tare
          deemorv\tremoved
          fo\tOf
          ceorsu\tcourse
          ew\twe
          ehop\thope
          ahtt\tthat
          ouy\tyou
          illw\twill
          opprstu\tsupport
          eht\tthe
          cejoprt\tProject
        `,
        `
          beeggmnrttu\tGutenberg-tm
          iimnoss\tmission
          fo\tof
          gimnooprt\tpromoting
          eefr\tfree
          access\taccess
          ot\tto
          cceeilnort\telectronic
          korsw\tworks
          by\tby
        `,
        `
          eeflry\tfreely
          aghinrs\tsharing
          cejoprt\tProject
          beeggmnrttu\tGutenberg-tm
          korsw\tworks
          in\tin
          acceilmnop\tcompliance
          hitw\twith
          eht\tthe
          emrst\tterms
          fo\tof
        `,
        `
          hist\tthis
          aeeegmnrt\tagreement
          for\tfor
          eegiknp\tkeeping
          eht\tthe
          cejoprt\tProject
          beeggmnrttu\tGutenberg-tm
          aemn\tname
          aacdeiosst\tassociated
          hitw\twith
        `,
        `
          eht\tthe
          korw\twork
          ouy\tYou
          acn\tcan
          aeilsy\teasily
          clmopy\tcomply
          hitw\twith
          eht\tthe
          emrst\tterms
          fo\tof
          hist\tthis
          aeeegmnrt\tagreement
          by\tby
        `,
        `
          eegiknp\tkeeping
          hist\tthis
          korw\twork
          in\tin
          eht\tthe
          aems\tsame
          afmort\tformat
          hitw\twith
          ist\tits
          aacdehtt\tattached
          fllu\tfull
          cejoprt\tProject
        `,
        `
          beeggmnrttu\tGutenberg-tm
          ceeilns\tLicense
          ehnw\twhen
          ouy\tyou
          aehrs\tshare
          it\tit
          hiottuw\twithout
          aceghr\tcharge
          hitw\twith
          ehorst\tothers
        `,
        `
          1d\t1D
          eht\tThe
          cghioprty\tcopyright
          alsw\tlaws
          fo\tof
          eht\tthe
          acelp\tplace
          eehrw\twhere
          ouy\tyou
          aer\tare
          acdelot\tlocated
          alos\talso
          egnorv\tgovern
        `,
        `
          ahtw\twhat
          ouy\tyou
          acn\tcan
          do\tdo
          hitw\twith
          hist\tthis
          korw\twork
          cghioprty\tCopyright
          alsw\tlaws
          in\tin
          most\tmost
          ceinorstu\tcountries
          aer\tare
          in\tin
        `,
        `
          a\ta
          acnnostt\tconstant
          aestt\tstate
          fo\tof
          aceghn\tchange
          fi\tIf
          ouy\tyou
          aer\tare
          deiostu\toutside
          eht\tthe
          deintu\tUnited
          aesstt\tStates
          ccehk\tcheck
        `,
        `
          eht\tthe
          alsw\tlaws
          fo\tof
          oruy\tyour
          cnortuy\tcountry
          in\tin
          addiinot\taddition
          ot\tto
          eht\tthe
          emrst\tterms
          fo\tof
          hist\tthis
          aeeegmnrt\tagreement
        `,
        `
          beefor\tbefore
          addgilnnoow\tdownloading
          cginopy\tcopying
          adgiilnpsy\tdisplaying
          efgimnoprr\tperforming
          bdgiiinrsttu\tdistributing
          or\tor
        `,
        `
          aceginrt\tcreating
          adeeiirtvv\tderivative
          korsw\tworks
          abdes\tbased
          no\ton
          hist\tthis
          korw\twork
          or\tor
          any\tany
          ehort\tother
          cejoprt\tProject
        `,
        `
          beeggmnrttu\tGutenberg-tm
          korw\twork
          eht\tThe
          adfinnootu\tFoundation
          aekms\tmakes
          no\tno
          aeeeinnoprrsstt\trepresentations
          cceginnnor\tconcerning
        `,
        `
          eht\tthe
          cghioprty\tcopyright
          assttu\tstatus
          fo\tof
          any\tany
          korw\twork
          in\tin
          any\tany
          cnortuy\tcountry
          deiostu\toutside
          eht\tthe
          deintu\tUnited
        `,
        `
          aesstt\tStates
        `,
        `
          1e\t1E
          elnssu\tUnless
          ouy\tyou
          aehv\thave
          deemorv\tremoved
          all\tall
          ceeeefnrrs\treferences
          ot\tto
          cejoprt\tProject
          beeggnrtu\tGutenberg
        `,
        `
          11e\t1E1
          eht\tThe
          fgillnoow\tfollowing
          ceeennst\tsentence
          hitw\twith
          aceitv\tactive
          iklns\tlinks
          ot\tto
          or\tor
          ehort\tother
          adeeiimmt\timmediate
        `,
        `
          access\taccess
          ot\tto
          eht\tthe
          fllu\tfull
          cejoprt\tProject
          beeggmnrttu\tGutenberg-tm
          ceeilns\tLicense
          mstu\tmust
          aaeppr\tappear
          eilmnnoprty\tprominently
        `,
        `
          eeehnrvw\twhenever
          any\tany
          copy\tcopy
          fo\tof
          a\ta
          cejoprt\tProject
          beeggmnrttu\tGutenberg-tm
          korw\twork
          any\tany
          korw\twork
          no\ton
          chhiw\twhich
          eht\tthe
        `,
        `
          aehprs\tphrase
          cejoprt\tProject
          beeggnrtu\tGutenberg
          aaepprs\tappears
          or\tor
          hitw\twith
          chhiw\twhich
          eht\tthe
          aehprs\tphrase
          cejoprt\tProject
        `,
        `
          beeggnrtu\tGutenberg
          is\tis
          aacdeiosst\tassociated
          is\tis
          accdeess\taccessed
          addeilpsy\tdisplayed
          deefmoprr\tperformed
          deeivw\tviewed
        `,
        `
          cdeiop\tcopied
          or\tor
          bddeiirsttu\tdistributed
        `,
        `
          hist\tThis
          bekoo\teBook
          is\tis
          for\tfor
          eht\tthe
          esu\tuse
          fo\tof
          aennoy\tanyone
          aeehnrwy\tanywhere
          at\tat
          no\tno
          cost\tcost
          adn\tand
          hitw\twith
        `,
        `
          almost\talmost
          no\tno
          ceiinorrsstt\trestrictions
          aeehorstvw\twhatsoever
          ouy\tYou
          amy\tmay
          copy\tcopy
          it\tit
          egiv\tgive
          it\tit
          aawy\taway
          or\tor
        `,
        `
          eersu\tre-use
          it\tit
          denru\tunder
          eht\tthe
          emrst\tterms
          fo\tof
          eht\tthe
          cejoprt\tProject
          beeggnrtu\tGutenberg
          ceeilns\tLicense
          cddeilnu\tincluded
        `,
        `
          hitw\twith
          hist\tthis
          bekoo\teBook
          or\tor
          eilnno\tonline
          at\tat
          beeeggnnrttuwww\twwwgutenbergnet
        `,
        `
          12e\t1E2
          fi\tIf
          an\tan
          addiiilnuv\tindividual
          cejoprt\tProject
          beeggmnrttu\tGutenberg-tm
          cceeilnort\telectronic
          korw\twork
          is\tis
          ddeeirv\tderived
        `,
        `
          fmor\tfrom
          eht\tthe
          bcilpu\tpublic
          adimno\tdomain
          deos\tdoes
          not\tnot
          acinnot\tcontain
          a\ta
          ceinot\tnotice
          acdgiiinnt\tindicating
          ahtt\tthat
          it\tit
          is\tis
        `,
        `
          deopst\tposted
          hitw\twith
          eiimnoprss\tpermission
          fo\tof
          eht\tthe
          cghioprty\tcopyright
          dehlor\tholder
          eht\tthe
          korw\twork
          acn\tcan
          be\tbe
          cdeiop\tcopied
        `,
        `
          adn\tand
          bddeiirsttu\tdistributed
          ot\tto
          aennoy\tanyone
          in\tin
          eht\tthe
          deintu\tUnited
          aesstt\tStates
          hiottuw\twithout
          aginpy\tpaying
          any\tany
          eefs\tfees
        `,
        `
          or\tor
          aceghrs\tcharges
          fi\tIf
          ouy\tyou
          aer\tare
          bdegiiinrrsttu\tredistributing
          or\tor
          dgiinoprv\tproviding
          access\taccess
          ot\tto
          a\ta
          korw\twork
        `,
        `
          hitw\twith
          eht\tthe
          aehprs\tphrase
          cejoprt\tProject
          beeggnrtu\tGutenberg
          aacdeiosst\tassociated
          hitw\twith
          or\tor
          aaeginppr\tappearing
          no\ton
          eht\tthe
        `,
        `
          korw\twork
          ouy\tyou
          mstu\tmust
          clmopy\tcomply
          eehirt\teither
          hitw\twith
          eht\tthe
          eeeimnqrrstu\trequirements
          fo\tof
          aaaghpprrs\tparagraphs
          11e\t1E1
        `,
        `
          ghhortu\tthrough
          17e\t1E7
          or\tor
          abinot\tobtain
          eiimnoprss\tpermission
          for\tfor
          eht\tthe
          esu\tuse
          fo\tof
          eht\tthe
          korw\twork
          adn\tand
          eht\tthe
        `,
        `
          cejoprt\tProject
          beeggmnrttu\tGutenberg-tm
          aadekmrrt\ttrademark
          as\tas
          est\tset
          fhort\tforth
          in\tin
          aaaghpprrs\tparagraphs
          18e\t1E8
          or\tor
        `,
        `
          19e\t1E9
        `,
        `
          13e\t1E3
          fi\tIf
          an\tan
          addiiilnuv\tindividual
          cejoprt\tProject
          beeggmnrttu\tGutenberg-tm
          cceeilnort\telectronic
          korw\twork
          is\tis
          deopst\tposted
        `,
        `
          hitw\twith
          eht\tthe
          eiimnoprss\tpermission
          fo\tof
          eht\tthe
          cghioprty\tcopyright
          dehlor\tholder
          oruy\tyour
          esu\tuse
          adn\tand
          bdiiinorsttu\tdistribution
        `,
        `
          mstu\tmust
          clmopy\tcomply
          hitw\twith
          bhot\tboth
          aaaghpprrs\tparagraphs
          11e\t1E1
          ghhortu\tthrough
          17e\t1E7
          adn\tand
          any\tany
          aaddiilnot\tadditional
        `,
        `
          emrst\tterms
          deimops\timposed
          by\tby
          eht\tthe
          cghioprty\tcopyright
          dehlor\tholder
          aaddiilnot\tAdditional
          emrst\tterms
          illw\twill
          be\tbe
          deikln\tlinked
        `,
        `
          ot\tto
          eht\tthe
          cejoprt\tProject
          beeggmnrttu\tGutenberg-tm
          ceeilns\tLicense
          for\tfor
          all\tall
          korsw\tworks
          deopst\tposted
          hitw\twith
          eht\tthe
        `,
        `
          eiimnoprss\tpermission
          fo\tof
          eht\tthe
          cghioprty\tcopyright
          dehlor\tholder
          dfnou\tfound
          at\tat
          eht\tthe
          beggiinnn\tbeginning
          fo\tof
          hist\tthis
          korw\twork
        `,
        `
          14e\t1E4
          do\tDo
          not\tnot
          iklnnu\tunlink
          or\tor
          acdeht\tdetach
          or\tor
          eemorv\tremove
          eht\tthe
          fllu\tfull
          cejoprt\tProject
          beeggmnrttu\tGutenberg-tm
        `,
        `
          ceeilns\tLicense
          emrst\tterms
          fmor\tfrom
          hist\tthis
          korw\twork
          or\tor
          any\tany
          efils\tfiles
          acgiinnnot\tcontaining
          a\ta
          aprt\tpart
          fo\tof
          hist\tthis
        `,
        `
          korw\twork
          or\tor
          any\tany
          ehort\tother
          korw\twork
          aacdeiosst\tassociated
          hitw\twith
          cejoprt\tProject
          beeggmnrttu\tGutenberg-tm
        `,
        `
          15e\t1E5
          do\tDo
          not\tnot
          copy\tcopy
          adilpsy\tdisplay
          efmoprr\tperform
          bdeiirsttu\tdistribute
          or\tor
          bdeeiirrsttu\tredistribute
          hist\tthis
        `,
        `
          cceeilnort\telectronic
          korw\twork
          or\tor
          any\tany
          aprt\tpart
          fo\tof
          hist\tthis
          cceeilnort\telectronic
          korw\twork
          hiottuw\twithout
        `,
        `
          eilmnnoprty\tprominently
          adgiilnpsy\tdisplaying
          eht\tthe
          ceeennst\tsentence
          est\tset
          fhort\tforth
          in\tin
          aaaghpprr\tparagraph
          11e\t1E1
          hitw\twith
        `,
        `
          aceitv\tactive
          iklns\tlinks
          or\tor
          adeeiimmt\timmediate
          access\taccess
          ot\tto
          eht\tthe
          fllu\tfull
          emrst\tterms
          fo\tof
          eht\tthe
          cejoprt\tProject
        `,
        `
          beeggmnrttu\tGutenberg-tm
          ceeilns\tLicense
        `,
        `
          16e\t1E6
          ouy\tYou
          amy\tmay
          cenortv\tconvert
          ot\tto
          adn\tand
          bdeiirsttu\tdistribute
          hist\tthis
          korw\twork
          in\tin
          any\tany
          abinry\tbinary
        `,
        `
          cdeemoprss\tcompressed
          adekmr\tmarked
          pu\tup
          aeinnoopprrrty\tnonproprietary
          or\tor
          aeiopprrrty\tproprietary
          fmor\tform
          cdgiilnnu\tincluding
          any\tany
        `,
        `
          dorw\tword
          ceginoprss\tprocessing
          or\tor
          eehprttxy\thypertext
          fmor\tform
          eehorvw\tHowever
          fi\tif
          ouy\tyou
          deioprv\tprovide
          access\taccess
          ot\tto
          or\tor
        `,
        `
          bdeiirsttu\tdistribute
          ceiops\tcopies
          fo\tof
          a\ta
          cejoprt\tProject
          beeggmnrttu\tGutenberg-tm
          korw\twork
          in\tin
          a\ta
          afmort\tformat
          ehort\tother
          ahnt\tthan
        `,
        `
          ailnp\tPlain
          aaillnv\tVanilla
          aciis\tASCII
          or\tor
          ehort\tother
          afmort\tformat
          desu\tused
          in\tin
          eht\tthe
          acffiilo\tofficial
          einorsv\tversion
        `,
        `
          deopst\tposted
          no\ton
          eht\tthe
          acffiilo\tofficial
          cejoprt\tProject
          beeggmnrttu\tGutenberg-tm
          bew\tweb
          eist\tsite
          beeeggnnrttuwww\twwwgutenbergnet
        `,
        `
          ouy\tyou
          mstu\tmust
          at\tat
          no\tno
          aaddiilnot\tadditional
          cost\tcost
          eef\tfee
          or\tor
          eeenpsx\texpense
          ot\tto
          eht\tthe
          ersu\tuser
          deioprv\tprovide
          a\ta
        `,
        `
          copy\tcopy
          a\ta
          aemns\tmeans
          fo\tof
          eginoprtx\texporting
          a\ta
          copy\tcopy
          or\tor
          a\ta
          aemns\tmeans
          fo\tof
          abgiinnot\tobtaining
          a\ta
          copy\tcopy
          nopu\tupon
        `,
        `
          eeqrstu\trequest
          fo\tof
          eht\tthe
          korw\twork
          in\tin
          ist\tits
          agiilnor\toriginal
          ailnp\tPlain
          aaillnv\tVanilla
          aciis\tASCII
          or\tor
          ehort\tother
        `,
        `
          fmor\tform
          any\tAny
          aaeelnrtt\talternate
          afmort\tformat
          mstu\tmust
          cdeilnu\tinclude
          eht\tthe
          fllu\tfull
          cejoprt\tProject
          beeggmnrttu\tGutenberg-tm
        `,
        `
          ceeilns\tLicense
          as\tas
          cdeefiips\tspecified
          in\tin
          aaaghpprr\tparagraph
          11e\t1E1
        `,
        `
          17e\t1E7
          do\tDo
          not\tnot
          aceghr\tcharge
          a\ta
          eef\tfee
          for\tfor
          access\taccess
          ot\tto
          egiinvw\tviewing
          adgiilnpsy\tdisplaying
        `,
        `
          efgimnoprr\tperforming
          cginopy\tcopying
          or\tor
          bdgiiinrsttu\tdistributing
          any\tany
          cejoprt\tProject
          beeggmnrttu\tGutenberg-tm
          korsw\tworks
        `,
        `
          elnssu\tunless
          ouy\tyou
          clmopy\tcomply
          hitw\twith
          aaaghpprr\tparagraph
          18e\t1E8
          or\tor
          19e\t1E9
        `,
        `
          18e\t1E8
          ouy\tYou
          amy\tmay
          aceghr\tcharge
          a\ta
          aabeelnors\treasonable
          eef\tfee
          for\tfor
          ceiops\tcopies
          fo\tof
          or\tor
          dgiinoprv\tproviding
        `,
        `
          access\taccess
          ot\tto
          or\tor
          bdgiiinrsttu\tdistributing
          cejoprt\tProject
          beeggmnrttu\tGutenberg-tm
          cceeilnort\telectronic
          korsw\tworks
          ddeioprv\tprovided
        `,
        `
          ahtt\tthat
        `,
        `
          	-
          ouy\tYou
          apy\tpay
          a\ta
          alortyy\troyalty
          eef\tfee
          fo\tof
          02\t20
          fo\tof
          eht\tthe
          gorss\tgross
          fioprst\tprofits
          ouy\tyou
          deeirv\tderive
          fmor\tfrom
        `,
        `
          eht\tthe
          esu\tuse
          fo\tof
          cejoprt\tProject
          beeggmnrttu\tGutenberg-tm
          korsw\tworks
          aaccdelltu\tcalculated
          ginsu\tusing
          eht\tthe
          dehmot\tmethod
        `,
        `
          ouy\tyou
          aadelry\talready
          esu\tuse
          ot\tto
          aaccelltu\tcalculate
          oruy\tyour
          aabceillpp\tapplicable
          aestx\ttaxes
          eht\tThe
          eef\tfee
          is\tis
        `,
        `
          deow\towed
          ot\tto
          eht\tthe
          enorw\towner
          fo\tof
          eht\tthe
          cejoprt\tProject
          beeggmnrttu\tGutenberg-tm
          aadekmrrt\ttrademark
          btu\tbut
          eh\the
        `,
        `
          ahs\thas
          adeegr\tagreed
          ot\tto
          adenot\tdonate
          aeilorsty\troyalties
          denru\tunder
          hist\tthis
          aaaghpprr\tparagraph
          ot\tto
          eht\tthe
        `,
        `
          cejoprt\tProject
          beeggnrtu\tGutenberg
          aeilrrty\tLiterary
          acehirv\tArchive
          adfinnootu\tFoundation
          alortyy\tRoyalty
          aemnpsty\tpayments
        `,
        `
          mstu\tmust
          be\tbe
          adip\tpaid
          hiintw\twithin
          06\t60
          adsy\tdays
          fgillnoow\tfollowing
          aceh\teach
          adet\tdate
          no\ton
          chhiw\twhich
          ouy\tyou
        `,
        `
          aeepprr\tprepare
          or\tor
          aer\tare
          aegllly\tlegally
          deeiqrru\trequired
          ot\tto
          aeepprr\tprepare
          oruy\tyour
          cdeiiopr\tperiodic
          atx\ttax
        `,
        `
          enrrstu\treturns
          alortyy\tRoyalty
          aemnpsty\tpayments
          dhlosu\tshould
          be\tbe
          acellry\tclearly
          adekmr\tmarked
          as\tas
          chsu\tsuch
          adn\tand
        `,
        `
          enst\tsent
          ot\tto
          eht\tthe
          cejoprt\tProject
          beeggnrtu\tGutenberg
          aeilrrty\tLiterary
          acehirv\tArchive
          adfinnootu\tFoundation
          at\tat
          eht\tthe
        `,
        `
          adderss\taddress
          cdeefiips\tspecified
          in\tin
          ceinost\tSection
          4\t4
          afiimnnoort\tInformation
          abotu\tabout
          adinnoost\tdonations
          ot\tto
        `,
        `
          eht\tthe
          cejoprt\tProject
          beeggnrtu\tGutenberg
          aeilrrty\tLiterary
          acehirv\tArchive
          adfinnootu\tFoundation
        `,
        `
          ouy\tYou
          deioprv\tprovide
          a\ta
          fllu\tfull
          defnru\trefund
          fo\tof
          any\tany
          emnoy\tmoney
          adip\tpaid
          by\tby
          a\ta
          ersu\tuser
          how\twho
          efiinost\tnotifies
        `,
        `
          ouy\tyou
          in\tin
          giinrtw\twriting
          or\tor
          by\tby
          aeilm\te-mail
          hiintw\twithin
          03\t30
          adsy\tdays
          fo\tof
          ceeiprt\treceipt
          ahtt\tthat
          ehs\tshe
        `,
        `
          deos\tdoes
          not\tnot
          aeegr\tagree
          ot\tto
          eht\tthe
          emrst\tterms
          fo\tof
          eht\tthe
          fllu\tfull
          cejoprt\tProject
          beeggmnrttu\tGutenberg-tm
        `,
        `
          ceeilns\tLicense
          ouy\tYou
          mstu\tmust
          eeiqrru\trequire
          chsu\tsuch
          a\ta
          ersu\tuser
          ot\tto
          enrrtu\treturn
          or\tor
        `,
        `
          deorsty\tdestroy
          all\tall
          ceiops\tcopies
          fo\tof
          eht\tthe
          korsw\tworks
          deeopssss\tpossessed
          in\tin
          a\ta
          achilpsy\tphysical
          deimmu\tmedium
        `,
        `
          adn\tand
          cdeiinnostu\tdiscontinue
          all\tall
          esu\tuse
          fo\tof
          adn\tand
          all\tall
          access\taccess
          ot\tto
          ehort\tother
          ceiops\tcopies
          fo\tof
        `,
        `
          cejoprt\tProject
          beeggmnrttu\tGutenberg-tm
          korsw\tworks
        `,
        `
          ouy\tYou
          deioprv\tprovide
          in\tin
          aacccdenor\taccordance
          hitw\twith
          aaaghpprr\tparagraph
          13f\t1F3
          a\ta
          fllu\tfull
          defnru\trefund
          fo\tof
          any\tany
        `,
        `
          emnoy\tmoney
          adip\tpaid
          for\tfor
          a\ta
          korw\twork
          or\tor
          a\ta
          aceeelmnprt\treplacement
          copy\tcopy
          fi\tif
          a\ta
          cdeeft\tdefect
          in\tin
          eht\tthe
        `,
        `
          cceeilnort\telectronic
          korw\twork
          is\tis
          cddeeiorsv\tdiscovered
          adn\tand
          deeoprrt\treported
          ot\tto
          ouy\tyou
          hiintw\twithin
          09\t90
          adsy\tdays
        `,
        `
          fo\tof
          ceeiprt\treceipt
          fo\tof
          eht\tthe
          korw\twork
        `,
        `
          ouy\tYou
          clmopy\tcomply
          hitw\twith
          all\tall
          ehort\tother
          emrst\tterms
          fo\tof
          hist\tthis
          aeeegmnrt\tagreement
          for\tfor
          eefr\tfree
        `,
        `
          bdiiinorsttu\tdistribution
          fo\tof
          cejoprt\tProject
          beeggmnrttu\tGutenberg-tm
          korsw\tworks
        `,
        `
          19e\t1E9
          fi\tIf
          ouy\tyou
          hisw\twish
          ot\tto
          aceghr\tcharge
          a\ta
          eef\tfee
          or\tor
          bdeiirsttu\tdistribute
          a\ta
          cejoprt\tProject
          beeggmnrttu\tGutenberg-tm
        `,
        `
          cceeilnort\telectronic
          korw\twork
          or\tor
          gopru\tgroup
          fo\tof
          korsw\tworks
          no\ton
          deeffinrt\tdifferent
          emrst\tterms
          ahnt\tthan
          aer\tare
          est\tset
        `,
        `
          fhort\tforth
          in\tin
          hist\tthis
          aeeegmnrt\tagreement
          ouy\tyou
          mstu\tmust
          abinot\tobtain
          eiimnoprss\tpermission
          in\tin
          giinrtw\twriting
          fmor\tfrom
        `,
        `
          bhot\tboth
          eht\tthe
          cejoprt\tProject
          beeggnrtu\tGutenberg
          aeilrrty\tLiterary
          acehirv\tArchive
          adfinnootu\tFoundation
          adn\tand
          acehilm\tMichael
        `,
        `
          ahrt\tHart
          eht\tthe
          enorw\towner
          fo\tof
          eht\tthe
          cejoprt\tProject
          beeggmnrttu\tGutenberg-tm
          aadekmrrt\ttrademark
          accnott\tContact
          eht\tthe
        `,
        `
          adfinnootu\tFoundation
          as\tas
          est\tset
          fhort\tforth
          in\tin
          ceinost\tSection
          3\t3
          below\tbelow
        `,
        `
          1f\t1F
        `,
        `
          11f\t1F1
          cejoprt\tProject
          beeggnrtu\tGutenberg
          eelnorstuv\tvolunteers
          adn\tand
          eeelmopsy\temployees
          deenpx\texpend
          abcdeeilnors\tconsiderable
        `,
        `
          effort\teffort
          ot\tto
          defiinty\tidentify
          do\tdo
          cghioprty\tcopyright
          aceehrrs\tresearch
          no\ton
          abceinrrst\ttranscribe
          adn\tand
          adefooprr\tproofread
        `,
        `
          bcilpu\tpublic
          adimno\tdomain
          korsw\tworks
          in\tin
          aceginrt\tcreating
          eht\tthe
          cejoprt\tProject
          beeggmnrttu\tGutenberg-tm
        `,
        `
          cceillnoot\tcollection
          deeipst\tDespite
          eehst\tthese
          efforst\tefforts
          cejoprt\tProject
          beeggmnrttu\tGutenberg-tm
          cceeilnort\telectronic
        `,
        `
          korsw\tworks
          adn\tand
          eht\tthe
          deimmu\tmedium
          no\ton
          chhiw\twhich
          ehty\tthey
          amy\tmay
          be\tbe
          deorst\tstored
          amy\tmay
          acinnot\tcontain
        `,
        `
          cdeefst\tDefects
          chsu\tsuch
          as\tas
          btu\tbut
          not\tnot
          deiilmt\tlimited
          ot\tto
          ceeilmnopt\tincomplete
          aacceinrtu\tinaccurate
          or\tor
        `,
        `
          coprrtu\tcorrupt
          aadt\tdata
          aciinnoprrstt\ttranscription
          eorrrs\terrors
          a\ta
          cghioprty\tcopyright
          or\tor
          ehort\tother
          aceeilllnttu\tintellectual
        `,
        `
          eopprrty\tproperty
          eefgiimnnnrt\tinfringement
          a\ta
          cdeeefitv\tdefective
          or\tor
          aaddegm\tdamaged
          diks\tdisk
          or\tor
          ehort\tother
          deimmu\tmedium
          a\ta
        `,
        `
          cemoprtu\tcomputer
          irsuv\tvirus
          or\tor
          cemoprtu\tcomputer
          cdeos\tcodes
          ahtt\tthat
          aadegm\tdamage
          or\tor
          acnnot\tcannot
          be\tbe
          ader\tread
          by\tby
        `,
        `
          oruy\tyour
          eeimnpqtu\tequipment
        `,
        `
          12f\t1F2
          deiilmt\tLIMITED
          aanrrtwy\tWARRANTY
          acdeiilmrs\tDISCLAIMER
          fo\tOF
          aadegms\tDAMAGES-
          ceeptx\tExcept
          for\tfor
          eht\tthe
          ghirt\tRight
        `,
        `
          fo\tof
          aceeelmnprt\tReplacement
          or\tor
          defnru\tRefund
          bcddeeirs\tdescribed
          in\tin
          aaaghpprr\tparagraph
          13f\t1F3
          eht\tthe
          cejoprt\tProject
        `,
        `
          beeggnrtu\tGutenberg
          aeilrrty\tLiterary
          acehirv\tArchive
          adfinnootu\tFoundation
          eht\tthe
          enorw\towner
          fo\tof
          eht\tthe
          cejoprt\tProject
        `,
        `
          beeggmnrttu\tGutenberg-tm
          aadekmrrt\ttrademark
          adn\tand
          any\tany
          ehort\tother
          aprty\tparty
          bdgiiinrsttu\tdistributing
          a\ta
          cejoprt\tProject
        `,
        `
          beeggmnrttu\tGutenberg-tm
          cceeilnort\telectronic
          korw\twork
          denru\tunder
          hist\tthis
          aeeegmnrt\tagreement
          acdiilms\tdisclaim
          all\tall
        `,
        `
          abiiillty\tliability
          ot\tto
          ouy\tyou
          for\tfor
          aadegms\tdamages
          cosst\tcosts
          adn\tand
          eeenpssx\texpenses
          cdgiilnnu\tincluding
          aegll\tlegal
        `,
        `
          eefs\tfees
          ouy\tYOU
          aeegr\tAGREE
          ahtt\tTHAT
          ouy\tYOU
          aehv\tHAVE
          no\tNO
          deeeimrs\tREMEDIES
          for\tFOR
          ceeeggilnn\tNEGLIGENCE
          cirstt\tSTRICT
        `,
        `
          abiiillty\tLIABILITY
          abcehr\tBREACH
          fo\tOF
          aanrrtwy\tWARRANTY
          or\tOR
          abcehr\tBREACH
          fo\tOF
          accnortt\tCONTRACT
          ceeptx\tEXCEPT
          ehost\tTHOSE
        `,
        `
          ddeioprv\tPROVIDED
          in\tIN
          aaaghpprr\tPARAGRAPH
          3f\tF3
          ouy\tYOU
          aeegr\tAGREE
          ahtt\tTHAT
          eht\tTHE
          adfinnootu\tFOUNDATION
          eht\tTHE
        `,
        `
          aadekmrrt\tTRADEMARK
          enorw\tOWNER
          adn\tAND
          any\tANY
          bdiiorrsttu\tDISTRIBUTOR
          denru\tUNDER
          hist\tTHIS
          aeeegmnrt\tAGREEMENT
          illw\tWILL
          not\tNOT
          be\tBE
        `,
        `
          abeill\tLIABLE
          ot\tTO
          ouy\tYOU
          for\tFOR
          aacltu\tACTUAL
          cdeirt\tDIRECT
          cdeiinrt\tINDIRECT
          aceeilnnoqstu\tCONSEQUENTIAL
          eiinptuv\tPUNITIVE
          or\tOR
        `,
        `
          acdeiilnnt\tINCIDENTAL
          aadegms\tDAMAGES
          eenv\tEVEN
          fi\tIF
          ouy\tYOU
          egiv\tGIVE
          ceinot\tNOTICE
          fo\tOF
          eht\tTHE
          biiilopssty\tPOSSIBILITY
          fo\tOF
          chsu\tSUCH
        `,
        `
          aadegm\tDAMAGE
        `,
        `
          13f\t1F3
          deiilmt\tLIMITED
          ghirt\tRIGHT
          fo\tOF
          aceeelmnprt\tREPLACEMENT
          or\tOR
          defnru\tREFUND-
          fi\tIf
          ouy\tyou
          cdeiorsv\tdiscover
          a\ta
        `,
        `
          cdeeft\tdefect
          in\tin
          hist\tthis
          cceeilnort\telectronic
          korw\twork
          hiintw\twithin
          09\t90
          adsy\tdays
          fo\tof
          ceegiinrv\treceiving
          it\tit
          ouy\tyou
          acn\tcan
        `,
        `
          ceeeirv\treceive
          a\ta
          defnru\trefund
          fo\tof
          eht\tthe
          emnoy\tmoney
          fi\tif
          any\tany
          ouy\tyou
          adip\tpaid
          for\tfor
          it\tit
          by\tby
          deginns\tsending
          a\ta
        `,
        `
          einrttw\twritten
          aaeilnnoptx\texplanation
          ot\tto
          eht\tthe
          enoprs\tperson
          ouy\tyou
          cdeeeirv\treceived
          eht\tthe
          korw\twork
          fmor\tfrom
          fi\tIf
          ouy\tyou
        `,
        `
          cdeeeirv\treceived
          eht\tthe
          korw\twork
          no\ton
          a\ta
          achilpsy\tphysical
          deimmu\tmedium
          ouy\tyou
          mstu\tmust
          enrrtu\treturn
          eht\tthe
          deimmu\tmedium
          hitw\twith
        `,
        `
          oruy\tyour
          einrttw\twritten
          aaeilnnoptx\texplanation          
          eht\tThe
          enoprs\tperson
          or\tor
          eintty\tentity
          ahtt\tthat
          ddeioprv\tprovided
          ouy\tyou
          hitw\twith
        `,
        `
          eht\tthe
          cdeeefitv\tdefective
          korw\twork
          amy\tmay
          ceelt\telect
          ot\tto
          deioprv\tprovide
          a\ta
          aceeelmnprt\treplacement
          copy\tcopy
          in\tin
          eilu\tlieu
          fo\tof
          a\ta
        `,
        `
          defnru\trefund
          fi\tIf
          ouy\tyou
          cdeeeirv\treceived
          eht\tthe
          korw\twork
          acceeilllnorty\telectronically
          eht\tthe
          enoprs\tperson
          or\tor
          eintty\tentity
        `,
        `
          dgiinoprv\tproviding
          it\tit
          ot\tto
          ouy\tyou
          amy\tmay
          cehoos\tchoose
          ot\tto
          egiv\tgive
          ouy\tyou
          a\ta
          cdenos\tsecond
          inoopprttuy\topportunity
          ot\tto
        `,
        `
          ceeeirv\treceive
          eht\tthe
          korw\twork
          acceeilllnorty\telectronically
          in\tin
          eilu\tlieu
          fo\tof
          a\ta
          defnru\trefund
          fi\tIf
          eht\tthe
          cdenos\tsecond
          copy\tcopy
        `,
        `
          is\tis
          alos\talso
          cdeeefitv\tdefective
          ouy\tyou
          amy\tmay
          addemn\tdemand
          a\ta
          defnru\trefund
          in\tin
          giinrtw\twriting
          hiottuw\twithout
          efhrrtu\tfurther
        `,
        `
          eiinoopprsttu\topportunities
          ot\tto
          fix\tfix
          eht\tthe
          belmopr\tproblem
        `,
        `
          14f\t1F4
          ceeptx\tExcept
          for\tfor
          eht\tthe
          deiilmt\tlimited
          ghirt\tright
          fo\tof
          aceeelmnprt\treplacement
          or\tor
          defnru\trefund
          est\tset
          fhort\tforth
        `,
        `
          in\tin
          aaaghpprr\tparagraph
          13f\t1F3
          hist\tthis
          korw\twork
          is\tis
          ddeioprv\tprovided
          ot\tto
          ouy\tyou
          aiss\t'AS-IS'
          hitw\tWITH
          no\tNO
          ehort\tOTHER
        `,
        `
          aaeinrrstw\tWARRANTIES
          fo\tOF
          any\tANY
          dikn\tKIND
          eeprssx\tEXPRESS
          or\tOR
          deiilmp\tIMPLIED
          cdgiilnnu\tINCLUDING
          btu\tBUT
          not\tNOT
          deiilmt\tLIMITED
          ot\tTO
        `,
        `
          aaeinrrstw\tWARRANTIES
          fo\tOF
          abcehiiilmnrtty\tMERCHANTIBILITY
          or\tOR
          efinsst\tFITNESS
          for\tFOR
          any\tANY
          eopprsu\tPURPOSE
        `,
        `
          15f\t1F5
          emos\tSome
          aesstt\tstates
          do\tdo
          not\tnot
          allow\tallow
          acdeiilmrss\tdisclaimers
          fo\tof
          aceinrt\tcertain
          deiilmp\timplied
        `,
        `
          aaeinrrstw\twarranties
          or\tor
          eht\tthe
          ceilnosux\texclusion
          or\tor
          aiiilmnott\tlimitation
          fo\tof
          aceinrt\tcertain
          epsty\ttypes
          fo\tof
          aadegms\tdamages
        `,
        `
          fi\tIf
          any\tany
          acdeiilmrs\tdisclaimer
          or\tor
          aiiilmnott\tlimitation
          est\tset
          fhort\tforth
          in\tin
          hist\tthis
          aeeegmnrt\tagreement
          aeilostv\tviolates
          eht\tthe
        `,
        `
          alw\tlaw
          fo\tof
          eht\tthe
          aestt\tstate
          aabceillpp\tapplicable
          ot\tto
          hist\tthis
          aeeegmnrt\tagreement
          eht\tthe
          aeeegmnrt\tagreement
          ahlls\tshall
          be\tbe
        `,
        `
          deeeinprrtt\tinterpreted
          ot\tto
          aekm\tmake
          eht\tthe
          aimmmux\tmaximum
          acdeiilmrs\tdisclaimer
          or\tor
          aiiilmnott\tlimitation
          deeimprtt\tpermitted
          by\tby
        `,
        `
          eht\tthe
          aabceillpp\tapplicable
          aestt\tstate
          alw\tlaw
          eht\tThe
          adiiilntvy\tinvalidity
          or\tor
          abceefiilnnortuy\tunenforceability
          fo\tof
          any\tany
        `,
        `
          iinooprsv\tprovision
          fo\tof
          hist\tthis
          aeeegmnrt\tagreement
          ahlls\tshall
          not\tnot
          diov\tvoid
          eht\tthe
          aegiimnnr\tremaining
          iinooprssv\tprovisions
        `,
        `
          16f\t1F6
          deiimnnty\tINDEMNITY-
          ouy\tYou
          aeegr\tagree
          ot\tto
          defiimnny\tindemnify
          adn\tand
          dhlo\thold
          eht\tthe
          adfinnootu\tFoundation
          eht\tthe
        `,
        `
          aadekmrrt\ttrademark
          enorw\towner
          any\tany
          aegnt\tagent
          or\tor
          eeelmopy\temployee
          fo\tof
          eht\tthe
          adfinnootu\tFoundation
          aennoy\tanyone
        `,
        `
          dgiinoprv\tproviding
          ceiops\tcopies
          fo\tof
          cejoprt\tProject
          beeggmnrttu\tGutenberg-tm
          cceeilnort\telectronic
          korsw\tworks
          in\tin
          aacccdenor\taccordance
        `,
        `
          hitw\twith
          hist\tthis
          aeeegmnrt\tagreement
          adn\tand
          any\tany
          eelnorstuv\tvolunteers
          aacdeiosst\tassociated
          hitw\twith
          eht\tthe
          cdinooprtu\tproduction
        `,
        `
          imnoooprt\tpromotion
          adn\tand
          bdiiinorsttu\tdistribution
          fo\tof
          cejoprt\tProject
          beeggmnrttu\tGutenberg-tm
          cceeilnort\telectronic
          korsw\tworks
        `,
        `
          aehlmrss\tharmless
          fmor\tfrom
          all\tall
          abiiillty\tliability
          cosst\tcosts
          adn\tand
          eeenpssx\texpenses
          cdgiilnnu\tincluding
          aegll\tlegal
          eefs\tfees
        `,
        `
          ahtt\tthat
          aeirs\tarise
          cdeilrty\tdirectly
          or\tor
          cdeiilnrty\tindirectly
          fmor\tfrom
          any\tany
          fo\tof
          eht\tthe
          fgillnoow\tfollowing
          chhiw\twhich
          ouy\tyou
          do\tdo
        `,
        `
          or\tor
          acesu\tcause
          ot\tto
          ccoru\toccur
          a\ta
          bdiiinorsttu\tdistribution
          fo\tof
          hist\tthis
          or\tor
          any\tany
          cejoprt\tProject
          beeggmnrttu\tGutenberg-tm
        `,
        `
          korw\twork
          b\tb
          aaeilnortt\talteration
          acdfiiimnoot\tmodification
          or\tor
          addiinost\tadditions
          or\tor
          deeilnost\tdeletions
          ot\tto
          any\tany
        `,
        `
          cejoprt\tProject
          beeggmnrttu\tGutenberg-tm
          korw\twork
          adn\tand
          c\tc
          any\tany
          cdeeft\tDefect
          ouy\tyou
          acesu\tcause
        `,
        `
          ceinost\tSection
          2\t2
          afiimnnoort\tInformation
          abotu\tabout
          eht\tthe
          iimnoss\tMission
          fo\tof
          cejoprt\tProject
          beeggmnrttu\tGutenberg-tm
        `,
        `
          cejoprt\tProject
          beeggmnrttu\tGutenberg-tm
          is\tis
          mnnoossuyy\tsynonymous
          hitw\twith
          eht\tthe
          eefr\tfree
          bdiiinorsttu\tdistribution
          fo\tof
        `,
        `
          cceeilnort\telectronic
          korsw\tworks
          in\tin
          afmorst\tformats
          aabdeelr\treadable
          by\tby
          eht\tthe
          deistw\twidest
          aeirtvy\tvariety
          fo\tof
          cemoprstu\tcomputers
        `,
        `
          cdgiilnnu\tincluding
          beeloost\tobsolete
          dlo\told
          adddeegilm\tmiddle-aged
          adn\tand
          enw\tnew
          cemoprstu\tcomputers
          it\tIt
          eisstx\texists
        `,
        `
          abceesu\tbecause
          fo\tof
          eht\tthe
          efforst\tefforts
          fo\tof
          ddehnrsu\thundreds
          fo\tof
          eelnorstuv\tvolunteers
          adn\tand
          adinnoost\tdonations
          fmor\tfrom
        `,
        `
          eelopp\tpeople
          in\tin
          all\tall
          aklsw\twalks
          fo\tof
          efil\tlife
        `,
        `
          eelnorstuv\tVolunteers
          adn\tand
          aacfiilnn\tfinancial
          opprstu\tsupport
          ot\tto
          deioprv\tprovide
          eelnorstuv\tvolunteers
          hitw\twith
          eht\tthe
        `,
        `
          aaceinssst\tassistance
          ehty\tthey
          deen\tneed
          aer\tare
          acciilrt\tcritical
          ot\tto
          aceghinr\treaching
          cejoprt\tProject
          beeggmnrsttu\tGutenberg-tm's
        `,
        `
          aglos\tgoals
          adn\tand
          eginnrsu\tensuring
          ahtt\tthat
          eht\tthe
          cejoprt\tProject
          beeggmnrttu\tGutenberg-tm
          cceillnoot\tcollection
          illw\twill
        `,
        `
          aeimnr\tremain
          eeflry\tfreely
          aaabeillv\tavailable
          for\tfor
          aeeginnorst\tgenerations
          ot\tto
          cemo\tcome
          in\tIn
          0012\t2001
          eht\tthe
          cejoprt\tProject
        `,
        `
          beeggnrtu\tGutenberg
          aeilrrty\tLiterary
          acehirv\tArchive
          adfinnootu\tFoundation
          asw\twas
          acdeert\tcreated
          ot\tto
          deioprv\tprovide
          a\ta
          ceersu\tsecure
        `,
        `
          adn\tand
          aeemnnprt\tpermanent
          efrtuu\tfuture
          for\tfor
          cejoprt\tProject
          beeggmnrttu\tGutenberg-tm
          adn\tand
          efrtuu\tfuture
          aeeginnorst\tgenerations
        `,
        `
          ot\tTo
          aelnr\tlearn
          emor\tmore
          abotu\tabout
          eht\tthe
          cejoprt\tProject
          beeggnrtu\tGutenberg
          aeilrrty\tLiterary
          acehirv\tArchive
          adfinnootu\tFoundation
        `,
        `
          adn\tand
          how\thow
          oruy\tyour
          efforst\tefforts
          adn\tand
          adinnoost\tdonations
          acn\tcan
          ehlp\thelp
          ees\tsee
          ceinosst\tSections
          3\t3
          adn\tand
          4\t4
        `,
        `
          adn\tand
          eht\tthe
          adfinnootu\tFoundation
          bew\tweb
          aegp\tpage
          at\tat
          afgghlopprttwww\thttpwwwpglaforg
        `,
        `
          ceinost\tSection
          3\t3
          afiimnnoort\tInformation
          abotu\tabout
          eht\tthe
          cejoprt\tProject
          beeggnrtu\tGutenberg
          aeilrrty\tLiterary
          acehirv\tArchive
        `,
        `
          adfinnootu\tFoundation
        `,
        `
          eht\tThe
          cejoprt\tProject
          beeggnrtu\tGutenberg
          aeilrrty\tLiterary
          acehirv\tArchive
          adfinnootu\tFoundation
          is\tis
          a\ta
          nno\tnon
          fioprt\tprofit
        `,
        `
          0135c\t501c3
          aacdeilnotu\teducational
          acinoooprrt\tcorporation
          adeginorz\torganized
          denru\tunder
          eht\tthe
          alsw\tlaws
          fo\tof
          eht\tthe
        `,
        `
          aestt\tstate
          fo\tof
          iiiimppssss\tMississippi
          adn\tand
          adegnrt\tgranted
          atx\ttax
          eemptx\texempt
          assttu\tstatus
          by\tby
          eht\tthe
          aeilnnrt\tInternal
        `,
        `
          eeenruv\tRevenue
          ceeirsv\tService
          eht\tThe
          adfinnoostu\tFoundation's
          ein\tEIN
          or\tor
          adeeflr\tfederal
          atx\ttax
          acdefiiiinnott\tidentification
        `,
        `
          bemnru\tnumber
          is\tis
          112244566\t64-6221541
          ist\tIts
          0135c\t501c3
          eelrtt\tletter
          is\tis
          deopst\tposted
          at\tat
        `,
        `
          aadffggghiilnnopprrsttu\thttppglaforgfundraising
          bciinnoorsttu\tContributions
          ot\tto
          eht\tthe
          cejoprt\tProject
          beeggnrtu\tGutenberg
        `,
        `
          aeilrrty\tLiterary
          acehirv\tArchive
          adfinnootu\tFoundation
          aer\tare
          atx\ttax
          bcddeeiltu\tdeductible
          ot\tto
          eht\tthe
          fllu\tfull
          eenttx\textent
        `,
        `
          deeimprtt\tpermitted
          by\tby
          su\tUS
          adeeflr\tfederal
          alsw\tlaws
          adn\tand
          oruy\tyour
          aesstt\tstate's
          alsw\tlaws
        `,
        `
          eht\tThe
          adfinnoostu\tFoundation's
          aciilnppr\tprincipal
          ceffio\toffice
          is\tis
          acdelot\tlocated
          at\tat
          4557\t4557
          aelmn\tMelan
          dr\tDr
          s\tS
        `,
        `
          aabfiknrs\tFairbanks
          ak\tAK
          12799\t99712
          btu\tbut
          ist\tits
          eelnorstuv\tvolunteers
          adn\tand
          eeelmopsy\temployees
          aer\tare
          acdeerstt\tscattered
        `,
        `
          ghhoorttuu\tthroughout
          emnorsuu\tnumerous
          acilnoost\tlocations
          ist\tIts
          beinsssu\tbusiness
          ceffio\toffice
          is\tis
          acdelot\tlocated
          at\tat
        `,
        `
          089\t809
          hnort\tNorth
          0015\t1500
          estw\tWest
          alst\tSalt
          aekl\tLake
          city\tCity
          tu\tUT
          11468\t84116
          018\t801
          1567889\t596-1887
          aeilm\temail
        `,
        `
          @abefggilnoprsssu	business@pglaforg
          aeilm\tEmail
          accnott\tcontact
          iklns\tlinks
          adn\tand
          pu\tup
          ot\tto
          adet\tdate
          accnott\tcontact
        `,
        `
          afiimnnoort\tinformation
          acn\tcan
          be\tbe
          dfnou\tfound
          at\tat
          eht\tthe
          adfinnoostu\tFoundation's
          bew\tweb
          eist\tsite
          adn\tand
          acffiilo\tofficial
        `,
        `
          aegp\tpage
          at\tat
          afgghlopprtt\thttppglaforg
        `,
        `
          for\tFor
          aaddiilnot\tadditional
          accnott\tcontact
          afiimnnoort\tinformation
        `,
        `
          dr\tDr
          eggorry\tGregory
          b\tB
          benwy\tNewby
        `,
        `
          cefhi\tChief
          ceeeituvx\tExecutive
          adn\tand
          cdeiorrt\tDirector
        `,
        `
          @abbefggglnoprwy	gbnewby@pglaforg
        `,
        `
          ceinost\tSection
          4\t4
          afiimnnoort\tInformation
          abotu\tabout
          adinnoost\tDonations
          ot\tto
          eht\tthe
          cejoprt\tProject
          beeggnrtu\tGutenberg
        `,
        `
          aeilrrty\tLiterary
          acehirv\tArchive
          adfinnootu\tFoundation
        `,
        `
          cejoprt\tProject
          beeggmnrttu\tGutenberg-tm
          ddeenps\tdepends
          nopu\tupon
          adn\tand
          acnnot\tcannot
          eirsuvv\tsurvive
          hiottuw\twithout
          deiw\twide
        `,
        `
          adeprs\tspread
          bcilpu\tpublic
          opprstu\tsupport
          adn\tand
          adinnoost\tdonations
          ot\tto
          acrry\tcarry
          otu\tout
          ist\tits
          iimnoss\tmission
          fo\tof
        `,
        `
          acegiinnrs\tincreasing
          eht\tthe
          bemnru\tnumber
          fo\tof
          bcilpu\tpublic
          adimno\tdomain
          adn\tand
          cdeeilns\tlicensed
          korsw\tworks
          ahtt\tthat
          acn\tcan
          be\tbe
        `,
        `
          eeflry\tfreely
          bddeiirsttu\tdistributed
          in\tin
          acehimn\tmachine
          aabdeelr\treadable
          fmor\tform
          abcceeilss\taccessible
          by\tby
          eht\tthe
          deistw\twidest
        `,
        `
          aarry\tarray
          fo\tof
          eeimnpqtu\tequipment
          cdgiilnnu\tincluding
          addeottu\toutdated
          eeimnpqtu\tequipment
          amny\tMany
          allms\tsmall
          adinnoost\tdonations
        `,
        `
          1\t1
          ot\tto
          0005\t5000
          aer\tare
          aacillprrtuy\tparticularly
          aimnoprtt\timportant
          ot\tto
          aagiiimnnnt\tmaintaining
          atx\ttax
          eemptx\texempt
        `,
        `
          assttu\tstatus
          hitw\twith
          eht\tthe
          irs\tIRS
        `,
        `
          eht\tThe
          adfinnootu\tFoundation
          is\tis
          cdeimmott\tcommitted
          ot\tto
          cgilmnopy\tcomplying
          hitw\twith
          eht\tthe
          alsw\tlaws
          aeggilnrtu\tregulating
        `,
        `
          acehiirst\tcharities
          adn\tand
          aabcehilrt\tcharitable
          adinnoost\tdonations
          in\tin
          all\tall
          05\t50
          aesstt\tstates
          fo\tof
          eht\tthe
          deintu\tUnited
        `,
        `
          aesstt\tStates
          acceilmnop\tCompliance
          eeeimnqrrstu\trequirements
          aer\tare
          not\tnot
          fimnoru\tuniform
          adn\tand
          it\tit
          aekst\ttakes
          a\ta
        `,
        `
          abcdeeilnors\tconsiderable
          effort\teffort
          chmu\tmuch
          aekopprrw\tpaperwork
          adn\tand
          amny\tmany
          eefs\tfees
          ot\tto
          eemt\tmeet
          adn\tand
          eekp\tkeep
          pu\tup
        `,
        `
          hitw\twith
          eehst\tthese
          eeeimnqrrstu\trequirements
          ew\tWe
          do\tdo
          not\tnot
          ciilost\tsolicit
          adinnoost\tdonations
          in\tin
          acilnoost\tlocations
        `,
        `
          eehrw\twhere
          ew\twe
          aehv\thave
          not\tnot
          cdeeeirv\treceived
          einrttw\twritten
          acfiimnnoort\tconfirmation
          fo\tof
          acceilmnop\tcompliance
          ot\tTo
        `,
        `
          dens\tSEND
          adinnoost\tDONATIONS
          or\tor
          deeeimnrt\tdetermine
          eht\tthe
          assttu\tstatus
          fo\tof
          acceilmnop\tcompliance
          for\tfor
          any\tany
        `,
        `
          aacilprrtu\tparticular
          aestt\tstate
          iistv\tvisit
          afgghlopprtt\thttppglaforg
        `,
        `
          ehilw\tWhile
          ew\twe
          acnnot\tcannot
          adn\tand
          do\tdo
          not\tnot
          ciilost\tsolicit
          bciinnoorsttu\tcontributions
          fmor\tfrom
          aesstt\tstates
          eehrw\twhere
          ew\twe
        `,
        `
          aehv\thave
          not\tnot
          emt\tmet
          eht\tthe
          aciiilnoostt\tsolicitation
          eeeimnqrrstu\trequirements
          ew\twe
          know\tknow
          fo\tof
          no\tno
          bhiiinooprt\tprohibition
        `,
        `
          aaginst\tagainst
          acceginpt\taccepting
          cdeiilnostu\tunsolicited
          adinnoost\tdonations
          fmor\tfrom
          dnoors\tdonors
          in\tin
          chsu\tsuch
          aesstt\tstates
          how\twho
        `,
        `
          aachoppr\tapproach
          su\tus
          hitw\twith
          effors\toffers
          ot\tto
          adenot\tdonate
        `,
        `
          aaeiilnnnortt\tInternational
          adinnoost\tdonations
          aer\tare
          aefgllrtuy\tgratefully
          accdeept\taccepted
          btu\tbut
          ew\twe
          acnnot\tcannot
          aekm\tmake
        `,
        `
          any\tany
          aeemnssttt\tstatements
          cceginnnor\tconcerning
          atx\ttax
          aeemnrttt\ttreatment
          fo\tof
          adinnoost\tdonations
          cdeeeirv\treceived
          fmor\tfrom
        `,
        `
          deiostu\toutside
          eht\tthe
          deintu\tUnited
          aesstt\tStates
          su\tUS
          alsw\tlaws
          aelno\talone
          ampsw\tswamp
          oru\tour
          allms\tsmall
          affst\tstaff
        `,
        `
          aeelps\tPlease
          ccehk\tcheck
          eht\tthe
          cejoprt\tProject
          beeggnrtu\tGutenberg
          bew\tWeb
          aegps\tpages
          for\tfor
          cenrrtu\tcurrent
          adinnoot\tdonation
        `,
        `
          dehmost\tmethods
          adn\tand
          addeersss\taddresses
          adinnoost\tDonations
          aer\tare
          accdeept\taccepted
          in\tin
          a\ta
          bemnru\tnumber
          fo\tof
          ehort\tother
        `,
        `
          aswy\tways
          cdgiilnnu\tincluding
          cdgiilnnu\tincluding
          ccehks\tchecks
          eilnno\tonline
          aemnpsty\tpayments
          adn\tand
          cdeirt\tcredit
          acdr\tcard
        `,
        `
          adinnoost\tdonations
          ot\tTo
          adenot\tdonate
          aeelps\tplease
          iistv\tvisit
          aadefgghlnoopprttt\thttppglaforgdonate
        `,
        `
          ceinost\tSection
          5\t5
          aeeglnr\tGeneral
          afiimnnoort\tInformation
          abotu\tAbout
          cejoprt\tProject
          beeggmnrttu\tGutenberg-tm
          cceeilnort\telectronic
        `,
        `
          korsw\tworks
        `,
        `
          efooprrss\tProfessor
          acehilm\tMichael
          s\tS
          ahrt\tHart
          is\tis
          eht\tthe
          agiinoorrt\toriginator
          fo\tof
          eht\tthe
          cejoprt\tProject
          beeggmnrttu\tGutenberg-tm
        `,
        `
          ccenopt\tconcept
          fo\tof
          a\ta
          abilrry\tlibrary
          fo\tof
          cceeilnort\telectronic
          korsw\tworks
          ahtt\tthat
          cdlou\tcould
          be\tbe
          eeflry\tfreely
          adehrs\tshared
        `,
        `
          hitw\twith
          aennoy\tanyone
          for\tFor
          hirtty\tthirty
          aersy\tyears
          eh\the
          cddeopru\tproduced
          adn\tand
          bddeiirsttu\tdistributed
          cejoprt\tProject
        `,
        `
          beeggmnrttu\tGutenberg-tm
          bekoos\teBooks
          hitw\twith
          lnoy\tonly
          a\ta
          eloos\tloose
          eknortw\tnetwork
          fo\tof
          eelnortuv\tvolunteer
          opprstu\tsupport
        `,
        `
          cejoprt\tProject
          beeggmnrttu\tGutenberg-tm
          bekoos\teBooks
          aer\tare
          efnot\toften
          acdeert\tcreated
          fmor\tfrom
          aeelrsv\tseveral
          deinprt\tprinted
        `,
        `
          deiinost\teditions
          all\tall
          fo\tof
          chhiw\twhich
          aer\tare
          cdefimnor\tconfirmed
          as\tas
          bcilpu\tPublic
          adimno\tDomain
          in\tin
          eht\tthe
          su\tUS
        `,
        `
          elnssu\tunless
          a\ta
          cghioprty\tcopyright
          ceinot\tnotice
          is\tis
          cddeilnu\tincluded
          hstu\tThus
          ew\twe
          do\tdo
          not\tnot
          aceeilnrssy\tnecessarily
        `,
        `
          eekp\tkeep
          bekoos\teBooks
          in\tin
          acceilmnop\tcompliance
          hitw\twith
          any\tany
          aacilprrtu\tparticular
          aeppr\tpaper
          deiinot\tedition
        `,
        `
          most\tMost
          eelopp\tpeople
          arstt\tstart
          at\tat
          oru\tour
          bew\tWeb
          eist\tsite
          chhiw\twhich
          ahs\thas
          eht\tthe
          aimn\tmain
          gp\tPG
          acehrs\tsearch
          acfiilty\tfacility
        `,
        `
          beeegghnnprttttuwww\thttpwwwgutenbergnet
        `,
        `
          hist\tThis
          bew\tWeb
          eist\tsite
          cdeilnsu\tincludes
          afiimnnoort\tinformation
          abotu\tabout
          cejoprt\tProject
          beeggmnrttu\tGutenberg-tm
        `,
        `
          cdgiilnnu\tincluding
          how\thow
          ot\tto
          aekm\tmake
          adinnoost\tdonations
          ot\tto
          eht\tthe
          cejoprt\tProject
          beeggnrtu\tGutenberg
          aeilrrty\tLiterary
        `,
        `
          acehirv\tArchive
          adfinnootu\tFoundation
          how\thow
          ot\tto
          ehlp\thelp
          cdeopru\tproduce
          oru\tour
          enw\tnew
          bekoos\teBooks
          adn\tand
          how\thow
          ot\tto
        `,
        `
          bbceirssu\tsubscribe
          ot\tto
          oru\tour
          aeilm\temail
          eeelnrsttw\tnewsletter
          ot\tto
          aehr\thear
          abotu\tabout
          enw\tnew
          bekoos\teBooks
        `,
      ]),
    },
  },
};
