import ac1 from "../src/images/ac.jpg";
import ac2 from "../src/images/acTwo.jpg";
import ac3 from "../src/images/acThree.jpg";
import ac4 from "../src/images/acFour.jpg";
import ac5 from "../src/images/acFive.jpg";
import cp1 from "../src/images/cpOne.jpg";
import cp2 from "../src/images/cpTwo.jpg";
import cp3 from "../src/images/cpThree.jpg";
import cp4 from "../src/images/cpFour.jpg";
import cp5 from "../src/images/cpFive.jpg";
import ap1 from "../src/images/apOne.jpg";
import ap2 from "../src/images/apTwo.jpg";
import ap3 from "../src/images/apThree.jpg";
import ap4 from "../src/images/apFour.jpg";
import ap5 from "../src/images/apFive.jpg";
import cc1 from "../src/images/ccOne.jpg";
import cc2 from "../src/images/ccTwo.jpg";
import cc3 from "../src/images/ccThree.jpg";
import cc4 from "../src/images/ccFour.jpg";
import cc5 from "../src/images/ccFive.jpg";
import cl1 from "../src/images/clOne.jpg";
import cl2 from "../src/images/clTwo.jpg";
import cl3 from "../src/images/clThree.jpg";
import cl4 from "../src/images/clFour.jpg";
import cl5 from "../src/images/clFive.jpg";
import mr1 from "../src/images/mrOne.jpg";
import mr2 from "../src/images/mrTwo.jpg";
import mr3 from "../src/images/mrThree.jpg";
import mr4 from "../src/images/mrFour.jpg";
import mr5 from "../src/images/mrFive.jpg";
import pl1 from "../src/images/plOne.jpg";
import pl2 from "../src/images/plTwo.jpg";
import pl3 from "../src/images/plThree.jpg";
import pl4 from "../src/images/plFour.jpg";
import pl5 from "../src/images/plFive.jpg";
import rf1 from "../src/images/rfOne.jpg";
import rf2 from "../src/images/rfTwo.jpg";
import rf3 from "../src/images/rfThree.jpg";
import rf4 from "../src/images/rfFour.jpg";
import rf5 from "../src/images/rfFive.jpg";
import ro1 from "../src/images/roOne.jpg";
import ro2 from "../src/images/roTwo.jpg";
import ro3 from "../src/images/roThree.jpg";
import ro4 from "../src/images/roFour.jpg";
import ro5 from "../src/images/roFive.jpg";
import tr1 from "../src/images/trOne.jpg";
import tr2 from "../src/images/trTwo.jpg";
import tr3 from "../src/images/trThree.jpg";
import tr4 from "../src/images/trFour.jpg";
import tr5 from "../src/images/trFive.jpg";
import wr1 from "../src/images/wrOne.jpg";
import wr2 from "../src/images/wrTwo.jpg";
import wr3 from "../src/images/wrThree.jpg";
import wr4 from "../src/images/wrFour.jpg";
import wr5 from "../src/images/wrFive.jpg";
import cr1 from "../src/images/crOne.jpg";
import cr2 from "../src/images/crTwo.jpg";
import cr3 from "../src/images/crThree.jpg";
import cr4 from "../src/images/crFour.jpg";
import cr5 from "../src/images/crFive.jpg";
import pm1 from "../src/images/pmOne.jpg";
import pm2 from "../src/images/pmTwo.jpg";
import pm3 from "../src/images/pmThree.jpg";
import pm4 from "../src/images/pmFour.jpg";
import pm5 from "../src/images/pmFive.jpg";

