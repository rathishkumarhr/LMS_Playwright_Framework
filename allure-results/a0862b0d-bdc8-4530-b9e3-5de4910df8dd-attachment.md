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
- generic [ref=e1]:
  - generic [ref=e13]:
    - generic [ref=e16]:
      - generic [ref=e18]:
        - generic [ref=e27]:
          - generic [ref=e29]:
            - img "Image" [ref=e32]
            - img "Image" [ref=e35]
          - link "Image Image" [ref=e37] [cursor=pointer]:
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
          - generic [ref=e84]:
            - generic [ref=e86]:
              - link "Login" [ref=e87] [cursor=pointer]:
                - /url: /account/login?ret=/
                - img "Login" [ref=e88]
                - generic [ref=e89]: Login
              - img "Chevron" [ref=e90]
            - link "Login" [ref=e94] [cursor=pointer]:
              - /url: /account/login?ret=/
          - generic [ref=e99]:
            - link "More" [ref=e100] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e101]: More
            - img "Chevron" [ref=e102]
          - link "Cart Cart" [ref=e105] [cursor=pointer]:
            - /url: /viewcart?marketplace=FLIPKART
            - img "Cart" [ref=e106]
            - generic [ref=e107]: Cart
      - generic [ref=e109]:
        - link "For You" [ref=e114] [cursor=pointer]:
          - /url: https://www.flipkart.com/
          - generic [ref=e116]:
            - img [ref=e119]
            - generic [ref=e120]: For You
        - link "Fashion" [ref=e125] [cursor=pointer]:
          - /url: /aw-base-new-inline-2025-at-store
          - generic [ref=e127]:
            - img [ref=e130]
            - generic [ref=e131]: Fashion
        - link "Mobiles" [ref=e136] [cursor=pointer]:
          - /url: /mobile-phones-store
          - generic [ref=e138]:
            - img [ref=e141]
            - generic [ref=e142]: Mobiles
        - link "Beauty" [ref=e147] [cursor=pointer]:
          - /url: /bpc-bau-new-inline-at-store
          - generic [ref=e149]:
            - img [ref=e152]
            - generic [ref=e153]: Beauty
        - link "Electronics" [ref=e158] [cursor=pointer]:
          - /url: /new-elec-clp-march-at-store
          - generic [ref=e160]:
            - img [ref=e163]
            - generic [ref=e164]: Electronics
        - link "Home" [ref=e169] [cursor=pointer]:
          - /url: /home-kitchen-25-at-store
          - generic [ref=e171]:
            - img [ref=e174]
            - generic [ref=e175]: Home
        - link "Appliances" [ref=e180] [cursor=pointer]:
          - /url: /tv-and-appliances-inline-ab-at-store
          - generic [ref=e182]:
            - img [ref=e185]
            - generic [ref=e186]: Appliances
        - link "Toys, baby.." [ref=e191] [cursor=pointer]:
          - /url: /toys-baby-2025-new-at-store
          - generic [ref=e193]:
            - img [ref=e196]
            - generic [ref=e197]: Toys, baby..
        - link "Food & Health" [ref=e202] [cursor=pointer]:
          - /url: /fnhc-2025-new-at-store
          - generic [ref=e204]:
            - img [ref=e207]
            - generic [ref=e208]: Food & Health
        - link "Auto Accessories" [ref=e213] [cursor=pointer]:
          - /url: /aa-2025-new-at-store
          - generic [ref=e215]:
            - img [ref=e218]
            - generic [ref=e219]: Auto Accessories
        - link "2 Wheelers" [ref=e224] [cursor=pointer]:
          - /url: /twowheelers-at-store
          - generic [ref=e226]:
            - img [ref=e229]
            - generic [ref=e230]: 2 Wheelers
        - link "Sports & Fitness" [ref=e235] [cursor=pointer]:
          - /url: /sf-inline-2025-at-store
          - generic [ref=e237]:
            - img [ref=e240]
            - generic [ref=e241]: Sports & Fitness
        - link "Books & Media" [ref=e246] [cursor=pointer]:
          - /url: /booksmedia-2025-at-store
          - generic [ref=e248]:
            - img [ref=e251]
            - generic [ref=e252]: Books & Media
        - link "Furniture" [ref=e257] [cursor=pointer]:
          - /url: /india-ka-furniture-studio-inlines-at-store
          - generic [ref=e259]:
            - img [ref=e262]
            - generic [ref=e263]: Furniture
    - generic [ref=e271]:
      - generic [ref=e283]: Early bird sale starts in
      - generic [ref=e298]:
        - link "Image" [ref=e305] [cursor=pointer]:
          - /url: /goat-sale-store?param=106766&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiSUFEIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&nnc=BRE1HIFOPCFL_IAD&BU=Mixed
          - img "Image" [ref=e313]
        - link "Image" [ref=e320] [cursor=pointer]:
          - /url: /infinite-m3-at-store?ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiSUFEIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&nnc=VEKV1JR98WMR_IAD&BU=Mixed
          - img "Image" [ref=e323]
        - link "Image" [ref=e330] [cursor=pointer]:
          - /url: /ai-nova-2-pro-5g/p/itmacb10a3dd51c6?pid=MOBHZ8ZM8BUGCJDQ&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=Q827LNE64LRB_AD&BU=Mixed
          - img "Image" [ref=e333]
        - link "Image" [ref=e340] [cursor=pointer]:
          - /url: /6bo/b5g/~cs-pk1da1cpaa/pr?sid=6bo%2Cb5g&collection-tab-name=Associate+Sponsor&sort=price_asc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=6LVVJHNVIUXK_AD&BU=Mixed
          - img "Image" [ref=e343]
        - link "Image" [ref=e350] [cursor=pointer]:
          - /url: /vivo-t5-pro-5g-glacier-blue-128-gb/p/itma21e2e09d4493?pid=MOBHM4FZVHBWFRHM&marketplace=FLIPKART&lid=LSTMOBHM4FZVHBWFRHMUM8WSE&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=FVDVTZRRJ08N_AD&BU=Mixed
          - img "Image" [ref=e353]
        - link "Image" [ref=e360] [cursor=pointer]:
          - /url: /beauty-and-grooming/~cs-q37rtbg65j/pr?sid=g9b&collection-tab-name=katalyst&sort=recency_desc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=53VITDA84633_AD&BU=Mixed
          - img "Image" [ref=e363]
        - link "Image" [ref=e370] [cursor=pointer]:
          - /url: /ai-nova-2-ultra-5g-black-128-gb/p/itm41a37f63787e9?pid=MOBHHUFDFHBPJJEG&marketplace=FLIPKART&lid=LSTMOBHHUFDFHBPJJEGD85TYH&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=5GVC0DQ8TNFR_AD&BU=Mixed
          - img "Image" [ref=e373]
        - link "Image" [ref=e380] [cursor=pointer]:
          - /url: /beauty-and-grooming/pr?sid=g9b&marketplace=FLIPKART&p%5B%5D=facets.brand%255B%255D%3DDeconstruct&sort=recency_desc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=E4U65ZXI0XFB_AD&BU=Mixed
          - img "Image" [ref=e383]
        - link "Image" [ref=e390] [cursor=pointer]:
          - /url: /beauty-and-grooming/~cs-fli9d0rbpn/pr?sid=g9b&collection-tab-name=Lakme+Sunscreen&pageCriteria=default&sort=recency_desc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=CSLB69PFPVG2_AD&BU=Mixed
          - img "Image" [ref=e393]
        - link "Image" [ref=e400] [cursor=pointer]:
          - /url: /reh/plk/tvv/~cs-8wx7y4kfr7/pr?sid=reh%2Cplk%2Ctvv&collection-tab-name=Trolley+Bags&pageCriteria=default&p%5B%5D=facets.brand%255B%255D%3DHRX&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=15ALW6YKTBAT_AD&BU=Mixed
          - img "Image" [ref=e403]
      - link "Image" [ref=e425] [cursor=pointer]:
        - /url: /boltt-smartphone-coming-soon-ads-at-store?ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=MPWO95E8GHD3_AD&BU=Mixed
        - img "Image" [ref=e431]
      - generic [ref=e441]:
        - generic [ref=e445]:
          - img "Image" [ref=e448]
          - generic [ref=e450]:
            - generic [ref=e452]: Trending Gadgets & Appliances
            - link [ref=e453] [cursor=pointer]:
              - /url: /offers-list/recommended-for-you?screen=dynamic&pk=contentTags%3DGCD_THEME_1~marketplace%3DFLIPKART~widgetType%3DdealCardV3~contentType%3DpersonalisedRecommendation%2FC5&marketplace=FLIPKART&BU=Mixed
              - img [ref=e456]
        - generic [ref=e460]:
          - link "Image True Wireless Min. 50% Off" [ref=e465] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-6ef68bc8d283b86730515a8f2c87ff23/pr?sid=0pm,fcn,821,a7x,2si&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e475]
            - generic [ref=e478]:
              - generic [ref=e479]: True Wireless
              - generic [ref=e480]: Min. 50% Off
          - link "Image Smart Watches Min. 40% Off" [ref=e485] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-21e789349087c946d1b57cb0a6372ff1/pr?sid=ajy,buh&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e495]
            - generic [ref=e498]:
              - generic [ref=e499]: Smart Watches
              - generic [ref=e500]: Min. 40% Off
          - link "Image Neckband Min. 50% Off" [ref=e505] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-24370be17271c4e43aff0a751ba9e160/pr?sid=0pm,fcn,821,a7x,2rv&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e515]
            - generic [ref=e518]:
              - generic [ref=e519]: Neckband
              - generic [ref=e520]: Min. 50% Off
          - link "Image Trimmers Min. 50% Off" [ref=e525] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-fcd986f0a357ac4dbc7f91b70631e4b1/pr?sid=zlw,79s,by3&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e535]
            - generic [ref=e538]:
              - generic [ref=e539]: Trimmers
              - generic [ref=e540]: Min. 50% Off
      - generic [ref=e550]:
        - generic [ref=e554]:
          - img "Image" [ref=e557]
          - generic [ref=e561]: Widest collection
        - generic [ref=e564]:
          - link "Image Shop now From ₹299" [ref=e569] [cursor=pointer]:
            - /url: /womens-ethnic-sets/pr?sid=clo%2Ccfv%2Citg%2Ctys&sort=popularity&p%5B%5D=facets.pattern%255B%255D%3DEmbroidered&p%5B%5D=facets.price_range.from%3D299&p%5B%5D=facets.price_range.to%3DMax&Param=54711&hpid=hHYMAnA4Ps7KRrEuOnW-fqp7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTI5OSJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sImhlcm9QaWQiOnsic2luZ2xlVmFsdWVBdHRyaWJ1dGUiOnsia2V5IjoiaGVyb1BpZCIsImluZmVyZW5jZVR5cGUiOiJQSUQiLCJ2YWx1ZSI6IkVUSEhFSFpWU0hFWkVURlQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJFbWJyb2lkZXJlZCBzZXRzIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
            - img "Image" [ref=e579]
            - generic [ref=e582]:
              - generic [ref=e583]: Shop now
              - generic [ref=e584]: From ₹299
          - link "Image Eveready, Wipro & More From ₹89" [ref=e589] [cursor=pointer]:
            - /url: /home-lighting/utility-lighting/torches/pr?sid=jhg%2Cyqn%2Cdb9&p%5B%5D=facets.rating%255B%255D%3D3%25E2%2598%2585%2B%2526%2Babove&hpid=Az6d2hhzukqaT7dGbDwRjqp7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTg5Il0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwiaGVyb1BpZCI6eyJzaW5nbGVWYWx1ZUF0dHJpYnV0ZSI6eyJrZXkiOiJoZXJvUGlkIiwiaW5mZXJlbmNlVHlwZSI6IlBJRCIsInZhbHVlIjoiVE9IR1RSNjZEOEVHVFZDVSIsInZhbHVlVHlwZSI6IlNJTkdMRV9WQUxVRUQifX0sInRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIlRvcmNoZXMiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&BU=Mixed
            - img "Image" [ref=e599]
            - generic [ref=e602]:
              - generic [ref=e603]: Eveready, Wipro & More
              - generic [ref=e604]: From ₹89
          - link "Image Sports Shoes Flat 85% off Flat 85% off" [ref=e609] [cursor=pointer]:
            - /url: /osp/cil/1cu/~cs-0tfku3pt4w/pr?sid=osp%2Ccil%2C1cu&collection-tab-name=Footwear&pageCriteria=default&param=5678&hpid=hlr7k7HEBXJAbU5mqBd-MKp7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGbGF0IDg1JSBvZmYiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJTSE9INEQ0VFREWU1EUUFRIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fSwidGl0bGUiOnsibXVsdGlWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoidGl0bGUiLCJpbmZlcmVuY2VUeXBlIjoiVElUTEUiLCJ2YWx1ZXMiOlsiU3BvcnRzIFNob2VzIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
            - img "Image" [ref=e619]
            - generic [ref=e622]:
              - generic [ref=e623]: Sports Shoes Flat 85% off
              - generic [ref=e624]: Flat 85% off
          - link "Image Men's Shoes, Sandals... Min. 40% Off" [ref=e629] [cursor=pointer]:
            - /url: /mens-footwear/pr?sid=osp%2Ccil&p%5B%5D=facets.brand%255B%255D%3DRED%2BTAPE&p%5B%5D=facets.brand%255B%255D%3DBata&p%5B%5D=facets.brand%255B%255D%3DSparx&p%5B%5D=facets.brand%255B%255D%3DWOODLAND&p%5B%5D=facets.brand%255B%255D%3Daction&p%5B%5D=facets.brand%255B%255D%3DCROCS&p%5B%5D=facets.brand%255B%255D%3DAbros&p%5B%5D=facets.brand%255B%255D%3DU.S.%2BPOLO%2BASSN.&p%5B%5D=facets.brand%255B%255D%3DKILLER&p%5B%5D=facets.brand%255B%255D%3DLIBERTY&p%5B%5D=facets.brand%255B%255D%3DWildcraft&p%5B%5D=facets.discount_range_v1%255B%255D%3D40%2525%2Bor%2Bmore&param=74&hpid=C45k30ErTVUmzyHVajTXOap7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJNaW4uIDQwJSBPZmYiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJTRkZHTVJZUFJGUkVIWU5XIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fSwidGl0bGUiOnsibXVsdGlWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoidGl0bGUiLCJpbmZlcmVuY2VUeXBlIjoiVElUTEUiLCJ2YWx1ZXMiOlsiQ3JvY3MsIFVTUEEuLi4iXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&BU=Mixed
            - img "Image" [ref=e639]
            - generic [ref=e642]:
              - generic [ref=e643]: Men's Shoes, Sandals...
              - generic [ref=e644]: Min. 40% Off
      - generic [ref=e654]:
        - generic [ref=e658]: Brands in Spotlight
        - generic [ref=e660]:
          - link "Image" [ref=e665] [cursor=pointer]:
            - /url: /mivi-fort-sonic-900-soundbar-dual-subwoofers-dolby-audio-5-2-channel-w-bluetooth-soundbar/p/itm0f08e9b9a75b2?pid=ACCHE36MYXVCDHGH&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=NXY6OHERPEYD_AD&BU=Mixed
            - img "Image" [ref=e668]
          - link "Image" [ref=e673] [cursor=pointer]:
            - /url: /mivi-fort-sonic-900-soundbar-dual-subwoofers-dolby-audio-5-2-channel-w-bluetooth-soundbar/p/itm0f08e9b9a75b2?pid=ACCHDYCG2YGBWHQF&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=A23S61ZXZ3TZ_AD&BU=Mixed
            - img "Image" [ref=e676]
          - link "Image" [ref=e681] [cursor=pointer]:
            - /url: /audio-video/~cs-pkmucaa6rq/pr?sid=0pm&collection-tab-name=Top+deals+on+TRIGGR&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=AH2I8HMMOSPV_AD&BU=Mixed
            - img "Image" [ref=e684]
      - generic [ref=e696]:
        - link "Image" [ref=e701] [cursor=pointer]:
          - /url: /beauty-and-grooming/body-face-skin-care/body-and-face-care/face-wash/pr?sid=g9b%2Cema%2C5la%2Cjav&p%5B%5D=facets.brand%255B%255D%3DPOND%2527s&sort=recency_desc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=WQWYBVQYSJUH_AD&BU=Mixed
          - img "Image" [ref=e704]
        - link "Image" [ref=e709] [cursor=pointer]:
          - /url: /home-improvement/~cs-tr4yz6c3pc/pr?sid=h1m&collection-tab-name=Plantex&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=Q5WF0JA1CBYV_AD&BU=Mixed
          - img "Image" [ref=e712]
        - link "Image" [ref=e717] [cursor=pointer]:
          - /url: /beauty-and-grooming/bath-shower/bath-essentials/body-wash/pr?sid=g9b%2C5nz%2Cb1b%2Cbwa&p%5B%5D=facets.brand%255B%255D%3DDOVE&sort=recency_desc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=XJEALP4SY7HR_AD&BU=Mixed
          - img "Image" [ref=e720]
      - generic [ref=e730]:
        - generic [ref=e734]:
          - img "Image" [ref=e737]
          - generic [ref=e739]:
            - generic [ref=e741]: Hair & Skincare Essentials
            - link [ref=e742] [cursor=pointer]:
              - /url: /offers-list/recommended-for-you?screen=dynamic&pk=contentTags%3DGCD_THEME_10~marketplace%3DFLIPKART~widgetType%3DdealCardV3~contentType%3DpersonalisedRecommendation%2FC5&marketplace=FLIPKART&BU=Mixed
              - img [ref=e745]
        - generic [ref=e749]:
          - link "Image Face Wash Min. 50% Off" [ref=e754] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-5ab19791d4f627a2a36b60d5791384ca/pr?sid=g9b,ema,5la,jav&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e764]
            - generic [ref=e767]:
              - generic [ref=e768]: Face Wash
              - generic [ref=e769]: Min. 50% Off
          - link "Image Hair Oil Min. 50% Off" [ref=e774] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-121af17014a18d5ac2b75291ada07534/pr?sid=g9b,lcf,qqm,fmb&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e784]
            - generic [ref=e787]:
              - generic [ref=e788]: Hair Oil
              - generic [ref=e789]: Min. 50% Off
          - link "Image Bath Soap Min. 50% Off" [ref=e794] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-2f28bfd1109d541fcdff5420cb6739a7/pr?sid=g9b,5nz,b1b,yug&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e804]
            - generic [ref=e807]:
              - generic [ref=e808]: Bath Soap
              - generic [ref=e809]: Min. 50% Off
          - link "Image Hair Claw Special offer" [ref=e814] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-e4424a2cdb9ada7b286b12cf5012bd38/pr?sid=g9b,lcf,bjl,zbu&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e824]
            - generic [ref=e827]:
              - generic [ref=e828]: Hair Claw
              - generic [ref=e829]: Special offer
      - generic [ref=e839]:
        - generic [ref=e843]:
          - img "Image" [ref=e846]
          - generic [ref=e848]:
            - generic [ref=e850]: Fashion's Top Deals
            - link [ref=e851] [cursor=pointer]:
              - /url: /offers-list/recommended-for-you?screen=dynamic&pk=contentTags%3DGCD_THEME_3~marketplace%3DFLIPKART~widgetType%3DdealCardV3~contentType%3DpersonalisedRecommendation%2FC5&marketplace=FLIPKART&BU=Mixed
              - img [ref=e854]
        - generic [ref=e858]:
          - link "Image Men’s Slippers & Flip Flops Min. 70% Off" [ref=e863] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-79e42ad52149a075d0a3b31f35294baa/pr?sid=osp,cil,e1r&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e873]
            - generic [ref=e876]:
              - generic [ref=e877]: Men’s Slippers & Flip Flops
              - generic [ref=e878]: Min. 70% Off
          - link "Image Men’s Casual Shoes Min. 70% Off" [ref=e883] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-28462d7669ffdf82990baaadbb6225e0/pr?sid=osp,cil,e1f&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e893]
            - generic [ref=e896]:
              - generic [ref=e897]: Men’s Casual Shoes
              - generic [ref=e898]: Min. 70% Off
          - link "Image Men’s Sandals & Floaters Min. 70% Off" [ref=e903] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-7a04c87a03d025d968662615918edf2d/pr?sid=osp,cil,e83&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e913]
            - generic [ref=e916]:
              - generic [ref=e917]: Men’s Sandals & Floaters
              - generic [ref=e918]: Min. 70% Off
          - link "Image Men’s Sports Shoes Min. 70% Off" [ref=e923] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-6f5af2c6fd4068ce713d184f1481cd2b/pr?sid=osp,cil,1cu&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e933]
            - generic [ref=e936]:
              - generic [ref=e937]: Men’s Sports Shoes
              - generic [ref=e938]: Min. 70% Off
      - generic [ref=e948]:
        - generic [ref=e952]: Featured Brands
        - generic [ref=e955]:
          - generic [ref=e956]:
            - link "Image" [ref=e961] [cursor=pointer]:
              - /url: /beauty-and-grooming/pr?sid=g9b&marketplace=FLIPKART&p%5B%5D=facets.brand%255B%255D%3DDeconstruct&sort=recency_desc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=OSP2LY4YE8LH_AD&BU=Mixed
              - img "Image" [ref=e964]
            - link "Image" [ref=e969] [cursor=pointer]:
              - /url: /toys/tricycles-and-rideons/pr?sid=tng%2C2cz&p%5B%5D=facets.brand%255B%255D%3DMiss%2B%2526%2BChief&sort=recency_desc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=0F7ARPP3Y8V0_AD&BU=Mixed
              - img "Image" [ref=e972]
            - link "Image" [ref=e977] [cursor=pointer]:
              - /url: /toys/~cs-chifnw8bzi/pr?sid=tng&collection-tab-name=baabus&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=JEG8S7L3XJ8M_AD&BU=Mixed
              - img "Image" [ref=e980]
            - link "Image" [ref=e985] [cursor=pointer]:
              - /url: /beauty-and-grooming/~cs-0n2mk3iblh/pr?sid=g9b&collection-tab-name=Garnier+Range&pageCriteria=default&sort=price_desc&p%5B%5D=facets.brand%255B%255D%3DGarnier%2BMen&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=DCJBRJQASXUS_AD&BU=Mixed
              - img "Image" [ref=e988]
            - link "Image" [ref=e993] [cursor=pointer]:
              - /url: /televisions/~cs-ghemp1vvaa/pr?sid=ckf%2Cczl&collection-tab-name=TCL+T89D+TVs&sort=popularity&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=1U00RKDL36S9_AD&BU=Mixed
              - img "Image" [ref=e996]
            - link "Image" [ref=e1001] [cursor=pointer]:
              - /url: /televisions/~cs-yvd7lb1f9f/pr?sid=ckf%2Cczl&collection-tab-name=Motorola+TVs&pageCriteria=default&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=9QM23X7RIMU6_AD&BU=Mixed
              - img "Image" [ref=e1004]
          - button [ref=e1005]:
            - img [ref=e1006]
      - generic [ref=e1011]: Hang on, loading content
      - generic [ref=e1023]:
        - generic [ref=e1024]: Flipkart - Your go-to place for Online Shopping
        - generic [ref=e1025]: +
      - contentinfo [ref=e1026]:
        - generic [ref=e1028]:
          - generic [ref=e1029]:
            - generic [ref=e1030]:
              - generic [ref=e1031]: ABOUT
              - link "Contact Us" [ref=e1032] [cursor=pointer]:
                - /url: /helpcentre?otracker=footer_navlinks
              - link "About Us" [ref=e1033] [cursor=pointer]:
                - /url: https://corporate.flipkart.net/corporate-home
              - link "Careers" [ref=e1034] [cursor=pointer]:
                - /url: https://www.flipkartcareers.com/?otracker=footer_navlinks
              - link "Flipkart Stories" [ref=e1035] [cursor=pointer]:
                - /url: http://stories.flipkart.com/?otracker=footer_navlinks
              - link "Press" [ref=e1036] [cursor=pointer]:
                - /url: http://stories.flipkart.com/category/top-stories/news/
              - link "Corporate Information" [ref=e1037] [cursor=pointer]:
                - /url: /corporate-information
            - generic [ref=e1038]:
              - generic [ref=e1039]: GROUP COMPANIES
              - link "Myntra" [ref=e1040] [cursor=pointer]:
                - /url: https://www.myntra.com/
              - link "Cleartrip" [ref=e1041] [cursor=pointer]:
                - /url: https://www.cleartrip.com/
              - link "Shopsy" [ref=e1042] [cursor=pointer]:
                - /url: https://www.shopsy.in
            - generic [ref=e1043]:
              - generic [ref=e1044]: HELP
              - link "Payments" [ref=e1045] [cursor=pointer]:
                - /url: /pages/payments
              - link "Shipping" [ref=e1046] [cursor=pointer]:
                - /url: /pages/shipping
              - link "Cancellation & Returns" [ref=e1047] [cursor=pointer]:
                - /url: /helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG
              - link "FAQ" [ref=e1048] [cursor=pointer]:
                - /url: /helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG
            - generic [ref=e1049]:
              - generic [ref=e1050]: CONSUMER POLICY
              - link "Cancellation & Returns" [ref=e1051] [cursor=pointer]:
                - /url: /pages/returnpolicy?otracker=footer_navlinks
              - link "Terms Of Use" [ref=e1052] [cursor=pointer]:
                - /url: /pages/terms?otracker=footer_navlinks
              - link "Security" [ref=e1053] [cursor=pointer]:
                - /url: /pages/paymentsecurity?otracker=footer_navlinks
              - link "Privacy" [ref=e1054] [cursor=pointer]:
                - /url: /pages/privacypolicy?otracker=footer_navlinks
              - link "Sitemap" [ref=e1055] [cursor=pointer]:
                - /url: /sitemap?otracker=footer_navlinks
              - link "Grievance Redressal" [ref=e1056] [cursor=pointer]:
                - /url: /pages/grievance-redressal-mechanism?otracker=footer_navlinks
              - link "EPR Compliance" [ref=e1057] [cursor=pointer]:
                - /url: /pages/ewaste-compliance-tnc?otracker=footer_navlinks
              - link "FSSAI Food Safety Connect App" [ref=e1058] [cursor=pointer]:
                - /url: https://fssai.gov.in/cms/food-safety-connect.php
            - generic [ref=e1059]:
              - generic [ref=e1060]: "Mail Us:"
              - generic [ref=e1061]:
                - paragraph [ref=e1062]: Flipkart Internet Private Limited,
                - paragraph [ref=e1063]: Buildings Alyssa, Begonia &
                - paragraph [ref=e1064]: Clove Embassy Tech Village,
                - paragraph [ref=e1065]: Outer Ring Road, Devarabeesanahalli Village,
                - paragraph [ref=e1066]: Bengaluru, 560103,
                - paragraph [ref=e1067]: Karnataka, India
              - generic [ref=e1068]: "Social:"
              - generic [ref=e1069]:
                - link "Facebook" [ref=e1071] [cursor=pointer]:
                  - /url: https://www.facebook.com/flipkart
                  - img "Facebook" [ref=e1072]
                - link "Twitter" [ref=e1074] [cursor=pointer]:
                  - /url: https://www.twitter.com/flipkart
                  - img "Twitter" [ref=e1075]
                - link "YouTube" [ref=e1077] [cursor=pointer]:
                  - /url: https://www.youtube.com/flipkart
                  - img "YouTube" [ref=e1078]
                - link "Instagram" [ref=e1080] [cursor=pointer]:
                  - /url: https://www.instagram.com/flipkart
                  - img "Instagram" [ref=e1081]
            - generic [ref=e1082]:
              - generic [ref=e1083]: "Registered Office Address:"
              - generic [ref=e1084]:
                - paragraph [ref=e1085]: Flipkart Internet Private Limited,
                - paragraph [ref=e1086]: Buildings Alyssa, Begonia &
                - paragraph [ref=e1087]: Clove Embassy Tech Village,
                - paragraph [ref=e1088]: Outer Ring Road, Devarabeesanahalli Village,
                - paragraph [ref=e1089]: Bengaluru, 560103,
                - paragraph [ref=e1090]: Karnataka, India
                - paragraph [ref=e1091]: "CIN : U51109KA2012PTC066107"
                - paragraph
                - paragraph [ref=e1092]:
                  - text: "Telephone:"
                  - link "044-45614700" [ref=e1093] [cursor=pointer]:
                    - /url: tel:044-45614700
                  - text: /
                  - link "044-67415800" [ref=e1094] [cursor=pointer]:
                    - /url: tel:044-67415800
          - generic [ref=e1095]:
            - generic [ref=e1096]:
              - img "Become a Seller" [ref=e1097]
              - link "Become a Seller" [ref=e1098] [cursor=pointer]:
                - /url: https://seller.flipkart.com/?utm_source=fkwebsite&utm_medium=websitedirect
            - generic [ref=e1099]:
              - img "Advertise" [ref=e1100]
              - generic "Advertise" [ref=e1101]
            - generic [ref=e1102]:
              - img "Gift Cards" [ref=e1103]
              - link "Gift Cards" [ref=e1104] [cursor=pointer]:
                - /url: /the-gift-card-store?otracker=footer_navlinks
            - generic [ref=e1105]:
              - img "Help Center" [ref=e1106]
              - link "Help Center" [ref=e1107] [cursor=pointer]:
                - /url: /helpcentre?otracker=footer_navlinks
            - generic [ref=e1108]: © 2007-2026 Flipkart.com
            - img "Payment methods" [ref=e1109]
  - contentinfo
  - generic [ref=e1111]:
    - button "✕" [ref=e1112] [cursor=pointer]
    - generic [ref=e1114]:
      - generic [ref=e1115]:
        - text: Login
        - paragraph [ref=e1116]: Get access to your Orders, Wishlist and Recommendations
      - generic [ref=e1119]:
        - generic [ref=e1120]:
          - textbox [active] [ref=e1121]
          - generic: Enter Email/Mobile number
        - generic [ref=e1122]:
          - text: By continuing, you agree to Flipkart's
          - link "Terms of Use" [ref=e1123] [cursor=pointer]:
            - /url: /pages/terms
          - text: and
          - link "Privacy Policy" [ref=e1124] [cursor=pointer]:
            - /url: /pages/privacypolicy
          - text: .
        - button "Request OTP" [ref=e1126] [cursor=pointer]
        - link "New to Flipkart? Create an account" [ref=e1128] [cursor=pointer]:
          - /url: /account/login?signup=true
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