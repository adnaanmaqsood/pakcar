import { CarListing } from '../types/car';

// Real listings scraped from PakWheels and OLX Pakistan
// Images are direct CDN URLs from each platform
// Links open the exact original listing
export const mockListings: CarListing[] = [

  // ── PakWheels Listings ────────────────────────────────────────────────────

  {
    id: 'pw-1',
    source: 'pakwheels',
    sourceUrl: 'https://www.pakwheels.com/used-cars/kia-picanto-2021-for-sale-in-lahore-11422534',
    title: 'KIA Picanto 1.0 AT 2021',
    make: 'Kia', model: 'Picanto', year: 2021,
    price: 2930000, city: 'Lahore', mileage: 66000,
    fuel: 'Petrol', transmission: 'Automatic', color: 'Mercury Blue',
    images: [
      'https://cache3.pakwheels.com/ad_pictures/1426/kia-picanto-1-0-at-2021-142614770.webp',
    ],
    description: 'First owner original mileage, company maintained, all original, new tyres, not a penny work required, lush condition. Features ABS, air bags, immobilizer key, power locks, climate control, keyless entry.',
    postedAt: '2026-04-22', sellerName: 'Muhammad Khurram Anwaar',
  },

  {
    id: 'pw-2',
    source: 'pakwheels',
    sourceUrl: 'https://www.pakwheels.com/used-cars/honda-vezel-2016-for-sale-in-islamabad-11433053',
    title: 'Honda Vezel Hybrid Z Honda Sensing 2016',
    make: 'Honda', model: 'Vezel', year: 2016,
    price: 5925000, city: 'Islamabad', mileage: 76000,
    fuel: 'Hybrid', transmission: 'Automatic', color: 'White Pearl',
    images: [
      'https://cache3.pakwheels.com/ad_pictures/1427/honda-vezel-hybrid-z-honda-sensing-2016-142782150.webp',
    ],
    description: 'Honda Vezel Z package Model 2016 Self import 2021, Islamabad number, White Colour, First owner, 100% Original colour, even bumpers in original colour. Verified Auction 4.5 Grade. Original Japan Gathers sound system, original Japan Front Recording Camera. Best for Vezel lovers, Outclass Condition.',
    postedAt: '2026-05-01', sellerName: 'Abc',
  },

  {
    id: 'pw-3',
    source: 'pakwheels',
    sourceUrl: 'https://www.pakwheels.com/used-cars/kia-sportage-2019-for-sale-in-lahore-11433104',
    title: 'KIA Sportage FWD 2019',
    make: 'Kia', model: 'Sportage', year: 2019,
    price: 6190000, city: 'Lahore', mileage: 103000,
    fuel: 'Petrol', transmission: 'Automatic', color: 'Black Metallic',
    images: [
      'https://cache2.pakwheels.com/ad_pictures/1427/kia-sportage-fwd-2019-142783135.webp',
    ],
    description: '3rd owner, genuine mileage, well maintained. Complete service details available. Complete original file available. Token tax up to date. Inside out fully original. Panoramic sunroof, Android Auto, Apple CarPlay, ventilated seats, parking sensors.',
    postedAt: '2026-05-01', sellerName: 'Ahmed Rabbani',
  },

  {
    id: 'pw-4',
    source: 'pakwheels',
    sourceUrl: 'https://www.pakwheels.com/used-cars/toyota-yaris-sedan-2021-for-sale-in-karachi-11433102',
    title: 'Toyota Yaris ATIV X CVT 1.5 2021',
    make: 'Toyota', model: 'Yaris', year: 2021,
    price: 4550000, city: 'Karachi', mileage: 24000,
    fuel: 'Petrol', transmission: 'Automatic', color: 'Pearl White',
    images: [
      'https://cache1.pakwheels.com/ad_pictures/1427/toyota-yaris-ativ-x-cvt-1-5-2021-142783289.webp',
    ],
    description: 'Toyota Yaris ATIV X CVT 2021 in excellent condition. Very low mileage, first owner, family used car. All original and genuine. Ready for immediate delivery. Contact for test drive.',
    postedAt: '2026-05-01', sellerName: 'M. Ali',
  },

  {
    id: 'pw-5',
    source: 'pakwheels',
    sourceUrl: 'https://www.pakwheels.com/used-cars/toyota-corolla-2019-for-sale-in-islamabad-11433100',
    title: 'Toyota Corolla Altis 1.6 X CVT-i 2019',
    make: 'Toyota', model: 'Corolla', year: 2019,
    price: 4980000, city: 'Islamabad', mileage: 130000,
    fuel: 'Petrol', transmission: 'Automatic', color: 'White',
    images: [
      'https://cache4.pakwheels.com/ad_pictures/1427/toyota-corolla-altis-1-6-x-cvt-i-2019-142783183.webp',
    ],
    description: 'Toyota Altis 2019 model, 2021 Reg in Islamabad. Original Car, original documents for sale. Exterior some pieces repaint, interior total original condition. Engine and suspension in perfect condition. Family used and maintained car. Neat and clean scratch less.',
    postedAt: '2026-05-01', sellerName: 'M. Ahsan',
  },

  {
    id: 'pw-6',
    source: 'pakwheels',
    sourceUrl: 'https://www.pakwheels.com/used-cars/suzuki-wagon-r-2022-for-sale-in-islamabad-11433071',
    title: 'Suzuki Wagon R Hybrid FZ 2022',
    make: 'Suzuki', model: 'Wagon R', year: 2022,
    price: 3950000, city: 'Islamabad', mileage: 30000,
    fuel: 'Hybrid', transmission: 'Automatic', color: 'Silver',
    images: [
      'https://cache4.pakwheels.com/ad_pictures/1427/suzuki-wagon-r-hybrid-fz-2022-142782844.webp',
    ],
    description: 'Top-tier Suzuki Wagon R Hybrid FZ imported in 2025. Punjab registration. Grade 4 verified auction sheet. Features heated seats, push start, parking sensors, radar, and digital climate control. Outstanding fuel efficiency of 25 km/l. Full maintenance completed, no repairs needed.',
    postedAt: '2026-05-01', sellerName: 'E-TRACK CARS',
  },

  {
    id: 'pw-7',
    source: 'pakwheels',
    sourceUrl: 'https://www.pakwheels.com/used-cars/honda-city-2022-for-sale-in-islamabad-11433118',
    title: 'Honda City 1.5L ASPIRE CVT 2022',
    make: 'Honda', model: 'City', year: 2022,
    price: 5250000, city: 'Islamabad', mileage: 51000,
    fuel: 'Petrol', transmission: 'Automatic', color: 'Taffeta White',
    images: [
      'https://cache4.pakwheels.com/ad_pictures/1427/honda-city-1-5l-aspire-cvt-2022-142783386.webp',
    ],
    description: '1st owner car, inner/outer total genuine, full option and cruise control. No work needed, just buy and drive. Features Android Auto, ABS, airbags, rear camera, push start, keyless entry, power mirrors, climate control.',
    postedAt: '2026-05-01', sellerName: 'Muhammad Tehseen',
  },

  {
    id: 'pw-8',
    source: 'pakwheels',
    sourceUrl: 'https://www.pakwheels.com/used-cars/daihatsu-cast-2005-for-sale-in-faisalabad-11411989',
    title: 'Daihatsu Cast 2005',
    make: 'Daihatsu', model: 'Cast', year: 2005,
    price: 1120000, city: 'Faisalabad', mileage: 242000,
    fuel: 'Petrol', transmission: 'Automatic', color: 'White',
    images: [
      'https://cache3.pakwheels.com/ad_pictures/1424/daihatsu-cast-2005-142456130.webp',
    ],
    description: 'Daihatsu Cast 2005 for sale in Faisalabad. High mileage but engine in running condition. Suitable for parts or restoration project. Price is negotiable for serious buyers. Contact for inspection.',
    postedAt: '2026-04-18', sellerName: 'PakWheels Seller',
  },

  // ── OLX Listings ──────────────────────────────────────────────────────────

  {
    id: 'olx-1',
    source: 'olx',
    sourceUrl: 'https://www.olx.com.pk/item/kia-sportage-awd-2021urgent-sale-iid-1113852340',
    title: 'KIA Sportage AWD 2021 — Urgent Sale',
    make: 'Kia', model: 'Sportage', year: 2021,
    price: 6950000, city: 'Karachi', mileage: 39000,
    fuel: 'Petrol', transmission: 'Automatic', color: 'White',
    images: [
      'https://images.olx.com.pk/thumbnails/613676260-800x600.jpeg',
      'https://images.olx.com.pk/thumbnails/613676261-800x600.jpeg',
      'https://images.olx.com.pk/thumbnails/613676262-800x600.jpeg',
      'https://images.olx.com.pk/thumbnails/613676263-800x600.jpeg',
      'https://images.olx.com.pk/thumbnails/613676264-800x600.jpeg',
    ],
    description: 'KIA Sportage AWD 2021. Home used car, bumper to bumper original. All documents clear. Engine 100%, suspension 100%. Car available in DHA Phase 8. Urgent sale, serious buyers only.',
    postedAt: '2026-04-27', sellerName: 'Private Seller',
  },

  {
    id: 'olx-2',
    source: 'olx',
    sourceUrl: 'https://www.olx.com.pk/item/mitsubishi-lancer-glx-13-2005-iid-1113838528',
    title: 'Mitsubishi Lancer GLX 1.3 2005',
    make: 'Mitsubishi', model: 'Lancer', year: 2005,
    price: 1675000, city: 'Lahore', mileage: 145000,
    fuel: 'Petrol', transmission: 'Manual', color: 'Silver',
    images: [
      'https://images.olx.com.pk/thumbnails/613597390-800x600.jpeg',
    ],
    description: 'Mitsubishi Lancer GLX 1.3 2005 for sale in Lahore. Good running condition, AC working. Engine fresh, no major work done. Lahore registered, all documents available. Ideal for daily commute.',
    postedAt: '2026-04-25', sellerName: 'OLX Seller',
  },

  {
    id: 'olx-3',
    source: 'olx',
    sourceUrl: 'https://www.olx.com.pk/item/daihatsu-mira-x-memorial-model-2011-reg-2015-black-excellent-condition-iid-1113962300',
    title: 'Daihatsu Mira X Memorial 2011',
    make: 'Daihatsu', model: 'Mira', year: 2011,
    price: 2225000, city: 'Karachi', mileage: 68000,
    fuel: 'Petrol', transmission: 'Automatic', color: 'Black',
    images: [
      'https://images.olx.com.pk/thumbnails/614318822-800x600.jpeg',
    ],
    description: 'Daihatsu Mira X Memorial Model 2011, registered 2015, black colour. Excellent condition. Imported from Japan, minimal Pakistan use. Good fuel average, smooth automatic transmission. All docs clear.',
    postedAt: '2026-05-01', sellerName: 'OLX Seller',
  },

  {
    id: 'olx-4',
    source: 'olx',
    sourceUrl: 'https://www.olx.com.pk/item/honda-city-prosmetec-model-2016-gtey-color-excellent-condition-iid-1113961596',
    title: 'Honda City Prosmatec 2016',
    make: 'Honda', model: 'City', year: 2016,
    price: 3200000, city: 'Karachi', mileage: 88000,
    fuel: 'Petrol', transmission: 'Automatic', color: 'Grey',
    images: [
      'https://images.olx.com.pk/thumbnails/614314936-800x600.jpeg',
    ],
    description: 'Honda City Prosmatec Model 2016, grey colour, excellent condition. Push start, back camera, alloy wheels. Engine completely original. No major work done. Karachi registered, all documents clear.',
    postedAt: '2026-05-01', sellerName: 'OLX Seller',
  },

  {
    id: 'olx-5',
    source: 'olx',
    sourceUrl: 'https://www.olx.com.pk/item/toyota-hilux-vigo-champ-iid-1113960727',
    title: 'Toyota Hilux Vigo Champ',
    make: 'Toyota', model: 'Hilux', year: 2018,
    price: 7500000, city: 'Gujrat', mileage: 95000,
    fuel: 'Diesel', transmission: 'Manual', color: 'White',
    images: [
      'https://images.olx.com.pk/thumbnails/614310200-800x600.jpeg',
    ],
    description: 'Toyota Hilux Vigo Champ in excellent condition. Powerful diesel engine, ideal for heavy-duty use. Well maintained, no major repairs. Available for inspection. Serious buyers contact for more details.',
    postedAt: '2026-05-01', sellerName: 'OLX Seller',
  },

  {
    id: 'olx-6',
    source: 'olx',
    sourceUrl: 'https://www.olx.com.pk/item/daihatsu-rocky-g-premium-20202024-iid-1113531379',
    title: 'Daihatsu Rocky G Premium 2020',
    make: 'Daihatsu', model: 'Rocky', year: 2020,
    price: 5275000, city: 'Rahimyar Khan', mileage: 42000,
    fuel: 'Petrol', transmission: 'Automatic', color: 'White',
    images: [
      'https://images.olx.com.pk/thumbnails/611799335-800x600.jpeg',
    ],
    description: 'Daihatsu Rocky G Premium 2020/2024 model. Turbocharged engine, panoramic sunroof, leather seats. Smart entry, push start, rear camera. Low mileage, excellent condition. Registered 2024.',
    postedAt: '2026-04-15', sellerName: 'OLX Seller',
  },

  {
    id: 'olx-7',
    source: 'olx',
    sourceUrl: 'https://www.olx.com.pk/item/nissan-clipper-2020-iid-1113371214',
    title: 'Nissan Clipper 2020',
    make: 'Nissan', model: 'Clipper', year: 2020,
    price: 3200000, city: 'Karachi', mileage: 35000,
    fuel: 'Petrol', transmission: 'Automatic', color: 'White',
    images: [
      'https://images.olx.com.pk/thumbnails/613207888-800x600.jpeg',
    ],
    description: 'Nissan Clipper 2020 imported from Japan. Low mileage, excellent condition. Ideal kei truck/van for commercial use. All documents available. No major accidents or repairs.',
    postedAt: '2026-04-10', sellerName: 'OLX Seller',
  },

  {
    id: 'olx-8',
    source: 'olx',
    sourceUrl: 'https://www.olx.com.pk/item/suzuki-swift-13-dlx-model-2019-iid-1113959877',
    title: 'Suzuki Swift 1.3 DLX 2019',
    make: 'Suzuki', model: 'Swift', year: 2019,
    price: 2375000, city: 'Karachi', mileage: 60000,
    fuel: 'Petrol', transmission: 'Manual', color: 'Silver',
    images: [
      'https://images.olx.com.pk/thumbnails/614305902-800x600.jpeg',
    ],
    description: 'Suzuki Swift 1.3 DLX 2019 model for sale in Karachi. Good condition, engine running smooth. Alloy wheels, decent fuel average. All documents original. Suitable for family or daily use.',
    postedAt: '2026-05-01', sellerName: 'OLX Seller',
  },

  {
    id: 'olx-9',
    source: 'olx',
    sourceUrl: 'https://www.olx.com.pk/item/kia-sportage-awd-2022-full-genuine-immaculate-condition-iid-1113295154',
    title: 'KIA Sportage AWD 2022 — Full Genuine',
    make: 'Kia', model: 'Sportage', year: 2022,
    price: 7480000, city: 'Sargodha', mileage: 28000,
    fuel: 'Petrol', transmission: 'Automatic', color: 'White',
    images: [
      'https://images.olx.com.pk/thumbnails/610392574-800x600.jpeg',
    ],
    description: 'KIA Sportage AWD 2022, full genuine, immaculate condition. Low mileage, first owner. Panoramic sunroof, Harman Kardon sound system, heated seats. Warranty transferable. Price is final for genuine buyers.',
    postedAt: '2026-04-08', sellerName: 'OLX Seller',
  },

  {
    id: 'olx-10',
    source: 'olx',
    sourceUrl: 'https://www.olx.com.pk/item/hyundai-tucson-gls-sport-2023-iid-1113101871',
    title: 'Hyundai Tucson GLS Sport 2023',
    make: 'Hyundai', model: 'Tucson', year: 2023,
    price: 7200000, city: 'Karachi', mileage: 34500,
    fuel: 'Petrol', transmission: 'Automatic', color: 'White',
    images: [
      'https://images.olx.com.pk/thumbnails/609236072-800x600.jpeg',
      'https://images.olx.com.pk/thumbnails/609236073-800x600.jpeg',
      'https://images.olx.com.pk/thumbnails/609236074-800x600.jpeg',
    ],
    description: 'First-owner Hyundai Tucson GLS Sport 2023. Dealership maintained with comprehensive service history and active warranty. Infotainment system with tracking, seat covers, alloy rims. 100% original condition, no repairs required. Ready to drive family SUV.',
    postedAt: '2026-04-02', sellerName: 'Salman Butt',
  },

  {
    id: 'olx-11',
    source: 'olx',
    sourceUrl: 'https://www.olx.com.pk/item/toyota-vitz-2009-iid-1113950280',
    title: 'Toyota Vitz 2009',
    make: 'Toyota', model: 'Vitz', year: 2009,
    price: 2150000, city: 'Lahore', mileage: 82000,
    fuel: 'Petrol', transmission: 'Automatic', color: 'Silver',
    images: [
      'https://images.olx.com.pk/thumbnails/614252088-800x600.jpeg',
    ],
    description: 'Toyota Vitz 2009 for sale in Lahore. Good running condition, AC working. Engine smooth, no major work done. Documents available. Suitable for daily use with great fuel economy.',
    postedAt: '2026-05-01', sellerName: 'OLX Seller',
  },

  {
    id: 'olx-12',
    source: 'olx',
    sourceUrl: 'https://www.olx.com.pk/item/suzuki-swift-2017-13-dlx-lahore-registered-new-car-iid-1113788695',
    title: 'Suzuki Swift 1.3 DLX 2017',
    make: 'Suzuki', model: 'Swift', year: 2017,
    price: 2675000, city: 'Lahore', mileage: 71000,
    fuel: 'Petrol', transmission: 'Manual', color: 'Grey',
    images: [
      'https://images.olx.com.pk/thumbnails/613305190-800x600.jpeg',
      'https://images.olx.com.pk/thumbnails/613306818-800x600.jpeg',
      'https://images.olx.com.pk/thumbnails/613306819-800x600.jpeg',
      'https://images.olx.com.pk/thumbnails/613306820-800x600.jpeg',
    ],
    description: 'Suzuki Swift 2017 DLX, Lahore number. New tyres, all documents original. Well maintained, no accidents. Engine in excellent condition. Sportive hatchback ideal for city and highway. Price negotiable.',
    postedAt: '2026-04-23', sellerName: 'new olx user',
  },

  {
    id: 'olx-13',
    source: 'olx',
    sourceUrl: 'https://www.olx.com.pk/item/suzuki-alto-vxr-2022-iid-1113890419',
    title: 'Suzuki Alto VXR 2022',
    make: 'Suzuki', model: 'Alto', year: 2022,
    price: 2680000, city: 'Lahore', mileage: 51000,
    fuel: 'Petrol', transmission: 'Manual', color: 'White',
    images: [
      'https://images.olx.com.pk/thumbnails/614248697-800x600.jpeg',
      'https://images.olx.com.pk/thumbnails/614248695-800x600.jpeg',
      'https://images.olx.com.pk/thumbnails/614248696-800x600.jpeg',
      'https://images.olx.com.pk/thumbnails/614248698-800x600.jpeg',
      'https://images.olx.com.pk/thumbnails/614248699-800x600.jpeg',
    ],
    description: 'First owner, drives like brand new car. 25–26 km/l fuel average in city. Expensive polish installed. Mechanically well maintained. Total genuine rust free body. Documents original and complete.',
    postedAt: '2026-04-29', sellerName: 'Awan',
  },

  {
    id: 'olx-14',
    source: 'olx',
    sourceUrl: 'https://www.olx.com.pk/item/toyota-corolla-se-saloon-model-2002-automatic-auto-transmission-iid-1113689567',
    title: 'Toyota Corolla SE Saloon 2002',
    make: 'Toyota', model: 'Corolla', year: 2002,
    price: 2150000, city: 'Karachi', mileage: 175000,
    fuel: 'Petrol', transmission: 'Automatic', color: 'White',
    images: [
      'https://images.olx.com.pk/thumbnails/612726599-800x600.jpeg',
    ],
    description: 'Toyota Corolla SE Saloon 2002, automatic transmission. Running in good condition, engine smooth. AC cooling excellent. All documents available. Best budget option for a reliable automatic car in Karachi.',
    postedAt: '2026-04-20', sellerName: 'OLX Seller',
  },
];
