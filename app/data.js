const posts=[
    {
        id:1,
        photo:"https://scontent.fdac4-1.fna.fbcdn.net/v/t39.30808-6/356700007_1731172634003384_4929694369436499816_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGTID3htefm861g51xohlgBAWUqil0ZEBQBZSqKXRkQFNWFEuF9dyMIdDpIZq0TzNKAgu0aaOei5m_1ieK_0Hao&_nc_ohc=E9DPI6afmR8AX-d0RJS&_nc_zt=23&_nc_ht=scontent.fdac4-1.fna&oh=00_AfCNmQFCcTkNZCu9saCVfFov4YoLnn2bTnHmUina-9xeoQ&oe=64A2AF1F",
        content:`আসসালামু আলাইকুম পবিত্র ঈদের নামাজ আদায় করে আসলাম ঈদ মোবারক`,
        like:250,
        comment:30,
        timeAgo:"50 min",
        author:{
            name:"MD Mustofa",
            photo:"https://scontent.fdac4-2.fna.fbcdn.net/v/t39.30808-6/346863103_1737157720073868_2968503858697331850_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFSbRgwPXotRxxJ3YCfbx6U8Ur0uW5-_fDxSvS5bn798D0rb9P0_dkwiOPEh8dhCZgz_fn8lC8jwZvzcStqOmfP&_nc_ohc=CdYVF6_tyvgAX9ySERv&_nc_zt=23&_nc_ht=scontent.fdac4-2.fna&oh=00_AfBf3cBw1CLQyjzQ2YwaaG3N9SM8chrFiiYSSWgrZe3pVA&oe=64A231DF"
        }
    },
    {
        id:2,
        photo:"https://scontent.fdac4-2.fna.fbcdn.net/v/t39.30808-6/356845530_229903729878543_6321000811026247519_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeF2lONmMjZJ8ymcd6xF1msw6BhOXatMaQfoGE5dq0xpB34ah1QDeBZzhznfccRO081BdJvRu6-bLd-DESKEWTnK&_nc_ohc=kcn8FxmbubcAX9Z7Mr_&_nc_zt=23&_nc_ht=scontent.fdac4-2.fna&oh=00_AfAxKkvnYEoZlPWFnEG87tWcG8MujRG4ewXtrtlQ_fv3Dw&oe=64A18188",
        content:`ছেলে কে নিয়ে গ্রামের বাড়িতে রান্না করছিলেন মাশরাফী।`,
        like:120,
        comment:55,
        timeAgo:"44 min",
        author:{
            name:"Daily Post71.com",
            photo:"https://scontent.fdac4-2.fna.fbcdn.net/v/t39.30808-6/352388838_264221452944209_3814362552010878186_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGFQJjnNsNCQ3H2gsgyBpRxj_CCc4vuN42P8IJzi-43jY4tz2Jzok-Lj07cekFR601gnT88dOeQIuF5ZVmzH7fC&_nc_ohc=UGHPUfe93bIAX-1G4SH&_nc_zt=23&_nc_ht=scontent.fdac4-2.fna&oh=00_AfBZSisb2iyvs2Tf1Vm3u4jL-YYOrbsWs8-_NI0NK0E65w&oe=64A1774D"
        }
    },
    {
        id:4,
        photo:"https://scontent.fdac4-2.fna.fbcdn.net/v/t39.30808-6/277662788_1137738987022382_450425613310462714_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFa_3dzTM0r0lbdTTiIdb1MB3ACvvJwifcHcAK-8nCJ9z3Pki5fWBPS2PtJs-29DeJWAGDCyZkgudRzELZXm-MU&_nc_ohc=HkapFJ2436sAX-kUHeG&_nc_zt=23&_nc_ht=scontent.fdac4-2.fna&oh=00_AfBNnl3RwxqnEzfOaJJvncsXwrthbXJu2A8wjkhEZhK2WA&oe=64A26402",
        content:`রাসূলুল্লাহ সাল্লাল্লাহু আলাইহি ওয়া সাল্লাম বলেছেন, “জাহান্নামের আগুন থেকে বাঁচো-তা এক টুকরা খেজুর দান করার বা একটি ভালো কথা বলার বিনিময়েই হোক না কেন” [বুখারী: ৬৫৪০] 
        রাসূলুল্লাহ সাল্লাল্লাহু আলাইহি ওয়া সাল্লাম আরও বলেছেনঃ “কোন সৎকাজকেও সামান্য ও নগণ্য মনে করো না, যদিও তা কোন পানি পানেচ্ছু ব্যক্তির পাত্রে এক মগ পানি ঢেলে দেয়াই হয় অথবা তোমার কোন ভাইয়ের সাথে হাসিমুখে সাক্ষাত করাই হয়।” [মুসনাদে আহমাদ: ৫/৬৩]`,
        like:34,
        comment:37,
        timeAgo:"39 min",
        author:{
            name:"Md Habib",
            photo:"https://scontent.fdac4-2.fna.fbcdn.net/v/t39.30808-6/318083497_1308823686580577_7022285286528173819_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEOU41M7yz9U8hRq3La0k_dud13aw4t1fu53XdrDi3V-40D-8CdIw9Gx-Y_tuz4wtCZm1WppvODXD8kILBieLN7&_nc_ohc=hWT9VXycJR8AX9TJgBB&_nc_zt=23&_nc_ht=scontent.fdac4-2.fna&oh=00_AfDi8tooJE80ToVYzmBc04jul5NLqePteokmmpnUx00FPg&oe=64A26BC3"
        }
    },
    {
        id:5,
        photo:"https://scontent.fdac4-2.fna.fbcdn.net/v/t39.30808-6/355698858_588677210060093_766216683270636025_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEab_HD6LqiBWrxCQyoCDFxBdKsWlxurv4F0qxaXG6u_o2jLmRAbfkMFTGIdDL6Xm7qQ6g1_2xIKbcaRkeGIW3X&_nc_ohc=8VeQmfoXd6gAX8lbnUR&_nc_zt=23&_nc_ht=scontent.fdac4-2.fna&oh=00_AfCStBze8Lf0UykVOrCnS4bP-bq3BA9_F6YAJdpfWu0JpQ&oe=64A3FD26",
        content:`সুন্দর একটা মুহুর্ত ছিলো🌸`,
        like:23,
        comment:15,
        timeAgo:"22 min",
        author:{
            name:"জুয়েল দ্য উইজার্ড",
            photo:"https://scontent.fdac4-1.fna.fbcdn.net/v/t39.30808-6/354452666_674744504494188_1577102903460307438_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFcLu5mx85MdiAzRBsc2pv4-jO1AzcNGkD6M7UDNw0aQEk18vGZ74IyDLivc-EGPsxEalE1v7no1kFl_qq5-48a&_nc_ohc=Uh88KP_fESYAX9kCb08&_nc_zt=23&_nc_ht=scontent.fdac4-1.fna&oh=00_AfBp9sLXhJjpG4vuWGpGEpImMDctvK4QsGoK34-LXiEclQ&oe=64A31923"
        }
    },
]