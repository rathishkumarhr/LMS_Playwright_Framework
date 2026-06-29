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
      - generic [ref=e282]:
        - link "Image" [ref=e289]:
          - /url: /televisions/~cs-u97e4mc0fb/pr?sid=ckf%2Cczl&collection-tab-name=55+TVs&pageCriteria=default&sort=popularity&param=5490&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiSUFEIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&nnc=11FE79CTTYOP_IAD&BU=Mixed
          - img "Image" [ref=e292]
        - link "Image" [ref=e299]:
          - /url: /infinite-m3-at-store?ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiSUFEIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&nnc=VEKV1JR98WMR_IAD&BU=Mixed
          - img "Image" [ref=e302]
        - link "Image" [ref=e309]:
          - /url: /televisions/~cs-kiawp8qewa/pr?sid=ckf%2Cczl&collection-tab-name=TCL+T6D+TVs&sort=popularity&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=HU6BTNI0D8ZF_AD&BU=Mixed
          - img "Image" [ref=e317]
        - link "Image" [ref=e324]:
          - /url: /realme-p4-5g-steel-grey-128-gb/p/itmf836e6de035a5?pid=MOBHMYR3EJZ8J2ES&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=KVK85EPZB7CQ_AD&BU=Mixed
          - img "Image" [ref=e327]
        - link "Image" [ref=e334]:
          - /url: /nothing-phone-2026-coming-soon-ads-store?ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=HYL7L17UQSVQ_AD&BU=Mixed
          - img "Image" [ref=e337]
        - link "Image" [ref=e344]:
          - /url: /televisions/~cs-ghemp1vvaa/pr?sid=ckf%2Cczl&collection-tab-name=TCL+T89D+TVs&sort=popularity&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=8P70RH4BBK52_AD&BU=Mixed
          - img "Image" [ref=e347]
        - link "Image" [ref=e354]:
          - /url: /beauty-and-grooming/~cs-fli9d0rbpn/pr?sid=g9b&collection-tab-name=Lakme+Sunscreen&pageCriteria=default&sort=recency_desc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=D393TGFRZK9U_AD&BU=Mixed
          - img "Image" [ref=e357]
        - link "Image" [ref=e364]:
          - /url: /g9b/~cs-afujehkyp1/pr?sid=g9b&collection-tab-name=Aqualogica++Sunscreen&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=SQWW7GM5ZEYM_AD&BU=Mixed
          - img "Image" [ref=e367]
        - link "Image" [ref=e374]:
          - /url: /mivi-fort-sonic-900-soundbar-dual-subwoofers-dolby-audio-5-2-channel-w-bluetooth-soundbar/p/itm0f08e9b9a75b2?pid=ACCGNFV3VGRBUHTQ&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=W31IZOTYV7P8_AD&BU=Mixed
          - img "Image" [ref=e377]
        - link "Image" [ref=e384]:
          - /url: /ai-nova-2-pro-5g/p/itmacb10a3dd51c6?pid=MOBHZ8ZM8BUGCJDQ&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=N395Y8C6YSWM_AD&BU=Mixed
          - img "Image" [ref=e387]
      - generic [ref=e411]:
        - generic [ref=e412]:
          - link "Image" [ref=e417]:
            - /url: /6bo/tia/~cs-yo1axxr9dk/pr?sid=6bo%2Ctia&collection-tab-name=Portronics&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=UP9QA4BLMYLQ_AD&BU=Mixed
            - img "Image" [ref=e420]
          - link "Image" [ref=e425]:
            - /url: /a/p/itm1692bd8b2fe84?pid=PRNGNKWWARRFCHZD&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=2GKXADUNEA8B_AD&BU=Mixed
            - img "Image" [ref=e428]
          - link "Image" [ref=e433]:
            - /url: /a/p/itm1692bd8b2fe84?pid=PRNGNKWWF5HGMRF4&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=1VGNGGNUWDXT_AD&BU=Mixed
            - img "Image" [ref=e436]
          - link "Image" [ref=e441]:
            - /url: /g9b/~cs-fli9d0rbpn/pr?sid=g9b&collection-tab-name=Lakme+Sunscreen&pageCriteria=default&sort=recency_desc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=YJ5D9DQRUEQ2_AD&BU=Mixed
            - img "Image" [ref=e444]
          - link "Image" [ref=e449]:
            - /url: /clothing-and-accessories/~cs-fd24hmkah1/pr?sid=clo&collection-tab-name=Rodiez&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=YPCMVCW5Z74Q_AD&BU=Mixed
            - img "Image" [ref=e452]
          - link "Image" [ref=e457]:
            - /url: /beauty-and-grooming/~cs-clxe7uhpwe/pr?sid=g9b&collection-tab-name=CleanClear&sort=recency_desc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=S60NFOWMP8P0_AD&BU=Mixed
            - img "Image" [ref=e460]
          - link "Image" [ref=e465]:
            - /url: /beauty-and-grooming/~cs-yrqf4dh1au/pr?sid=g9b&collection-tab-name=Stayfree&sort=recency_desc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=DS5B6AL6ZKA3_AD&BU=Mixed
            - img "Image" [ref=e468]
          - link "Image" [ref=e473]:
            - /url: /water-purifiers/~cs-u422kk0ajw/pr?sid=j9e%2Cabm%2Ci45&collection-tab-name=KENT+-+WAP+&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=17VXVNM6EROG_AD&BU=Mixed
            - img "Image" [ref=e476]
          - link "Image" [ref=e481]:
            - /url: /beauty-and-grooming/body-face-skin-care/body-and-face-care/face-serums/pr?sid=g9b%2Cema%2C5la%2C8um&p%5B%5D=facets.brand%255B%255D%3DThe%2BDerma%2BCo&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=18B2YQK9JYCP_AD&BU=Mixed
            - img "Image" [ref=e484]
          - link "Image" [ref=e489]:
            - /url: /beauty-and-grooming/~cs-2fdb6ruqmp/pr?sid=g9b&collection-tab-name=Lakme+Facewash&sort=recency_desc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=QT0GQ8ULD8OA_AD&BU=Mixed
            - img "Image" [ref=e492]
        - button [ref=e493]:
          - img [ref=e494]
      - generic [ref=e505]:
        - generic [ref=e509]:
          - img "Image" [ref=e512]
          - generic [ref=e516]: On everybody's list
        - generic [ref=e519]:
          - link "Image Top Deals Special offer" [ref=e524]:
            - /url: /all/~cs-27889dc2e5b4f86d2b0a3b311decaaa8/pr?sid=kyh%2Cie7%2Cwbl&marketplace=FLIPKART&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJTcGVjaWFsIG9mZmVyIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwidGl0bGUiOnsibXVsdGlWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoidGl0bGUiLCJpbmZlcmVuY2VUeXBlIjoiVElUTEUiLCJ2YWx1ZXMiOlsiQnJlYXN0IE5pcHBsZSBDcmVhbXMiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJOSVBIR1BIOEdSUVhaQTNLIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
            - img "Image" [ref=e534]
            - generic [ref=e537]:
              - generic [ref=e538]: Top Deals
              - generic [ref=e539]: Special offer
          - link "Image Top Deals Min. 80% Off" [ref=e544]:
            - /url: /all/~cs-0d3df6346d5b834c8d17617a4860543d/pr?sid=clo%2Ccfv%2Citg%2Ctys&marketplace=FLIPKART&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJNaW4uIDgwJSBPZmYiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJFVEhITUQzTkhFVVlITU1KIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fSwiZGlzY291bnRfcmFuZ2VfdjEiOnsicmFuZ2VWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoiZGlzY291bnRfcmFuZ2VfdjEiLCJpbmZlcmVuY2VUeXBlIjoiRkFDRVQiLCJtaW4iOjgwLjAsIm1heCI6bnVsbCwidmFsdWVUeXBlIjoiUkFOR0VfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJXb21lbidzIEV0aG5pYyBTZXRzIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
            - img "Image" [ref=e554]
            - generic [ref=e557]:
              - generic [ref=e558]: Top Deals
              - generic [ref=e559]: Min. 80% Off
          - link "Image Trending Top Rated" [ref=e564]:
            - /url: /all/~cs-a60be28aae5149c9fa6ea11357d521d6/pr?sid=tng%2C56a%2Cfq8%2Casz&marketplace=FLIPKART&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJUb3AgUmF0ZWQiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJUb3AgUmF0ZWQiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJETkVITkE3UVlHVlNXUDlQIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
            - img "Image" [ref=e574]
            - generic [ref=e577]:
              - generic [ref=e578]: Trending
              - generic [ref=e579]: Top Rated
          - link "Image Bestsellers Top Rated" [ref=e584]:
            - /url: /all/~cs-7f79db756006d0b29a63bbb5283e8721/pr?sid=reh%2Cihu%2Cmf2&marketplace=FLIPKART&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJUb3AgUmF0ZWQiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJUb3AgUmF0ZWQiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJTTEJINE1aN0dNUUREN1JSIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
            - img "Image" [ref=e594]
            - generic [ref=e597]:
              - generic [ref=e598]: Bestsellers
              - generic [ref=e599]: Top Rated
      - generic [ref=e609]:
        - generic [ref=e613]:
          - img "Image" [ref=e616]
          - generic [ref=e618]:
            - generic [ref=e620]: Trending Gadgets & Appliances
            - link [ref=e621]:
              - /url: /offers-list/recommended-for-you?screen=dynamic&pk=contentTags%3DGCD_THEME_1~marketplace%3DFLIPKART~widgetType%3DdealCardV3~contentType%3DpersonalisedRecommendation%2FC5&marketplace=FLIPKART&BU=Mixed
              - img [ref=e624]
        - generic [ref=e628]:
          - link "Image True Wireless Top Collection" [ref=e633]:
            - /url: https://www.flipkart.com/all/~cs-7847646c0fa813bb0b1d71a25db94e79/pr?sid=0pm,fcn,821,a7x,2si&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e643]
            - generic [ref=e646]:
              - generic [ref=e647]: True Wireless
              - generic [ref=e648]: Top Collection
          - link "Image Smart Watches Min. 40% Off" [ref=e653]:
            - /url: https://www.flipkart.com/all/~cs-21e789349087c946d1b57cb0a6372ff1/pr?sid=ajy,buh&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e663]
            - generic [ref=e666]:
              - generic [ref=e667]: Smart Watches
              - generic [ref=e668]: Min. 40% Off
          - link "Image Trimmers Min. 50% Off" [ref=e673]:
            - /url: https://www.flipkart.com/all/~cs-fcd986f0a357ac4dbc7f91b70631e4b1/pr?sid=zlw,79s,by3&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e683]
            - generic [ref=e686]:
              - generic [ref=e687]: Trimmers
              - generic [ref=e688]: Min. 50% Off
          - link "Image Neckband Min. 50% Off" [ref=e693]:
            - /url: https://www.flipkart.com/all/~cs-24370be17271c4e43aff0a751ba9e160/pr?sid=0pm,fcn,821,a7x,2rv&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e703]
            - generic [ref=e706]:
              - generic [ref=e707]: Neckband
              - generic [ref=e708]: Min. 50% Off
      - generic [ref=e718]:
        - generic [ref=e722]: Brands in Spotlight
        - generic [ref=e724]:
          - link "Image" [ref=e729]:
            - /url: /home-kitchen/home-appliances/~cs-audjn7axl5/pr?sid=j9e%2Cabm&collection-tab-name=Air+conditioner&pageCriteria=default&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=0ETERYPCMDQM_AD&BU=Mixed
            - img "Image" [ref=e732]
          - link "Image" [ref=e737]:
            - /url: /air-conditioners/~cs-kn0ixwopnr/pr?sid=j9e%2Cabm%2Cc54&collection-tab-name=Motorola+New+Launched+ACs&pageCriteria=default&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=WEVT66YA6E7A_AD&BU=Mixed
            - img "Image" [ref=e740]
          - link "Image" [ref=e745]:
            - /url: /washing-machines/~cs-l4s0fh5eoo/pr?sid=j9e%2Cabm%2C8qx&collection-tab-name=Top+Deals+Washing+Machine&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=VDEKJ4YWDA7Z_AD&BU=Mixed
            - img "Image" [ref=e748]
      - generic [ref=e760]:
        - link "Image" [ref=e765]:
          - /url: /toys/~cs-jzk2vqwqih/pr?sid=tng&collection-tab-name=Jammbo&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=HW4RLA5LN1Y7_AD&BU=Mixed
          - img "Image" [ref=e768]
        - link "Image" [ref=e773]:
          - /url: /mivi-fort-sonic-900-soundbar-dual-subwoofers-dolby-audio-5-2-channel-w-bluetooth-soundbar/p/itm0f08e9b9a75b2?pid=ACCHE36MGRSEDCXF&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=EJHPRZSBO0RL_AD&BU=Mixed
          - img "Image" [ref=e776]
        - link "Image" [ref=e781]:
          - /url: /kitchen-cookware-serveware/cookware/cookware-sets/pr?sid=upp%2Ctnx%2Cqvz&marketplace=FLIPKART&p%5B%5D=facets.brand%255B%255D%3DPigeon&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=8R4G9GKMY2RS_AD&BU=Mixed
          - img "Image" [ref=e784]
      - generic [ref=e794]:
        - generic [ref=e798]:
          - img "Image" [ref=e801]
          - generic [ref=e805]: Add to your wishlist
        - generic [ref=e808]:
          - link "Image Hurry up Flat 80% off" [ref=e813]:
            - /url: /osp/cil/~cs-1qelu3jf14/pr?sid=osp%2Ccil&collection-tab-name=Footwear&pageCriteria=default&param=5678&hpid=i4Iin6kmbhK-88OfkIHl7qp7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGbGF0IDgwJSBvZmYiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJJU0VHVTdaRUtOTTlLVU5QIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fSwidGl0bGUiOnsibXVsdGlWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoidGl0bGUiLCJpbmZlcmVuY2VUeXBlIjoiVElUTEUiLCJ2YWx1ZXMiOlsiTWVucyBGb290d2VhciJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Mixed
            - img "Image" [ref=e823]
            - generic [ref=e826]:
              - generic [ref=e827]: Hurry up
              - generic [ref=e828]: Flat 80% off
          - link "Image Watches Upto 70% off" [ref=e833]:
            - /url: /watches/wrist-watches/pr?sid=r18%2Cf13&p%5B%5D=facets.ideal_for%255B%255D%3DMen&sort=popularity&p%5B%5D=facets.theme%255B%255D%3DRetro%2BGold&hpid=hLq4J7Z-50XR63zWxy3Xk6p7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJVcHRvIDcwJSBvZmYiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJXQVRGVVFFV0JZRlo3R0ZKIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fSwidGl0bGUiOnsibXVsdGlWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoidGl0bGUiLCJpbmZlcmVuY2VUeXBlIjoiVElUTEUiLCJ2YWx1ZXMiOlsiUmV0cm8gR29sZCJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Mixed
            - img "Image" [ref=e843]
            - generic [ref=e846]:
              - generic [ref=e847]: Watches
              - generic [ref=e848]: Upto 70% off
          - link "Image Milton, Cello & more From ₹129" [ref=e853]:
            - /url: /kitchen-cookware-serveware/water-bottles-flasks/pr?sid=upp%2C3t7&marketplace=FLIPKART&sort=popularity&p%5B%5D=facets.price_range.from%3D129&p%5B%5D=facets.price_range.to%3DMax&hpid=uBvWEo4NUmh0PT8_4P0PDap7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTEyOSJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sImhlcm9QaWQiOnsic2luZ2xlVmFsdWVBdHRyaWJ1dGUiOnsia2V5IjoiaGVyb1BpZCIsImluZmVyZW5jZVR5cGUiOiJQSUQiLCJ2YWx1ZSI6IkJPVEZBS1ZIWjhTUUtBSlAiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJXYXRlciBCb3R0bGVzIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
            - img "Image" [ref=e863]
            - generic [ref=e866]:
              - generic [ref=e867]: Milton, Cello & more
              - generic [ref=e868]: From ₹129
          - link "Image grab on deals Under ₹799" [ref=e873]:
            - /url: /clothing-and-accessories/saree-and-accessories/saree/women-saree/pr?sid=clo%2C8on%2Czpd%2C9og&p%5B%5D=facets.collections%255B%255D%3DSequin&p%5B%5D=facets.collections%255B%255D%3DSequin%2BSarees&p%5B%5D=facets.price_range.from%3DMin&p%5B%5D=facets.price_range.to%3D799&param=745454&hpid=_3bvDttz0hmbAThK9Xs9gqp7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJVbmRlciDigrk3OTkiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJTQVJITloyWlBRSEVDSlQ5IiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fSwidGl0bGUiOnsibXVsdGlWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoidGl0bGUiLCJpbmZlcmVuY2VUeXBlIjoiVElUTEUiLCJ2YWx1ZXMiOlsiU2VxdWluIFNhcmVlcyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Mixed
            - img "Image" [ref=e883]
            - generic [ref=e886]:
              - generic [ref=e887]: grab on deals
              - generic [ref=e888]: Under ₹799
      - generic [ref=e898]:
        - generic [ref=e902]:
          - img "Image" [ref=e905]
          - generic [ref=e907]:
            - generic [ref=e909]: Hair & Skincare Essentials
            - link [ref=e910]:
              - /url: /offers-list/recommended-for-you?screen=dynamic&pk=contentTags%3DGCD_THEME_10~marketplace%3DFLIPKART~widgetType%3DdealCardV3~contentType%3DpersonalisedRecommendation%2FC5&marketplace=FLIPKART&BU=Mixed
              - img [ref=e913]
        - generic [ref=e917]:
          - link "Image Face Wash Min. 50% Off" [ref=e922]:
            - /url: https://www.flipkart.com/all/~cs-5ab19791d4f627a2a36b60d5791384ca/pr?sid=g9b,ema,5la,jav&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e932]
            - generic [ref=e935]:
              - generic [ref=e936]: Face Wash
              - generic [ref=e937]: Min. 50% Off
          - link "Image Hair Claw Min. 50% Off" [ref=e942]:
            - /url: https://www.flipkart.com/all/~cs-597cf2cfc68d911d5f236ca0fa9b8d60/pr?sid=g9b,lcf,bjl,zbu&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e952]
            - generic [ref=e955]:
              - generic [ref=e956]: Hair Claw
              - generic [ref=e957]: Min. 50% Off
          - link "Image Bath Soap Min. 50% Off" [ref=e962]:
            - /url: https://www.flipkart.com/all/~cs-2f28bfd1109d541fcdff5420cb6739a7/pr?sid=g9b,5nz,b1b,yug&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e972]
            - generic [ref=e975]:
              - generic [ref=e976]: Bath Soap
              - generic [ref=e977]: Min. 50% Off
          - link "Image Moisturizer Min. 50% Off" [ref=e982]:
            - /url: https://www.flipkart.com/all/~cs-9eb5db3525bafdb015fa65c05970ba60/pr?sid=g9b,ema,5la,1ke&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e992]
            - generic [ref=e995]:
              - generic [ref=e996]: Moisturizer
              - generic [ref=e997]: Min. 50% Off
      - generic [ref=e1007]:
        - generic [ref=e1011]: Featured Brands
        - generic [ref=e1014]:
          - generic [ref=e1015]:
            - link "Image" [ref=e1020]:
              - /url: /televisions/~cs-ghemp1vvaa/pr?sid=ckf%2Cczl&collection-tab-name=TCL+T89D+TVs&sort=popularity&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=3VA6YOOHOSF1_AD&BU=Mixed
              - img "Image" [ref=e1023]
            - link "Image" [ref=e1028]:
              - /url: /televisions/~cs-kiawp8qewa/pr?sid=ckf%2Cczl&collection-tab-name=TCL+T6D+TVs&sort=popularity&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=5ZUZY7KCCOLU_AD&BU=Mixed
              - img "Image" [ref=e1031]
            - link "Image" [ref=e1036]:
              - /url: /g9b/ema/~cs-fbefoit0xa/pr?sid=g9b%2Cema&collection-tab-name=Aqualogica&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=X0NENBWVJMYH_AD&BU=Mixed
              - img "Image" [ref=e1039]
            - link "Image" [ref=e1044]:
              - /url: /ckf/czl/~cs-vcvf2huawd/pr?sid=ckf%2Cczl&collection-tab-name=realme+TechLife&pageCriteria=default&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=IKOGIEE98TOO_AD&BU=Mixed
              - img "Image" [ref=e1047]
            - link "Image" [ref=e1052]:
              - /url: /g9b/~cs-s7t5ct2rom/pr?sid=g9b&collection-tab-name=Ponds+Facewash&sort=recency_desc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=GIXWSOH3CMMM_AD&BU=Mixed
              - img "Image" [ref=e1055]
            - link "Image" [ref=e1060]:
              - /url: /beauty-and-grooming/body-face-skin-care/~cs-m38nvpb5dm/pr?sid=g9b%2Cema&collection-tab-name=DRS&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=2PQK8998UQK7_AD&BU=Mixed
              - img "Image" [ref=e1063]
            - link "Image" [ref=e1068]:
              - /url: /beauty-and-grooming/body-face-skin-care/body-and-face-care/sunscreen/pr?sid=g9b%2Cema%2C5la%2Cxrh&p%5B%5D=facets.brand%255B%255D%3DThe%2BDerma%2BCo&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=K94GJZAZ76B2_AD&BU=Mixed
              - img "Image" [ref=e1071]
            - link "Image" [ref=e1076]:
              - /url: /g9b/~cs-afujehkyp1/pr?sid=g9b&collection-tab-name=Aqualogica++Sunscreen&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=OJD3J4C1JFWH_AD&BU=Mixed
              - img "Image" [ref=e1079]
          - button [ref=e1080]:
            - img [ref=e1081]
      - generic [ref=e1092]:
        - generic [ref=e1096]:
          - img "Image" [ref=e1099]
          - generic [ref=e1101]:
            - generic [ref=e1103]: Fashion's Top Deals
            - link [ref=e1104]:
              - /url: /offers-list/recommended-for-you?screen=dynamic&pk=contentTags%3DGCD_THEME_3~marketplace%3DFLIPKART~widgetType%3DdealCardV3~contentType%3DpersonalisedRecommendation%2FC5&marketplace=FLIPKART&BU=Mixed
              - img [ref=e1107]
        - generic [ref=e1111]:
          - link "Image Men’s Slippers & Flip Flops Min. 70% Off" [ref=e1116]:
            - /url: https://www.flipkart.com/all/~cs-79e42ad52149a075d0a3b31f35294baa/pr?sid=osp,cil,e1r&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e1126]
            - generic [ref=e1129]:
              - generic [ref=e1130]: Men’s Slippers & Flip Flops
              - generic [ref=e1131]: Min. 70% Off
          - link "Image Men’s Casual Shoes Min. 70% Off" [ref=e1136]:
            - /url: https://www.flipkart.com/all/~cs-28462d7669ffdf82990baaadbb6225e0/pr?sid=osp,cil,e1f&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e1146]
            - generic [ref=e1149]:
              - generic [ref=e1150]: Men’s Casual Shoes
              - generic [ref=e1151]: Min. 70% Off
          - link "Image Men’s Sandals & Floaters Min. 70% Off" [ref=e1156]:
            - /url: https://www.flipkart.com/all/~cs-7a04c87a03d025d968662615918edf2d/pr?sid=osp,cil,e83&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e1166]
            - generic [ref=e1169]:
              - generic [ref=e1170]: Men’s Sandals & Floaters
              - generic [ref=e1171]: Min. 70% Off
          - link "Image Men’s Sports Shoes Min. 70% Off" [ref=e1176]:
            - /url: https://www.flipkart.com/all/~cs-6f5af2c6fd4068ce713d184f1481cd2b/pr?sid=osp,cil,1cu&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e1186]
            - generic [ref=e1189]:
              - generic [ref=e1190]: Men’s Sports Shoes
              - generic [ref=e1191]: Min. 70% Off
      - generic [ref=e1195]: Hang on, loading content
      - generic [ref=e1207]:
        - generic [ref=e1208]: Flipkart - Your go-to place for Online Shopping
        - generic [ref=e1209]: +
      - contentinfo [ref=e1210]:
        - generic [ref=e1212]:
          - generic [ref=e1213]:
            - generic [ref=e1214]:
              - generic [ref=e1215]: ABOUT
              - link "Contact Us" [ref=e1216]:
                - /url: /helpcentre?otracker=footer_navlinks
              - link "About Us" [ref=e1217]:
                - /url: https://corporate.flipkart.net/corporate-home
              - link "Careers" [ref=e1218]:
                - /url: https://www.flipkartcareers.com/?otracker=footer_navlinks
              - link "Flipkart Stories" [ref=e1219]:
                - /url: http://stories.flipkart.com/?otracker=footer_navlinks
              - link "Press" [ref=e1220]:
                - /url: http://stories.flipkart.com/category/top-stories/news/
              - link "Corporate Information" [ref=e1221]:
                - /url: /corporate-information
            - generic [ref=e1222]:
              - generic [ref=e1223]: GROUP COMPANIES
              - link "Myntra" [ref=e1224]:
                - /url: https://www.myntra.com/
              - link "Cleartrip" [ref=e1225]:
                - /url: https://www.cleartrip.com/
              - link "Shopsy" [ref=e1226]:
                - /url: https://www.shopsy.in
            - generic [ref=e1227]:
              - generic [ref=e1228]: HELP
              - link "Payments" [ref=e1229]:
                - /url: /pages/payments
              - link "Shipping" [ref=e1230]:
                - /url: /pages/shipping
              - link "Cancellation & Returns" [ref=e1231]:
                - /url: /helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG
              - link "FAQ" [ref=e1232]:
                - /url: /helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG
            - generic [ref=e1233]:
              - generic [ref=e1234]: CONSUMER POLICY
              - link "Cancellation & Returns" [ref=e1235]:
                - /url: /pages/returnpolicy?otracker=footer_navlinks
              - link "Terms Of Use" [ref=e1236]:
                - /url: /pages/terms?otracker=footer_navlinks
              - link "Security" [ref=e1237]:
                - /url: /pages/paymentsecurity?otracker=footer_navlinks
              - link "Privacy" [ref=e1238]:
                - /url: /pages/privacypolicy?otracker=footer_navlinks
              - link "Sitemap" [ref=e1239]:
                - /url: /sitemap?otracker=footer_navlinks
              - link "Grievance Redressal" [ref=e1240]:
                - /url: /pages/grievance-redressal-mechanism?otracker=footer_navlinks
              - link "EPR Compliance" [ref=e1241]:
                - /url: /pages/ewaste-compliance-tnc?otracker=footer_navlinks
              - link "FSSAI Food Safety Connect App" [ref=e1242]:
                - /url: https://fssai.gov.in/cms/food-safety-connect.php
            - generic [ref=e1243]:
              - generic [ref=e1244]: "Mail Us:"
              - generic [ref=e1245]:
                - paragraph [ref=e1246]: Flipkart Internet Private Limited,
                - paragraph [ref=e1247]: Buildings Alyssa, Begonia &
                - paragraph [ref=e1248]: Clove Embassy Tech Village,
                - paragraph [ref=e1249]: Outer Ring Road, Devarabeesanahalli Village,
                - paragraph [ref=e1250]: Bengaluru, 560103,
                - paragraph [ref=e1251]: Karnataka, India
              - generic [ref=e1252]: "Social:"
              - generic [ref=e1253]:
                - link "Facebook" [ref=e1255]:
                  - /url: https://www.facebook.com/flipkart
                  - img "Facebook" [ref=e1256]
                - link "Twitter" [ref=e1258]:
                  - /url: https://www.twitter.com/flipkart
                  - img "Twitter" [ref=e1259]
                - link "YouTube" [ref=e1261]:
                  - /url: https://www.youtube.com/flipkart
                  - img "YouTube" [ref=e1262]
                - link "Instagram" [ref=e1264]:
                  - /url: https://www.instagram.com/flipkart
                  - img "Instagram" [ref=e1265]
            - generic [ref=e1266]:
              - generic [ref=e1267]: "Registered Office Address:"
              - generic [ref=e1268]:
                - paragraph [ref=e1269]: Flipkart Internet Private Limited,
                - paragraph [ref=e1270]: Buildings Alyssa, Begonia &
                - paragraph [ref=e1271]: Clove Embassy Tech Village,
                - paragraph [ref=e1272]: Outer Ring Road, Devarabeesanahalli Village,
                - paragraph [ref=e1273]: Bengaluru, 560103,
                - paragraph [ref=e1274]: Karnataka, India
                - paragraph [ref=e1275]: "CIN : U51109KA2012PTC066107"
                - paragraph
                - paragraph [ref=e1276]:
                  - text: "Telephone:"
                  - link "044-45614700" [ref=e1277]:
                    - /url: tel:044-45614700
                  - text: /
                  - link "044-67415800" [ref=e1278]:
                    - /url: tel:044-67415800
          - generic [ref=e1279]:
            - generic [ref=e1280]:
              - img "Become a Seller" [ref=e1281]
              - link "Become a Seller" [ref=e1282]:
                - /url: https://seller.flipkart.com/?utm_source=fkwebsite&utm_medium=websitedirect
            - generic [ref=e1283]:
              - img "Advertise" [ref=e1284]
              - generic "Advertise" [ref=e1285]
            - generic [ref=e1286]:
              - img "Gift Cards" [ref=e1287]
              - link "Gift Cards" [ref=e1288]:
                - /url: /the-gift-card-store?otracker=footer_navlinks
            - generic [ref=e1289]:
              - img "Help Center" [ref=e1290]
              - link "Help Center" [ref=e1291]:
                - /url: /helpcentre?otracker=footer_navlinks
            - generic [ref=e1292]: © 2007-2026 Flipkart.com
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