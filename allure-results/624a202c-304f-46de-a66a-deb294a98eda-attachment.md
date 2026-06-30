# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.ts >> Sample
- Location: Real_time_projectRunner\example.spec.ts:33:5

# Error details

```
Error: locator.fill: Error: strict mode violation: getByText('Flipkart') resolved to 25 elements:
    1) <div class="pkKEsC">Flipkart Plus Zone</div> aka getByText('Flipkart Plus Zone')
    2) <div class="pkKEsC">Advertise on Flipkart</div> aka getByText('Advertise on Flipkart')
    3) <span class="fFtomn">Flipkart - Your go-to place for Online Shopping</span> aka getByText('Flipkart - Your go-to place')
    4) <span class="wOdJYS">…</span> aka getByText('Most searched for on Flipkart:')
    5) <a href="/" class="wOdJYS" title="Best Selling on Flipkart">Best Selling on Flipkart</a> aka getByText('Best Selling on Flipkart')
    6) <h1>Flipkart: India's Ultimate One-Stop Online Shoppi…</h1> aka getByText('Flipkart: India\'s Ultimate')
    7) <h2>What Can You Buy from Flipkart?</h2> aka getByText('What Can You Buy from')
    8) <h2>Flipkart Loyalty and Rewards Program</h2> aka getByText('Flipkart Loyalty and Rewards')
    9) <strong>Flipkart Plus</strong> aka locator('strong').filter({ hasText: 'Flipkart Plus' })
    10) <a href="/plus/all-offers">Flipkart Plus</a> aka locator('a').filter({ hasText: /^Flipkart Plus$/ })
    ...

Call log:
  - waiting for getByText('Flipkart')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e13]:
    - generic [ref=e16]:
      - generic [ref=e18]:
        - generic [ref=e27]:
          - generic [ref=e29]:
            - img "Image" [ref=e32]
            - img "Image" [ref=e35]
          - link "Image Image" [ref=e37]:
            - /url: /flights-travel-uhp-at-store?marketplace=FKT
            - img "Image" [ref=e40]
            - img "Image" [ref=e43]
        - generic [ref=e53]:
          - generic [ref=e54]:
            - img [ref=e55]
            - generic [ref=e58]: Location not set
          - generic [ref=e60]:
            - generic [ref=e61]: Select delivery location
            - img [ref=e62]
      - banner [ref=e70]:
        - generic [ref=e74]:
          - button "Search for Products, Brands and More" [ref=e75] [cursor=pointer]:
            - img "Search Icon" [ref=e76]
          - textbox "Search for Products, Brands and More" [ref=e80]
        - generic [ref=e81]:
          - generic [ref=e86]:
            - link "Login" [ref=e87] [cursor=pointer]:
              - /url: /account/login?ret=/
              - img "Login" [ref=e88]
              - generic [ref=e89]: Login
            - img "Chevron" [ref=e90]
          - generic [ref=e95]:
            - link "More" [ref=e96] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e97]: More
            - img "Chevron" [ref=e98]
          - link "Cart Cart" [ref=e101]:
            - /url: /viewcart?marketplace=FLIPKART
            - img "Cart" [ref=e102]
            - generic [ref=e103]: Cart
      - generic [ref=e105]:
        - link "For You" [ref=e110]:
          - /url: https://www.flipkart.com/
          - generic [ref=e112]:
            - img [ref=e115]
            - generic [ref=e116]: For You
        - link "Fashion" [ref=e121]:
          - /url: /aw-base-new-inline-2025-at-store
          - generic [ref=e123]:
            - img [ref=e126]
            - generic [ref=e127]: Fashion
        - link "Mobiles" [ref=e132]:
          - /url: /mobile-phones-store
          - generic [ref=e134]:
            - img [ref=e137]
            - generic [ref=e138]: Mobiles
        - link "Beauty" [ref=e143]:
          - /url: /bpc-bau-new-inline-at-store
          - generic [ref=e145]:
            - img [ref=e148]
            - generic [ref=e149]: Beauty
        - link "Electronics" [ref=e154]:
          - /url: /new-elec-clp-march-at-store
          - generic [ref=e156]:
            - img [ref=e159]
            - generic [ref=e160]: Electronics
        - link "Home" [ref=e165]:
          - /url: /home-kitchen-25-at-store
          - generic [ref=e167]:
            - img [ref=e170]
            - generic [ref=e171]: Home
        - link "Appliances" [ref=e176]:
          - /url: /tv-and-appliances-inline-ab-at-store
          - generic [ref=e178]:
            - img [ref=e181]
            - generic [ref=e182]: Appliances
        - link "Toys, baby.." [ref=e187]:
          - /url: /toys-baby-2025-new-at-store
          - generic [ref=e189]:
            - img [ref=e192]
            - generic [ref=e193]: Toys, baby..
        - link "Food & Health" [ref=e198]:
          - /url: /fnhc-2025-new-at-store
          - generic [ref=e200]:
            - img [ref=e203]
            - generic [ref=e204]: Food & Health
        - link "Auto Accessories" [ref=e209]:
          - /url: /aa-2025-new-at-store
          - generic [ref=e211]:
            - img [ref=e214]
            - generic [ref=e215]: Auto Accessories
        - link "2 Wheelers" [ref=e220]:
          - /url: /twowheelers-at-store
          - generic [ref=e222]:
            - img [ref=e225]
            - generic [ref=e226]: 2 Wheelers
        - link "Sports & Fitness" [ref=e231]:
          - /url: /sf-inline-2025-at-store
          - generic [ref=e233]:
            - img [ref=e236]
            - generic [ref=e237]: Sports & Fitness
        - link "Books & Media" [ref=e242]:
          - /url: /booksmedia-2025-at-store
          - generic [ref=e244]:
            - img [ref=e247]
            - generic [ref=e248]: Books & Media
        - link "Furniture" [ref=e253]:
          - /url: /india-ka-furniture-studio-inlines-at-store
          - generic [ref=e255]:
            - img [ref=e258]
            - generic [ref=e259]: Furniture
    - generic [ref=e267]:
      - generic [ref=e279]: Early bird sale starts in
      - generic [ref=e294]:
        - link "Image" [ref=e301]:
          - /url: /goat-sale-store?param=106766&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiSUFEIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&nnc=BRE1HIFOPCFL_IAD&BU=Mixed
          - img "Image" [ref=e309]
        - link "Image" [ref=e316]:
          - /url: /infinite-m3-at-store?ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiSUFEIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&nnc=VEKV1JR98WMR_IAD&BU=Mixed
          - img "Image" [ref=e319]
        - link "Image" [ref=e326]:
          - /url: /ai-nova-2-pro-5g/p/itmacb10a3dd51c6?pid=MOBHZ8ZM8BUGCJDQ&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=Q827LNE64LRB_AD&BU=Mixed
          - img "Image" [ref=e329]
        - link "Image" [ref=e336]:
          - /url: /6bo/b5g/~cs-pk1da1cpaa/pr?sid=6bo%2Cb5g&collection-tab-name=Associate+Sponsor&sort=price_asc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=6LVVJHNVIUXK_AD&BU=Mixed
          - img "Image" [ref=e339]
        - link "Image" [ref=e346]:
          - /url: /vivo-t5-pro-5g-glacier-blue-128-gb/p/itma21e2e09d4493?pid=MOBHM4FZVHBWFRHM&marketplace=FLIPKART&lid=LSTMOBHM4FZVHBWFRHMUM8WSE&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=FVDVTZRRJ08N_AD&BU=Mixed
          - img "Image" [ref=e349]
        - link "Image" [ref=e356]:
          - /url: /beauty-and-grooming/~cs-q37rtbg65j/pr?sid=g9b&collection-tab-name=katalyst&sort=recency_desc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=SDB9LMRRX129_AD&BU=Mixed
          - img "Image" [ref=e359]
        - link "Image" [ref=e366]:
          - /url: /ai-nova-2-ultra-5g-black-128-gb/p/itm41a37f63787e9?pid=MOBHHUFDFHBPJJEG&marketplace=FLIPKART&lid=LSTMOBHHUFDFHBPJJEGD85TYH&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=5GVC0DQ8TNFR_AD&BU=Mixed
          - img "Image" [ref=e369]
        - link "Image" [ref=e376]:
          - /url: /beauty-and-grooming/pr?sid=g9b&marketplace=FLIPKART&p%5B%5D=facets.brand%255B%255D%3DDeconstruct&sort=recency_desc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=E4U65ZXI0XFB_AD&BU=Mixed
          - img "Image" [ref=e379]
        - link "Image" [ref=e386]:
          - /url: /beauty-and-grooming/~cs-fli9d0rbpn/pr?sid=g9b&collection-tab-name=Lakme+Sunscreen&pageCriteria=default&sort=recency_desc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=CSLB69PFPVG2_AD&BU=Mixed
          - img "Image" [ref=e389]
        - link "Image" [ref=e396]:
          - /url: /r18/~cs-16n74egf54/pr?sid=r18&collection-tab-name=Vyb&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=OK826KAMNQE1_AD&BU=Mixed
          - img "Image" [ref=e399]
      - link "Image" [ref=e421]:
        - /url: /boltt-smartphone-coming-soon-ads-at-store?ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=MPWO95E8GHD3_AD&BU=Mixed
        - img "Image" [ref=e427]
      - generic [ref=e437]:
        - generic [ref=e441]:
          - img "Image" [ref=e444]
          - generic [ref=e446]:
            - generic [ref=e448]: Trending Gadgets & Appliances
            - link [ref=e449]:
              - /url: /offers-list/recommended-for-you?screen=dynamic&pk=contentTags%3DGCD_THEME_1~marketplace%3DFLIPKART~widgetType%3DdealCardV3~contentType%3DpersonalisedRecommendation%2FC5&marketplace=FLIPKART&BU=Mixed
              - img [ref=e452]
        - generic [ref=e456]:
          - link "Image True Wireless Min. 50% Off" [ref=e461]:
            - /url: https://www.flipkart.com/all/~cs-6ef68bc8d283b86730515a8f2c87ff23/pr?sid=0pm,fcn,821,a7x,2si&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e471]
            - generic [ref=e474]:
              - generic [ref=e475]: True Wireless
              - generic [ref=e476]: Min. 50% Off
          - link "Image Smart Watches Min. 40% Off" [ref=e481]:
            - /url: https://www.flipkart.com/all/~cs-21e789349087c946d1b57cb0a6372ff1/pr?sid=ajy,buh&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e491]
            - generic [ref=e494]:
              - generic [ref=e495]: Smart Watches
              - generic [ref=e496]: Min. 40% Off
          - link "Image Neckband Min. 50% Off" [ref=e501]:
            - /url: https://www.flipkart.com/all/~cs-24370be17271c4e43aff0a751ba9e160/pr?sid=0pm,fcn,821,a7x,2rv&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e511]
            - generic [ref=e514]:
              - generic [ref=e515]: Neckband
              - generic [ref=e516]: Min. 50% Off
          - link "Image Trimmers Min. 50% Off" [ref=e521]:
            - /url: https://www.flipkart.com/all/~cs-fcd986f0a357ac4dbc7f91b70631e4b1/pr?sid=zlw,79s,by3&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e531]
            - generic [ref=e534]:
              - generic [ref=e535]: Trimmers
              - generic [ref=e536]: Min. 50% Off
      - generic [ref=e546]:
        - generic [ref=e550]:
          - img "Image" [ref=e553]
          - generic [ref=e557]: On everybody's list
        - generic [ref=e560]:
          - link "Image Grab Now Under ₹199" [ref=e565]:
            - /url: /all/~cs-cf20393f55174a82f0570aa75ad912b3/pr?sid=4rr%2Ckm5%2Cipq%2Clrv&marketplace=FLIPKART&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJVbmRlciDigrkxOTkiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJwcmljZV9yYW5nZSI6eyJyYW5nZVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJwcmljZV9yYW5nZSIsImluZmVyZW5jZVR5cGUiOiJGQUNFVCIsIm1pbiI6bnVsbCwibWF4IjoxOTkuMCwidmFsdWVUeXBlIjoiUkFOR0VfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJBQ0NITVFSUFhYRUhNMzc1IiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fSwidGl0bGUiOnsibXVsdGlWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoidGl0bGUiLCJpbmZlcmVuY2VUeXBlIjoiVElUTEUiLCJ2YWx1ZXMiOlsiU2NyZWVuIEd1YXJkcyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Mixed
            - img "Image" [ref=e575]
            - generic [ref=e578]:
              - generic [ref=e579]: Grab Now
              - generic [ref=e580]: Under ₹199
          - link "Image Best Deals Top Rated" [ref=e585]:
            - /url: /all/~cs-41d4424ce25f8cd298ac5c1b57a365cd/pr?sid=osp%2Ccil%2Ce83&marketplace=FLIPKART&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJUb3AgUmF0ZWQiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJUb3AgUmF0ZWQiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJTTkRINVo4RUNXNkpCR1lQIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
            - img "Image" [ref=e595]
            - generic [ref=e598]:
              - generic [ref=e599]: Best Deals
              - generic [ref=e600]: Top Rated
          - link "Image Specials Min. 70% Off" [ref=e605]:
            - /url: /all/~cs-52421d5e45fb7e6543367c89c83fc1df/pr?sid=clo%2Cqfl%2Cwp7%2Czpk&marketplace=FLIPKART&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJNaW4uIDcwJSBPZmYiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJWRVNIRlRHMlpKNFhSVk1aIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fSwiZGlzY291bnRfcmFuZ2VfdjEiOnsicmFuZ2VWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoiZGlzY291bnRfcmFuZ2VfdjEiLCJpbmZlcmVuY2VUeXBlIjoiRkFDRVQiLCJtaW4iOjcwLjAsIm1heCI6bnVsbCwidmFsdWVUeXBlIjoiUkFOR0VfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJNZW4ncyBWZXN0cyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Mixed
            - img "Image" [ref=e615]
            - generic [ref=e618]:
              - generic [ref=e619]: Specials
              - generic [ref=e620]: Min. 70% Off
          - link "Image Most Loved Top Rated" [ref=e625]:
            - /url: /all/~cs-c3b66861ed4dee9849a7cafe74c2d8bf/pr?sid=upp%2C5ix%2Ctlu&marketplace=FLIPKART&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJUb3AgUmF0ZWQiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJLUktHWktCNVo3WUNKVE5KIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fSwidGl0bGUiOnsibXVsdGlWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoidGl0bGUiLCJpbmZlcmVuY2VUeXBlIjoiVElUTEUiLCJ2YWx1ZXMiOlsiVG9wIFJhdGVkIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
            - img "Image" [ref=e635]
            - generic [ref=e638]:
              - generic [ref=e639]: Most Loved
              - generic [ref=e640]: Top Rated
      - generic [ref=e650]:
        - generic [ref=e654]: Brands in Spotlight
        - generic [ref=e656]:
          - link "Image" [ref=e661]:
            - /url: /mivi-fort-sonic-900-soundbar-dual-subwoofers-dolby-audio-5-2-channel-w-bluetooth-soundbar/p/itm0f08e9b9a75b2?pid=ACCHE36MYXVCDHGH&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=NXY6OHERPEYD_AD&BU=Mixed
            - img "Image" [ref=e664]
          - link "Image" [ref=e669]:
            - /url: /mivi-fort-sonic-900-soundbar-dual-subwoofers-dolby-audio-5-2-channel-w-bluetooth-soundbar/p/itm0f08e9b9a75b2?pid=ACCGP2HJA3HKHTF4&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=ET7Y3HEHUO66_AD&BU=Mixed
            - img "Image" [ref=e672]
          - link "Image" [ref=e677]:
            - /url: /audio-video/~cs-pkmucaa6rq/pr?sid=0pm&collection-tab-name=Top+deals+on+TRIGGR&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=AH2I8HMMOSPV_AD&BU=Mixed
            - img "Image" [ref=e680]
      - generic [ref=e692]:
        - link "Image" [ref=e697]:
          - /url: /beauty-and-grooming/bath-shower/bath-essentials/body-wash/pr?sid=g9b%2C5nz%2Cb1b%2Cbwa&p%5B%5D=facets.brand%255B%255D%3DDOVE&sort=recency_desc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=XJEALP4SY7HR_AD&BU=Mixed
          - img "Image" [ref=e700]
        - link "Image" [ref=e705]:
          - /url: /beauty-and-grooming/body-face-skin-care/body-and-face-care/face-wash/pr?sid=g9b%2Cema%2C5la%2Cjav&p%5B%5D=facets.brand%255B%255D%3DPOND%2527s&sort=recency_desc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=WQWYBVQYSJUH_AD&BU=Mixed
          - img "Image" [ref=e708]
        - link "Image" [ref=e713]:
          - /url: /beauty-and-grooming/bath-shower/bath-essentials/bath-soap/pr?sid=g9b%2C5nz%2Cb1b%2Cyug&p%5B%5D=facets.brand%255B%255D%3DDOVE&sort=recency_desc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=C0RBQ3TGAUCF_AD&BU=Mixed
          - img "Image" [ref=e716]
      - generic [ref=e726]:
        - generic [ref=e730]:
          - img "Image" [ref=e733]
          - generic [ref=e735]:
            - generic [ref=e737]: Hair & Skincare Essentials
            - link [ref=e738]:
              - /url: /offers-list/recommended-for-you?screen=dynamic&pk=contentTags%3DGCD_THEME_10~marketplace%3DFLIPKART~widgetType%3DdealCardV3~contentType%3DpersonalisedRecommendation%2FC5&marketplace=FLIPKART&BU=Mixed
              - img [ref=e741]
        - generic [ref=e745]:
          - link "Image Face Wash Min. 50% Off" [ref=e750]:
            - /url: https://www.flipkart.com/all/~cs-5ab19791d4f627a2a36b60d5791384ca/pr?sid=g9b,ema,5la,jav&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e760]
            - generic [ref=e763]:
              - generic [ref=e764]: Face Wash
              - generic [ref=e765]: Min. 50% Off
          - link "Image Hair Oil Min. 50% Off" [ref=e770]:
            - /url: https://www.flipkart.com/all/~cs-121af17014a18d5ac2b75291ada07534/pr?sid=g9b,lcf,qqm,fmb&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e780]
            - generic [ref=e783]:
              - generic [ref=e784]: Hair Oil
              - generic [ref=e785]: Min. 50% Off
          - link "Image Bath Soap Min. 50% Off" [ref=e790]:
            - /url: https://www.flipkart.com/all/~cs-2f28bfd1109d541fcdff5420cb6739a7/pr?sid=g9b,5nz,b1b,yug&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e800]
            - generic [ref=e803]:
              - generic [ref=e804]: Bath Soap
              - generic [ref=e805]: Min. 50% Off
          - link "Image Hair Claw Special offer" [ref=e810]:
            - /url: https://www.flipkart.com/all/~cs-e4424a2cdb9ada7b286b12cf5012bd38/pr?sid=g9b,lcf,bjl,zbu&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e820]
            - generic [ref=e823]:
              - generic [ref=e824]: Hair Claw
              - generic [ref=e825]: Special offer
      - generic [ref=e835]:
        - generic [ref=e839]:
          - img "Image" [ref=e842]
          - generic [ref=e846]: Trends you may like
        - generic [ref=e849]:
          - link "Image Oversized" [ref=e855]:
            - /url: https://www.flipkart.com/all/~cs-59af913c045502da40a6962e90e6262e/pr?sid=clo,ash,axc,mmk,kp7&marketplace=FLIPKART&BU=Mixed
            - generic [ref=e856]:
              - img "Image" [ref=e864]
              - generic [ref=e870]: Oversized
          - link "Image Minimalist Decor" [ref=e876]:
            - /url: https://www.flipkart.com/all/~cs-1af96e9c4329222d66a7c702b68e57a8/pr?sid=arb&marketplace=FLIPKART&BU=Mixed
            - generic [ref=e877]:
              - img "Image" [ref=e885]
              - generic [ref=e891]: Minimalist Decor
          - link "Image SquareDial" [ref=e897]:
            - /url: https://www.flipkart.com/all/~cs-5013007b623e3dab5d88c8f2d5e3ff72/pr?sid=r18,f13&marketplace=FLIPKART&BU=Mixed
            - generic [ref=e898]:
              - generic [ref=e904]:
                - generic:
                  - generic:
                    - generic:
                      - generic:
                        - img "Image"
              - generic [ref=e910]: SquareDial
          - link "Image Bodycon" [ref=e916]:
            - /url: https://www.flipkart.com/all/~cs-c7ffcc8170ca3f056769fb88ac16dab5/pr?sid=clo,odx,maj,jhy&marketplace=FLIPKART&BU=Mixed
            - generic [ref=e917]:
              - img "Image" [ref=e925]
              - generic [ref=e931]: Bodycon
      - generic [ref=e941]:
        - generic [ref=e945]: Featured Brands
        - generic [ref=e948]:
          - generic [ref=e949]:
            - link "Image" [ref=e954]:
              - /url: /toys/tricycles-and-rideons/pr?sid=tng%2C2cz&p%5B%5D=facets.brand%255B%255D%3DMiss%2B%2526%2BChief&sort=recency_desc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=H74UO80I3ZA4_AD&BU=Mixed
              - img "Image" [ref=e957]
            - link "Image" [ref=e962]:
              - /url: /beauty-and-grooming/pr?sid=g9b&marketplace=FLIPKART&p%5B%5D=facets.brand%255B%255D%3DDeconstruct&sort=recency_desc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=OSP2LY4YE8LH_AD&BU=Mixed
              - img "Image" [ref=e965]
            - link "Image" [ref=e970]:
              - /url: /toys/~cs-chifnw8bzi/pr?sid=tng&collection-tab-name=baabus&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=99LT1GWGXSQS_AD&BU=Mixed
              - img "Image" [ref=e973]
            - link "Image" [ref=e978]:
              - /url: /beauty-and-grooming/~cs-0n2mk3iblh/pr?sid=g9b&collection-tab-name=Garnier+Range&pageCriteria=default&sort=price_desc&p%5B%5D=facets.brand%255B%255D%3DGarnier%2BMen&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=DCJBRJQASXUS_AD&BU=Mixed
              - img "Image" [ref=e981]
            - link "Image" [ref=e986]:
              - /url: /televisions/~cs-ghemp1vvaa/pr?sid=ckf%2Cczl&collection-tab-name=TCL+T89D+TVs&sort=popularity&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=3VA6YOOHOSF1_AD&BU=Mixed
              - img "Image" [ref=e989]
            - link "Image" [ref=e994]:
              - /url: /air-conditioners/~cs-kn0ixwopnr/pr?sid=j9e%2Cabm%2Cc54&collection-tab-name=Motorola+New+Launched+ACs&pageCriteria=default&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=KQ2ABWZJZGTB_AD&BU=Mixed
              - img "Image" [ref=e997]
          - button [ref=e998]:
            - img [ref=e999]
      - generic [ref=e1004]: Hang on, loading content
      - generic [ref=e1016]:
        - generic [ref=e1017]: Flipkart - Your go-to place for Online Shopping
        - generic [ref=e1018]: +
      - contentinfo [ref=e1019]:
        - generic [ref=e1021]:
          - generic [ref=e1022]:
            - generic [ref=e1023]:
              - generic [ref=e1024]: ABOUT
              - link "Contact Us" [ref=e1025]:
                - /url: /helpcentre?otracker=footer_navlinks
              - link "About Us" [ref=e1026]:
                - /url: https://corporate.flipkart.net/corporate-home
              - link "Careers" [ref=e1027]:
                - /url: https://www.flipkartcareers.com/?otracker=footer_navlinks
              - link "Flipkart Stories" [ref=e1028]:
                - /url: http://stories.flipkart.com/?otracker=footer_navlinks
              - link "Press" [ref=e1029]:
                - /url: http://stories.flipkart.com/category/top-stories/news/
              - link "Corporate Information" [ref=e1030]:
                - /url: /corporate-information
            - generic [ref=e1031]:
              - generic [ref=e1032]: GROUP COMPANIES
              - link "Myntra" [ref=e1033]:
                - /url: https://www.myntra.com/
              - link "Cleartrip" [ref=e1034]:
                - /url: https://www.cleartrip.com/
              - link "Shopsy" [ref=e1035]:
                - /url: https://www.shopsy.in
            - generic [ref=e1036]:
              - generic [ref=e1037]: HELP
              - link "Payments" [ref=e1038]:
                - /url: /pages/payments
              - link "Shipping" [ref=e1039]:
                - /url: /pages/shipping
              - link "Cancellation & Returns" [ref=e1040]:
                - /url: /helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG
              - link "FAQ" [ref=e1041]:
                - /url: /helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG
            - generic [ref=e1042]:
              - generic [ref=e1043]: CONSUMER POLICY
              - link "Cancellation & Returns" [ref=e1044]:
                - /url: /pages/returnpolicy?otracker=footer_navlinks
              - link "Terms Of Use" [ref=e1045]:
                - /url: /pages/terms?otracker=footer_navlinks
              - link "Security" [ref=e1046]:
                - /url: /pages/paymentsecurity?otracker=footer_navlinks
              - link "Privacy" [ref=e1047]:
                - /url: /pages/privacypolicy?otracker=footer_navlinks
              - link "Sitemap" [ref=e1048]:
                - /url: /sitemap?otracker=footer_navlinks
              - link "Grievance Redressal" [ref=e1049]:
                - /url: /pages/grievance-redressal-mechanism?otracker=footer_navlinks
              - link "EPR Compliance" [ref=e1050]:
                - /url: /pages/ewaste-compliance-tnc?otracker=footer_navlinks
              - link "FSSAI Food Safety Connect App" [ref=e1051]:
                - /url: https://fssai.gov.in/cms/food-safety-connect.php
            - generic [ref=e1052]:
              - generic [ref=e1053]: "Mail Us:"
              - generic [ref=e1054]:
                - paragraph [ref=e1055]: Flipkart Internet Private Limited,
                - paragraph [ref=e1056]: Buildings Alyssa, Begonia &
                - paragraph [ref=e1057]: Clove Embassy Tech Village,
                - paragraph [ref=e1058]: Outer Ring Road, Devarabeesanahalli Village,
                - paragraph [ref=e1059]: Bengaluru, 560103,
                - paragraph [ref=e1060]: Karnataka, India
              - generic [ref=e1061]: "Social:"
              - generic [ref=e1062]:
                - link "Facebook" [ref=e1064]:
                  - /url: https://www.facebook.com/flipkart
                  - img "Facebook" [ref=e1065]
                - link "Twitter" [ref=e1067]:
                  - /url: https://www.twitter.com/flipkart
                  - img "Twitter" [ref=e1068]
                - link "YouTube" [ref=e1070]:
                  - /url: https://www.youtube.com/flipkart
                  - img "YouTube" [ref=e1071]
                - link "Instagram" [ref=e1073]:
                  - /url: https://www.instagram.com/flipkart
                  - img "Instagram" [ref=e1074]
            - generic [ref=e1075]:
              - generic [ref=e1076]: "Registered Office Address:"
              - generic [ref=e1077]:
                - paragraph [ref=e1078]: Flipkart Internet Private Limited,
                - paragraph [ref=e1079]: Buildings Alyssa, Begonia &
                - paragraph [ref=e1080]: Clove Embassy Tech Village,
                - paragraph [ref=e1081]: Outer Ring Road, Devarabeesanahalli Village,
                - paragraph [ref=e1082]: Bengaluru, 560103,
                - paragraph [ref=e1083]: Karnataka, India
                - paragraph [ref=e1084]: "CIN : U51109KA2012PTC066107"
                - paragraph
                - paragraph [ref=e1085]:
                  - text: "Telephone:"
                  - link "044-45614700" [ref=e1086]:
                    - /url: tel:044-45614700
                  - text: /
                  - link "044-67415800" [ref=e1087]:
                    - /url: tel:044-67415800
          - generic [ref=e1088]:
            - generic [ref=e1089]:
              - img "Become a Seller" [ref=e1090]
              - link "Become a Seller" [ref=e1091]:
                - /url: https://seller.flipkart.com/?utm_source=fkwebsite&utm_medium=websitedirect
            - generic [ref=e1092]:
              - img "Advertise" [ref=e1093]
              - generic "Advertise" [ref=e1094]
            - generic [ref=e1095]:
              - img "Gift Cards" [ref=e1096]
              - link "Gift Cards" [ref=e1097]:
                - /url: /the-gift-card-store?otracker=footer_navlinks
            - generic [ref=e1098]:
              - img "Help Center" [ref=e1099]
              - link "Help Center" [ref=e1100]:
                - /url: /helpcentre?otracker=footer_navlinks
            - generic [ref=e1101]: © 2007-2026 Flipkart.com
            - img "Payment methods"
  - contentinfo
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | // Local lightweight BaseClass to avoid module resolution errors for the external file.
  4  | // Keeps the same API used in this spec (constructor(page) and async fill(locator, text)).
  5  | class BaseClass {
  6  |   page: any;
  7  |   constructor(page: any) {
  8  |     this.page = page;
  9  |   }
  10 |   async fill(locator: { fill: (s: string) => Promise<void> }, text: string) {
> 11 |     await locator.fill(text);
     |                   ^ Error: locator.fill: Error: strict mode violation: getByText('Flipkart') resolved to 25 elements:
  12 |   }
  13 | }
  14 | 
  15 | 
  16 | 
  17 | // test('has title', async ({ page }) => {
  18 | //   await page.goto('https://playwright.dev/');
  19 | 
  20 | //   // Expect a title "to contain" a substring.
  21 | //   await expect(page).toHaveTitle(/Playwright/);
  22 | // });
  23 | 
  24 | // test('get started link', async ({ page }) => {
  25 | //   await page.goto('https://playwright.dev/');
  26 | 
  27 | //   // Click the get started link.
  28 | //   await page.getByRole('link', { name: 'Get started' }).click();
  29 | 
  30 | //   // Expects page to have a heading with the name of Installation.
  31 | //   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  32 | // });
  33 | test("Sample", async ({ page }) => {
  34 |   await page.goto("https://www.flipkart.com/");
  35 |   const baseClass = new BaseClass(page);
  36 |   
  37 |   const locator = page.getByText("Flipkart");
  38 |   await baseClass.fill(locator, "Hello");
  39 | });
  40 | 
```