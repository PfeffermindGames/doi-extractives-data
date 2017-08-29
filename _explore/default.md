---
title: Daten entdecken
layout: default
permalink: /explore/
---

<section class="slab-delta">
  <div class="container-outer landing-section_top">
    <div class="container-left-8 hero-left">
      <h1>{% t 'explore-data.title' %}</h1>
      <p class="hero-description">{% t 'explore-data.introduction-first' %}</p>
      <p class="hero-description">{% t 'explore-data.introduction-second' %}</p>
    </div>
    <div class="container-right-4 hero-right">
      <div class="hero-right_square">
        <figure>
          <a href="#production">
            <img class="hero-right_image" src="{{ site.baseurl_root }}/img/explore-landing-intro.png" alt="Explore landing intro">
          </a>
          <figcaption class="hero-right_caption">
            {% t 'explore-data.figcaption' %}
          </figcaption>
        </figure>
      </div>
    </div>
  </div>
</section>

<section accordion="explore-landing" accordion-desktop="false" class="container-outer landing-wrapper">
  <section class="container">
    <a id="production" class="link-no_under"  style="margin-bottom: 20px">
      <h2 class="h3 landing-section_category" style="margin-bottom: 20px">
        {% t 'explore-data.production.heading-1' %}
      </h2>
    </a>
    <a href="{{ site.lang | url_lang_prefix  }}/explore/federal-production" class="tile tile-interaktiv">
      <span>
        {% t 'explore-data.production.sub-heading-1' %}
      </span>
    </a>
    <!-- Production chart -->
    <!-- <a href="{{ site.lang | url_lang_prefix  }}/explore/production-charts" class="tile tile-ges-rohstoffprod">
      <span>
        {% t 'explore-data.production.sub-heading-2' %}
      </span>
    </a> -->
    <a href="{{ site.lang | url_lang_prefix  }}/explore/gesamtdeutsche_rohstoffproduktion" class="tile tile-ges-rohstoffprod">
      <span>
        {% t 'explore-data.production.sub-heading-2' %}
      </span>
    </a>
  </section>
  <section class="container">
    <a id="revenue" class="link-no_under">
      <h2 class="h3 landing-section_category" style="margin-bottom: 20px">
        {% t 'explore-data.economic-impact.heading-1' %}
      </h2>
    </a>

    <a href="{{ site.lang | url_lang_prefix  }}/explore/BIP" class="tile tile-bip">
      <span>{% t 'explore-data.economic-impact.item1' %}</span>
    </a>
    <a href="{{ site.lang | url_lang_prefix  }}/explore/einnahmen" class="tile tile-einnahmen-rohstoff">
      <span>{% t 'explore-data.economic-impact.item2' %}</span>
    </a>
    <a href="{{ site.lang | url_lang_prefix  }}/explore/employment" class="tile tile-beschaeftigung">
      <span>{% t 'explore-data.economic-impact.item3' %}</span>
    </a>
    <a href="{{ site.lang | url_lang_prefix  }}/explore/exporte" class="tile tile-export">
      <span>{% t 'explore-data.economic-impact.item4' %}</span>
    </a>
    <a href="{{ site.lang | url_lang_prefix  }}/explore/zahlungsabgleich" class="tile tile-lupe">
      <span>{% t 'explore-data.economic-impact.item5' %}</span>
    </a>
  </section>
</section>

<script type="text/javascript" src="{{ site.baseurl_root }}/js/lib/homepage.min.js" charset="utf-8"></script>