import testImg from "../src/images/testImage.jpg";
export const ROUTER_STORE_KEY = "router";
export const sliderBaseSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: false,
  swipe: true,
  slidesToShow: 2,
  slidesToScroll: 1,
};
export const SSE_BLUE = "#2c80ec";
export const SSE_GREY = "#F0F0F0";
export const SSE_WHITE = "#ffffff";
export const SSE_LIGHT_GREEN = "#2EB7B4";
export const SSE_RED = "#F35822";
export const INVALID_EMAIL = "Invalid email";
export const INVALID_MOBILE = "Invalid mobile";
export const INVALID_NAME = "Invalid name";
export const ADDRESS_CANNOT_BE_EMPTY = "Address is mandatory";
export const CATEGORIES = [
  {
    images: [ac1, ac2, ac3, ac4, ac5],
    menu: "AC REPAIR AND SERVICES",
    generalPoints: [
      "General Ac repair work",
      "Ac service",
      "Ac installation",
      "Ac uninstallation",
      "Ac gas refill or top up",
      "Ac not cooling",
    ],
    aboutContent: ` 
    At AKN Groups, our goal is customer satisfaction, while offering high quality professional repair services at a cost that’s affordable and competitive. Whether your AC is not cooling or needs a detailed servicing, AKN Groups provides quality workmanship through its pan-India network of skilled and verified AC repair professionals. AKN Groups offers a comprehensive range of AC repair services including AC gas refilling, AC servicing, AC installation and uninstallation, AC PCB repair, AC compressor repair, AC stabilizer installation…...pretty much any kind of repair work required on your AC.
    `,
  },
  {
    images: [cp1, cp2, cp3, cp4, cp5],
    menu: "CARPENTER WORK",
    aboutContent:
      "Whether you require a verified carpenter for a small repair job or need a team of carpenters for new furniture making or to carry out home renovation projects, AKN Groups provides skilled and reliable carpenters that provide quality workmanship at cost you can easily afford. AKN Groups offers a comprehensive range of carpentry services from general carpentry, door repair, window repair, bolt and latch installation, lock installation, new furniture making, furniture repair & installation…...pretty much anything to do with carpentry services.",
  },
  {
    images: [ac1, ac2, testImg, testImg, testImg],
    menu: "ELECTRICIAN WORK",
    generalPoints: [
      "GENERAL ELECTRICAL WORK",
      "CELLING FAN",
      "LAMPS AND LIGHT FITTING",
      "INVERTER",
      "WATER MOTOR REPAIR",
      "ELECTRICAL WIRIING",
    ],
    aboutContent:
      "Whether you require a skilled electrician for a small repair job or need a team of electricians for light fittings or to carry out home rewiring projects, AKN Groups provides skilled and reliable electricians that provide quality workmanship at cost you can easily afford. AKN Groups offers a comprehensive range of electrical services from general electrical repair, fan installation, inverter repair, geyser installation, MCB or Fuse repair…...pretty much anything to do with electrical services",
  },
  {
    images: [ap1, ap2, ap3, ap4, ap5],
    menu: "APPLIANCE REPAIR AND SERVICE",
    generalPoints: [
      "Microwave",
      "DTH",
      "IRON BOX",
      "JUICER",
      "MIXER",
      "GRINDER",
      "TREADMILL REPAIR AND SERVICE",
      "HOME THEATER INSTALLATION",
    ],
    aboutContent:
      "at AKN groups, our goal is customer satisfaction, while offering high quality professional repair services at a cost that’s affordable and competitive. Whether you need your microwave repaired, your ac serviced, or your refrigerator mended, AKN groups provide quality workmanship through its pan-India network of skilled and verified appliance repair professionals. AKN groups offers a comprehensive range of appliance repair services including microwave, led tv, refrigerator, washing machine…...pretty much all kinds of home appliance you may have at your home.",
  },
  {
    images: [cl1, cl2, cl3, cl4, cl5],
    menu: "CLEANING",
    generalPoints: [
      "COMPLETE HOME CLEANING",
      "BATHROOM CLEANING",
      "FRIDGE CLEANING",
      "KITCHEN CLEANING",
      "SOFA CLEANING",
      "FLOOR SCRUBBING",
      "CARPET CLEANING",
    ],
    aboutContent:
      "aboutCKeeping your home clean is fairly easy. But when it needs to be spotless, you need more than just regular cleaning. AKN Groups brings to you the best service providers specialized in deep cleaning services focused on allergen reduction and green cleaning techniques. We have complete home as well as individual room cleaning services. At AKN Groups, our goal is customer satisfaction, while offering high quality professional home cleaning services at a cost that’s affordable and competitive. AKN Groups offers a comprehensive range of home cleaning services including complete home cleaning, bathroom cleaning, kitchen cleaning, carpet cleaning, floor scrubbing, chair cleaning, appliances cleaning and more.ontent",
  },
  {
    images: [pl1, pl2, pl3, pl4, pl5],
    menu: "PLUMBER WORKS",
    generalPoints: [
      "GENERAL PLUMBING WORK",
      "WATER TANK INSTALLATION",
      "OVERHEAD WATER TANK CLEANING",
      "BATHROOM FITTINGS INSTALLATION",
      "WATER MOTOR INSTALLATION",
    ],
    aboutContent:
      "Whether you require a skilled plumber for a small repair job or need a team of plumbers for bath fittings or to install a new water pipeline connection, AKN Groups provides skilled and reliable plumbers that provide quality workmanship at cost you can easily afford. AKN Groups offers a comprehensive range of plumbing services from general plumbing, water tank installation, bathroom fittings, kitchen faucet or sink repair, water motor installation…...pretty much anything to do with plumbing services.",
  },
  {
    images: [cr1, cr2, cr3, cr4, cr5],
    menu: "COMPUTER REPAIR AND SERVICES",
    generalPoints: [
      "GENERAL COMPUTER REPAIR AND SERVICES",
      "DESK TOP AND LAPTOPS",
      "PRINTER",
      "SCANNER",
      "ETC",
    ],
    aboutContent:
      "At AKN Groups, our goal is customer satisfaction, while offering high quality professional repair services at a cost that’s affordable and competitive. Whether your computer is not starting, making noise, getting too hot, giving slow performance, AKN Groups provides quality workmanship through its Pan-India network of skilled and verified computer repair professionals. AKN Groups offers a comprehensive range of computer repair services including laptop not working, laptop getting too hot, laptop display problem, laptop running slow, printer or scanner repair, motherboard repair, BIOS problem, software or anti-virus installation…...pretty much any kind of repair work required on your computer.",
  },
  {
    images: [tr1, tr2, tr3, tr4, tr5],
    menu: "TV REPAIR AND SERVICE",
    generalPoints: [
      "GENERAL TV REPAIR AND SERVICES",
      "LED",
      "LCD",
      "CRT",
      "PLASMA",
    ],
    aboutContent:
      "At AKN Groups, our goal is customer satisfaction, while offering high quality professional TV repair services at a cost that’s affordable and competitive. If you need your LCD, Plasma or LED TV repaired, AKN Groups provides quality workmanship through its Pan-India network of skilled and authorized TV repair professionals. AKN Groups offers a comprehensive range of TV repair services including TV picture problem, TV sounds problem, TV not working, TV panel replacement, TV wall mounting/ installation and more.",
  },
  {
    images: [rf1, rf2, rf3, rf4, rf5],
    menu: "REFRIGEATOR REPAIR AND SERVICES",
    aboutContent:
      "At AKN Groups, our goal is customer satisfaction, while offering high quality professional repair services at a cost that’s affordable and competitive. Whether your refrigerator is not cooling, making noise or leaking water, AKN Groups provides quality workmanship through its Pan-India network of skilled and verified refrigerator repair professionals. AKN Groups offers a comprehensive range of refrigerator repair services including refrigerator not working, refrigerator not cooling, refrigerator leaking water, and refrigerator defrost problem, refrigerator freezer not working…...pretty much any kind of repair work required on your refrigerator.",
  },
  {
    images: [wr1, wr2, wr3, wr4, wr5],
    menu: "WASHING MACHINE REPAIR AND SERVICCES",
    aboutContent:
      "Washing machine is an essential home appliance and keeps our clothes clean and tidy without the extra effort. If your washing machine is not working, it will put all your laundry activities to a halt.",
  },
  {
    images: [ro1, ro2, ro3, ro4, ro5],
    menu: "RO REPAIR AND SERVICES",
    aboutContent:
      "At AKN Groups, our goal is customer satisfaction, while offering high quality professional repair services at a cost that’s affordable and competitive. Whether your RO is not working or needs a complete servicing, AKN Groups provides quality workmanship through its Pan-India network of skilled and verified RO repair professionals. AKN Groups offers a comprehensive range of RO repair services including RO servicing, RO installation and uninstallation, RO filter or membrane change, RO producing less water, RO making noise…...pretty much any kind of repair work required on your RO water purifier.",
  },
  {
    images: [mr1, mr2, mr3, mr4, mr5],
    menu: "MOBILE REPAIR AND SERVICES",
    aboutContent:
      "AKN Groups offers a comprehensive range of mobile repair services including mobile not working, mobile getting too hot, mobile display problem, mobile batter replacement, mobile camera not working, motherboard repair/ replacement, OS installation, charging port problem, Wi-fi or Bluetooth problem…...pretty much any kind of repair work required on your smartphone.",
  },
  {
    images: [cc1, cc2, cc3, cc4, cc5],
    menu: "CCTV HOME AND OFFICE SECURITY",
    generalPoints: [
      "CCTV CAMERA REPAIR AND SERVICE",
      "CCTV CAMERA INSTALLATION",
    ],
    aboutContent:
      "Installing CCTV surveillance system in a secure and proper way is of paramount importance. That’s why, at AKN Groups, we only send you background verified and skilled professionals who are trained and experienced to make sure your security system setup is performed in right way. We don’ compromise with quality when it comes to installing CCTV and surveillance systems. AKN Groups offers a comprehensive range of Home security and CCTV services including CCTV installation, CCTV repair, CCTV DVR repair & rectification, CCTV remote access account set-up, CCTV camera network set-up…...pretty much any kind of repair work required on your CCTV surveillance system.",
  },
  {
    images: [pm1, pm2, pm3, pm4, pm5],
    menu: "PAKERS AND MOVERS",
    aboutContent: "aboutContent",
  },
];
