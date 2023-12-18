export interface Product {
  id: number;
  titre: string;
  domaine: string;
  price: number;
  image: string;
}

const Data: Product[]  = [
  {"id": 1, "titre": "Blé", "domaine": "Céréales et grains", "price": 250.00, "image": "https://images.unsplash.com/photo-1595507102940-362eba018186?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {"id": 2, "titre": "Riz", "domaine": "Céréales et grains", "price": 180.50, "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {"id": 3, "titre": "Maïs", "domaine": "Céréales et grains", "price": 120.75, "image": "https://images.unsplash.com/photo-1623066798929-946425dbe1b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {"id": 4, "titre": "Sorgho", "domaine": "Céréales et grains", "price": 150.25, "image": "https://img.passeportsante.net/1200x675/2022-10-27/shutterstock-1771638275.webp"},
  {"id": 5, "titre": "Orge", "domaine": "Céréales et grains", "price": 200.50, "image": "https://www.anjou-fourrage-tradition.fr/user/documents/images/illustrations/mcith/orge_cropped_676x560.jpg"},
  {"id": 6, "titre": "Millet", "domaine": "Céréales et grains", "price": 90.75, "image": "https://ooofarms.com/cdn/shop/products/Foxtail_wholemillet.jpg?v=1672252979&width=1500"},
  {"id": 7, "titre": "Quinoa", "domaine": "Céréales et grains", "price": 120.00, "image": "https://cuisinersansgaspiller.files.wordpress.com/2020/05/recettes-restes-quinoa-cuit.jpg"},
  {"id": 8, "titre": "Seigle", "domaine": "Céréales et grains", "price": 180.25, "image": "https://lamilanaise.com/wp-content/uploads/2017/08/600x400xseigle-bio.jpg.pagespeed.ic.QiOGZiDCst.jpg"},
  {"id": 10, "titre": "Épeautre", "domaine": "Céréales et grains", "price": 160.00, "image": "https://lamilanaise.com/wp-content/uploads/2017/08/%C3%A9pautre-bio-min-1.jpg"},
  {"id": 11, "titre": "Tomate", "domaine": "Légumes", "price": 80.25, "image": "https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=400"},
  {"id": 12, "titre": "Carotte", "domaine": "Légumes", "price": 60.50, "image": "https://images.pexels.com/photos/3650647/pexels-photo-3650647.jpeg?auto=compress&cs=tinysrgb&w=400"},
  {"id": 13, "titre": "Poivron", "domaine": "Légumes", "price": 120.00, "image": "https://images.pexels.com/photos/594137/pexels-photo-594137.jpeg?auto=compress&cs=tinysrgb&w=400"},
  {"id": 14, "titre": "Aubergine", "domaine": "Légumes", "price": 100.75, "image": "https://images.pexels.com/photos/321551/pexels-photo-321551.jpeg?auto=compress&cs=tinysrgb&w=400"},
  {"id": 15, "titre": "Courgette", "domaine": "Légumes", "price": 150.50, "image": "https://images.pexels.com/photos/3375263/pexels-photo-3375263.jpeg?auto=compress&cs=tinysrgb&w=400"},
  {"id": 16, "titre": "Concombre", "domaine": "Légumes", "price": 70.25, "image": "https://images.pexels.com/photos/3568039/pexels-photo-3568039.jpeg?auto=compress&cs=tinysrgb&w=400"},
  {"id": 17, "titre": "Radis", "domaine": "Légumes", "price": 95.00, "image": "https://images.pexels.com/photos/1257078/pexels-photo-1257078.jpeg?auto=compress&cs=tinysrgb&w=400"},
  {"id": 18, "titre": "Oignon", "domaine": "Légumes", "price": 120.25, "image": "https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2lnbm9ufGVufDB8fDB8fHww"},
  {"id": 19, "titre": "Pomme de terre", "domaine": "Légumes", "price": 80.50, "image": "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UG9tbWUlMjBkZSUyMHRlcnJlfGVufDB8fDB8fHww"},
  {"id": 20, "titre": "Haricot vert", "domaine": "Légumes", "price": 130.00, "image": "https://images.pexels.com/photos/255469/pexels-photo-255469.jpeg?auto=compress&cs=tinysrgb&w=400"},
  {"id": 21, "titre": "Pomme", "domaine": "Fruits", "price": 200.00, "image": "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8UG9tbWV8ZW58MHx8MHx8fDA%3D"},
  {"id": 22, "titre": "Banane", "domaine": "Fruits", "price": 150.25, "image": "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFuYW5lfGVufDB8fDB8fHww"},
  {"id": 23, "titre": "Orange", "domaine": "Fruits", "price": 120.75, "image": "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8T3JhbmdlfGVufDB8fDB8fHww"},
  {"id": 24, "titre": "Avocats", "domaine": "Fruits", "price": 100.75, "image": "https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXZvY2F0JTIwZnJ1aXRzfGVufDB8fDB8fHww"},
  {"id": 25, "titre": "Papayes", "domaine": "Fruits", "price": 110.75, "image": "https://images.unsplash.com/photo-1623492229905-ebc1202e8904?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UEFQQVlFfGVufDB8fDB8fHww"},
  {"id": 26, "titre": "Ananas", "domaine": "Fruits", "price": 160.00, "image": "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QW5hbmFzfGVufDB8fDB8fHww"},
  {"id": 27, "titre": "Mangue", "domaine": "Fruits", "price": 110.75, "image": "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFuZ3VlfGVufDB8fDB8fHww"},
  {"id": 28, "titre": "Citron", "domaine": "Fruits", "price": 140.50, "image": "https://images.unsplash.com/photo-1590502593747-42a996133562?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q0lUUk9OfGVufDB8fDB8fHww"},
  {"id": 29, "titre": "Noix de coco", "domaine": "Fruits", "price": 95.25, "image": "https://images.unsplash.com/photo-1560769680-ba2f3767c785?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Tm9peCUyMGRlJTIwY29jb3xlbnwwfHwwfHx8MA%3D%3D"},
  {"id": 31, "titre": "Haricots", "domaine": "Légumineuses", "price": 90.50, "image": "https://images.unsplash.com/photo-1564894809611-1742fc40ed80?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {"id": 32, "titre": "Pois chiches", "domaine": "Légumineuses", "price": 80.00, "image": "https://plus.unsplash.com/premium_photo-1675237625824-40a9c6400ad8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UG9pcyUyMGNoaWNoZXN8ZW58MHx8MHx8fDA%3D"},
  {"id": 35, "titre": "Fèves", "domaine": "Légumineuses", "price": 130.00, "image": "https://images.pexels.com/photos/4157754/pexels-photo-4157754.jpeg?auto=compress&cs=tinysrgb&w=400"},
  {"id": 36, "titre": "Soja", "domaine": "Légumineuses", "price": 100.25, "image": "https://images.pexels.com/photos/273838/pexels-photo-273838.jpeg?auto=compress&cs=tinysrgb&w=400"},
  {"id": 39, "titre": "Cacahuètes", "domaine": "Légumineuses", "price": 150.75, "image": "https://images.pexels.com/photos/7717463/pexels-photo-7717463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
  {"id": 41, "titre": "Basilic", "domaine": "Herbes et épices", "price": 30.50, "image": "https://images.pexels.com/photos/2334636/pexels-photo-2334636.jpeg?auto=compress&cs=tinysrgb&w=400"},
  {"id": 43, "titre": "Piment", "domaine": "Herbes et épices", "price": 40.00, "image": "https://images.pexels.com/photos/68170/paprika-green-red-vegetables-68170.jpeg?auto=compress&cs=tinysrgb&w=400"},
  {"id": 44, "titre": "Persil", "domaine": "Herbes et épices", "price": 35.25, "image": "https://images.pexels.com/photos/60560/parsley-seasoning-greens-salad-60560.jpeg?auto=compress&cs=tinysrgb&w=400"},
  {"id": 47, "titre": "Curcuma", "domaine": "Herbes et épices", "price": 28.50, "image": "https://images.pexels.com/photos/4198933/pexels-photo-4198933.jpeg?auto=compress&cs=tinysrgb&w=400"},
  {"id": 52, "titre": "Aneth", "domaine": "Herbes et épices", "price": 29.75, "image": "https://images.pexels.com/photos/4197829/pexels-photo-4197829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
  {"id": 53, "titre": "Menthe", "domaine": "Herbes et épices", "price": 34.50, "image": "https://images.pexels.com/photos/214165/pexels-photo-214165.jpeg?auto=compress&cs=tinysrgb&w=400"},
  {"id": 56, "titre": "Fenouil", "domaine": "Herbes et épices", "price": 43.75, "image": "https://images.pexels.com/photos/735719/pexels-photo-735719.jpeg?auto=compress&cs=tinysrgb&w=400"},
  {"id": 57, "titre": "Poivre noir", "domaine": "Herbes et épices", "price": 39.50, "image": "https://images.pexels.com/photos/15005890/pexels-photo-15005890/free-photo-of-ingredients-nature-morte-pimenter-arriere-plan-blanc.jpeg?auto=compress&cs=tinysrgb&w=400"},
  {"id": 58, "titre": "Gingembre", "domaine": "Herbes et épices", "price": 45.25, "image": "https://images.pexels.com/photos/7342140/pexels-photo-7342140.jpeg?auto=compress&cs=tinysrgb&w=400"},
  {"id": 60, "titre": "Curry", "domaine": "Herbes et épices", "price": 46.75, "image": "https://images.pexels.com/photos/5273033/pexels-photo-5273033.jpeg?auto=compress&cs=tinysrgb&w=400"}
]


export default Data