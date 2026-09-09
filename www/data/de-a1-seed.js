// German (A1) vocabulary, extracted from the official Goethe-Zertifikat A1
// "Start Deutsch 1" Wortliste (the certification word list). The bulk of
// entries come from the document's alphabetical word list (each with the
// official example sentence kept as a usage note), split into three
// frequency tiers (1 = essential, 2 = common, 3 = extended/specific) as a
// study on-ramp instead of one 685-word bucket. A smaller set of standard
// items (numbers, colors, compass directions) comes from its supplementary
// word-group list and keeps its own category. A "Zeit" category collects
// that same list's time-related words -- weekdays, months, seasons, and
// the smaller Zeitmaße/Tageszeiten groups (second, minute, day, week,
// year, morning, noon, afternoon, evening, night) -- into one place
// rather than a chip per sub-group. "Maße & Gewichte" and "Land" cover
// that list's measurement units (meter, kilo, degree, ...) and country/
// nationality words (Deutschland, deutsch, Europa, europäisch, ...).
//
// A few source entries are dictionary "stems" (e.g. "ander-", "jed-") that
// always take an ending and are never used bare -- those were replaced with
// a natural, actually-usable inflected form (e.g. "andere", "jeder").
//
// A further ~22 entries were added after cross-checking the word list
// against three real Goethe "Start Deutsch 1" exam papers (Modellsatz +
// two Übungssätze) and finding a handful of common, general-purpose words
// that weren't yet covered (e.g. die Person, natürlich, die Telefonnummer).
//
// The "Sätze" category is a further ~44 short, simple sentences for the
// exam's Sprechen (speaking) part -- Teil 1 (Sich vorstellen: the
// examiner's actual self-introduction/interview script), Teil 2 (Um
// Informationen bitten und geben: the one verbatim example plus sample
// questions built on the real topic cue cards -- Einkaufen, Essen &
// Trinken, Wochenende, Schule, Beruf, Sport), and Teil 3 (Bitten
// formulieren und darauf reagieren: the one verbatim example plus
// requests modeled on the pictured cue cards -- glass of water, pencil,
// computer, post office, taxi, restaurant bill, and more), all sourced
// from the Kandidatenblätter/Prüferblätter pages of those same three
// exam papers.
window.DE_A1_SEED_ENTRIES = 
[
  {
    "en": "from; starting from",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "ab",
        "pron": "",
        "lit": "Ab morgen muss ich arbeiten.",
        "verify": false
      }
    }
  },
  {
    "en": "but",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "aber",
        "pron": "",
        "lit": "Ich bin oft im Büro, aber nur für wenige Stunden.",
        "verify": false
      }
    }
  },
  {
    "en": "to depart",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "abfahren",
        "pron": "",
        "lit": "Wir fahren um zwölf Uhr ab.",
        "verify": false
      }
    }
  },
  {
    "en": "the departure",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Abfahrt",
        "pron": "",
        "lit": "Vor der Abfahrt rufe ich an.",
        "verify": false
      }
    }
  },
  {
    "en": "to hand in; to drop off",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "abgeben",
        "pron": "",
        "lit": "Ich muss meine Schlüssel abgeben.",
        "verify": false
      }
    }
  },
  {
    "en": "to pick up; to collect",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "abholen",
        "pron": "",
        "lit": "Wann kann ich den Schrank bei dir abholen? Wir müssen noch meinen Bruder abholen.",
        "verify": false
      }
    }
  },
  {
    "en": "the sender",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Absender",
        "pron": "",
        "lit": "Da ist ein Brief für dich ohne Absender.",
        "verify": false
      }
    }
  },
  {
    "en": "attention!; watch out!",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "Achtung",
        "pron": "",
        "lit": "Achtung! Das dürfen Sie nicht tun.",
        "verify": false
      }
    }
  },
  {
    "en": "the address",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Adresse,-en",
        "pron": "",
        "lit": "Können Sie mir seine Adresse sagen?",
        "verify": false
      }
    }
  },
  {
    "en": "all",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "alle",
        "pron": "",
        "lit": "Alles Gute! Das ist alles. Sind alle da? Alle Freunde kommen. Hast du alles?",
        "verify": false
      }
    }
  },
  {
    "en": "alone",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "allein",
        "pron": "",
        "lit": "Er kommt allein.",
        "verify": false
      }
    }
  },
  {
    "en": "so; thus",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "also",
        "pron": "",
        "lit": "Also, es ist so: ... Er hat Zeit, also muss er uns helfen.",
        "verify": false
      }
    }
  },
  {
    "en": "old",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "alt",
        "pron": "",
        "lit": "Wie alt sind Sie? Sie sehen aber nicht so alt aus. Mein Auto ist schon sehr alt. Wir wohnen in einem sehr alten Haus. Köln ist eine alte Stadt.",
        "verify": false
      }
    }
  },
  {
    "en": "the age",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Alter",
        "pron": "",
        "lit": "Alter: 26 Jahre.",
        "verify": false
      }
    }
  },
  {
    "en": "at; on",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "an",
        "pron": "",
        "lit": "Fahren Sie an der nächsten Straße nach rechts. Wir treffen uns am Bahnhof. Am nächsten Montag geht es leider nicht.",
        "verify": false
      }
    }
  },
  {
    "en": "to offer",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "anbieten",
        "pron": "",
        "lit": "Was darf ich dir anbieten?",
        "verify": false
      }
    }
  },
  {
    "en": "the offer",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Angebot, -e",
        "pron": "",
        "lit": "Heute sind Sportschuhe im Angebot.",
        "verify": false
      }
    }
  },
  {
    "en": "other",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "andere",
        "pron": "",
        "lit": "WiIlst du diese Jacke? – Nein, ich möchte die andere.",
        "verify": false
      }
    }
  },
  {
    "en": "to begin; to start",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "anfangen",
        "pron": "",
        "lit": "Hier fängt die Bahnhofstraße an. Der Unterricht fängt gleich an.",
        "verify": false
      }
    }
  },
  {
    "en": "the beginning",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Anfang",
        "pron": "",
        "lit": "Sie wohnt am Anfang der Straße. Wir machen Anfang Juli Urlaub.",
        "verify": false
      }
    }
  },
  {
    "en": "to click (on)",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "anklicken",
        "pron": "",
        "lit": "Da musst du dieses Wort anklicken.",
        "verify": false
      }
    }
  },
  {
    "en": "to arrive",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "ankommen",
        "pron": "",
        "lit": "Wann kommt dieser Zug in Hamburg an?",
        "verify": false
      }
    }
  },
  {
    "en": "the arrival",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Ankunft",
        "pron": "",
        "lit": "Auf diesem Plan steht nur die Ankunft(-szeit) der Züge.",
        "verify": false
      }
    }
  },
  {
    "en": "to mark with a cross/tick",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "ankreuzen",
        "pron": "",
        "lit": "Auf dem Formular müssen Sie an mehreren Stellen etwas ankreuzen.",
        "verify": false
      }
    }
  },
  {
    "en": "to turn on",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "anmachen",
        "pron": "",
        "lit": "Mach bitte das Licht an!",
        "verify": false
      }
    }
  },
  {
    "en": "to register; to sign up",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "(sich) anmelden",
        "pron": "",
        "lit": "Wo kann ich mich anmelden?",
        "verify": false
      }
    }
  },
  {
    "en": "the registration",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Anmeldung",
        "pron": "",
        "lit": "Eine Anmeldung für diesen Kurs ist nicht mehr möglich.",
        "verify": false
      }
    }
  },
  {
    "en": "the form of address; salutation",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "die Anrede",
        "pron": "",
        "lit": "Schreiben Sie auch eine Anrede und einen Gruß.",
        "verify": false
      }
    }
  },
  {
    "en": "to call (phone)",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "anrufen",
        "pron": "",
        "lit": "Kann man Sie anrufen? Peter ruft kurz seine Freundin an.",
        "verify": false
      }
    }
  },
  {
    "en": "the phone call",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Anruf, -e",
        "pron": "",
        "lit": "Sie bekommt viele Anrufe auf ihrem Handy.",
        "verify": false
      }
    }
  },
  {
    "en": "the answering machine",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Anrufbeantworter",
        "pron": "",
        "lit": "Wir sind im Moment nicht da. Sprechen Sie bitte auf den Anrufbeantworter.",
        "verify": false
      }
    }
  },
  {
    "en": "the announcement",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "die Ansage, -n",
        "pron": "",
        "lit": "Hören Sie die Ansagen.",
        "verify": false
      }
    }
  },
  {
    "en": "the connection",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Anschluss",
        "pron": "",
        "lit": "In Mannheim haben Sie Anschluss nach Saarbrücken. Ist das die Anmeldung für einen Telefonanschluss?",
        "verify": false
      }
    }
  },
  {
    "en": "to be on (light/device)",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "an sein",
        "pron": "",
        "lit": "Heute Nacht war das Licht an. Das Licht ist noch an.",
        "verify": false
      }
    }
  },
  {
    "en": "to answer",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "antworten",
        "pron": "",
        "lit": "Er antwortet nicht.",
        "verify": false
      }
    }
  },
  {
    "en": "the answer",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "die Antwort, -en",
        "pron": "",
        "lit": "Er gibt leider keine Antwort.",
        "verify": false
      }
    }
  },
  {
    "en": "the advertisement; notice",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "die Anzeige, -n",
        "pron": "",
        "lit": "Ich habe Ihre Anzeige in der Zeitung gelesen.",
        "verify": false
      }
    }
  },
  {
    "en": "to get dressed",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "(sich) anziehen",
        "pron": "",
        "lit": "Ich muss mich noch anziehen.",
        "verify": false
      }
    }
  },
  {
    "en": "the apartment",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "das Apartment, -s",
        "pron": "",
        "lit": "Wir haben ein Apartment gemietet.",
        "verify": false
      }
    }
  },
  {
    "en": "the apple",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Apfel, -Ä",
        "pron": "",
        "lit": "Ein Pfund Äpfel bitte.",
        "verify": false
      }
    }
  },
  {
    "en": "the appetite",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Appetit",
        "pron": "",
        "lit": "Guten Appetit!",
        "verify": false
      }
    }
  },
  {
    "en": "to work",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "arbeiten",
        "pron": "",
        "lit": "Wo arbeiten Sie?",
        "verify": false
      }
    }
  },
  {
    "en": "the work; job",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "die Arbeit, -en",
        "pron": "",
        "lit": "Mein Bruder sucht Arbeit.",
        "verify": false
      }
    }
  },
  {
    "en": "unemployed",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "arbeitslos",
        "pron": "",
        "lit": "Es gibt bei uns viele Leute, die schon lange arbeitslos sind.",
        "verify": false
      }
    }
  },
  {
    "en": "the workplace",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Arbeitsplatz, -ä, e",
        "pron": "",
        "lit": "An meinem Arbeitsplatz fehlt ein Drucker.",
        "verify": false
      }
    }
  },
  {
    "en": "the arm",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Arm, -e",
        "pron": "",
        "lit": "Mein Arm tut weh.",
        "verify": false
      }
    }
  },
  {
    "en": "the doctor",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "der Arzt, -Ä, e",
        "pron": "",
        "lit": "Morgen habe ich einen Termin bei meiner Ärztin.",
        "verify": false
      }
    }
  },
  {
    "en": "also; too",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "auch",
        "pron": "",
        "lit": "Ich bin auch Spanier.",
        "verify": false
      }
    }
  },
  {
    "en": "on; onto",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "auf",
        "pron": "",
        "lit": "Die Kinder spielen auf der Straße. Auf Wiedersehen. Wie heißt das auf Deutsch?",
        "verify": false
      }
    }
  },
  {
    "en": "the task; assignment",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Aufgabe, -n",
        "pron": "",
        "lit": "Das ist eine schwere Aufgabe.",
        "verify": false
      }
    }
  },
  {
    "en": "to stop",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "aufhören",
        "pron": "",
        "lit": "Der Kurs hört in einer Woche auf. Hier hört die Bahnhofstraße auf.",
        "verify": false
      }
    }
  },
  {
    "en": "to be open",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "auf sein",
        "pron": "",
        "lit": "Du brauchst den Schlüssel nicht. Die Wohnung ist auf. Das Fenster ist noch auf.",
        "verify": false
      }
    }
  },
  {
    "en": "to get up; to stand up",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "aufstehen",
        "pron": "",
        "lit": "Ich muss immer um vier Uhr aufstehen. Soll ich aufstehen?",
        "verify": false
      }
    }
  },
  {
    "en": "the elevator; lift",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Aufzug, -ü, e",
        "pron": "",
        "lit": "In diesem Haus gibt es keinen Aufzug.",
        "verify": false
      }
    }
  },
  {
    "en": "the eye",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Auge, -n",
        "pron": "",
        "lit": "Er hat blaue Augen.",
        "verify": false
      }
    }
  },
  {
    "en": "from; out of",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "aus",
        "pron": "",
        "lit": "Er kommt aus Brasilien.",
        "verify": false
      }
    }
  },
  {
    "en": "the excursion; trip",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Ausflug",
        "pron": "",
        "lit": "Morgen machen wir einen Ausflug nach Heidelberg.",
        "verify": false
      }
    }
  },
  {
    "en": "to fill out",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "ausfüllen",
        "pron": "",
        "lit": "Füllen Sie bitte dieses Formular aus.",
        "verify": false
      }
    }
  },
  {
    "en": "the exit",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Ausgang",
        "pron": "",
        "lit": "Wo ist der Ausgang?",
        "verify": false
      }
    }
  },
  {
    "en": "the information",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "die Auskunft, -ü, e",
        "pron": "",
        "lit": "Können Sie mir eine Auskunft geben?",
        "verify": false
      }
    }
  },
  {
    "en": "abroad; foreign countries",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Ausland",
        "pron": "",
        "lit": "Fahren Sie ins Ausland?",
        "verify": false
      }
    }
  },
  {
    "en": "the foreigner",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Ausländer, -",
        "pron": "",
        "lit": "SInd Sie Ausländerin?",
        "verify": false
      }
    }
  },
  {
    "en": "foreign",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "ausländisch",
        "pron": "",
        "lit": "Leider habe ich nur ausländisches Geld.",
        "verify": false
      }
    }
  },
  {
    "en": "to turn off",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "ausmachen",
        "pron": "",
        "lit": "Mach bitte das Licht aus!",
        "verify": false
      }
    }
  },
  {
    "en": "the statement",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "die Aussage, -n",
        "pron": "",
        "lit": "Ist die Aussage richtig oder falsch?",
        "verify": false
      }
    }
  },
  {
    "en": "to look; to appear",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "aussehen",
        "pron": "",
        "lit": "Das sieht schön aus.",
        "verify": false
      }
    }
  },
  {
    "en": "to be off; to be over",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "aus sein",
        "pron": "",
        "lit": "Das Licht ist aus. Die Schule ist aus.",
        "verify": false
      }
    }
  },
  {
    "en": "to get off/out (vehicle)",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "aussteigen",
        "pron": "",
        "lit": "Wo muss ich aussteigen?",
        "verify": false
      }
    }
  },
  {
    "en": "the ID card",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Ausweis",
        "pron": "",
        "lit": "Hier ist mein Ausweis.",
        "verify": false
      }
    }
  },
  {
    "en": "to get undressed",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "(sich) ausziehen",
        "pron": "",
        "lit": "Zieh die Schuhe aus, bitte!",
        "verify": false
      }
    }
  },
  {
    "en": "the car",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "das Auto, -s",
        "pron": "",
        "lit": "Er kommt mit dem Auto.",
        "verify": false
      }
    }
  },
  {
    "en": "the highway; motorway",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "die Autobahn, -en",
        "pron": "",
        "lit": "Wo geht‘s hier bitte zur Autobahn?",
        "verify": false
      }
    }
  },
  {
    "en": "the vending machine",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Automat",
        "pron": "",
        "lit": "Die Fahrkarten gibt es nur am Automaten.",
        "verify": false
      }
    }
  },
  {
    "en": "automatic",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "automatisch",
        "pron": "",
        "lit": "Du musst nichts machen. Das geht automatisch.",
        "verify": false
      }
    }
  },
  {
    "en": "the baby",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Baby, -s",
        "pron": "",
        "lit": "Mein Kind ist noch ein Baby.",
        "verify": false
      }
    }
  },
  {
    "en": "the bakery",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Bäckerei",
        "pron": "",
        "lit": "Ich geh mal schnell zur Bäckerei.",
        "verify": false
      }
    }
  },
  {
    "en": "the bathroom; bath",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Bad",
        "pron": "",
        "lit": "Wir haben kein großes Bad.",
        "verify": false
      }
    }
  },
  {
    "en": "to bathe",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "baden",
        "pron": "",
        "lit": "Ich bade nicht so gern, ich dusche lieber.",
        "verify": false
      }
    }
  },
  {
    "en": "the train; railway",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Bahn",
        "pron": "",
        "lit": "Wir fahren lieber mit der Bahn. Ich nehme die nächste Bahn.",
        "verify": false
      }
    }
  },
  {
    "en": "the train station",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "der Bahnhof",
        "pron": "",
        "lit": "Komme ich hier zum Bahnhof?",
        "verify": false
      }
    }
  },
  {
    "en": "the platform",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Bahnsteig",
        "pron": "",
        "lit": "Auf welchem Bahnsteig fährt der Zug?",
        "verify": false
      }
    }
  },
  {
    "en": "soon",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "bald",
        "pron": "",
        "lit": "Ich komme bald.",
        "verify": false
      }
    }
  },
  {
    "en": "the balcony",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Balkon",
        "pron": "",
        "lit": "Die Wohnung hat auch einen kleinen Balkon.",
        "verify": false
      }
    }
  },
  {
    "en": "the banana",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "die Banane, -n",
        "pron": "",
        "lit": "Drei Bananen, bitte!",
        "verify": false
      }
    }
  },
  {
    "en": "the bank; the bench",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Bank",
        "pron": "",
        "lit": "Die Bank schließt schon um vier Uhr. Er sitzt im Park auf einer Bank und liest.",
        "verify": false
      }
    }
  },
  {
    "en": "in cash",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "bar",
        "pron": "",
        "lit": "Muss ich bar zahlen oder geht‘s auch mit Karte?",
        "verify": false
      }
    }
  },
  {
    "en": "the belly; stomach",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Bauch",
        "pron": "",
        "lit": "Seit gestern tut mir der Bauch weh.",
        "verify": false
      }
    }
  },
  {
    "en": "the tree",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Baum, -ä, e",
        "pron": "",
        "lit": "Vorsicht, fahr nicht an den Baum!",
        "verify": false
      }
    }
  },
  {
    "en": "the official; civil servant",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Beamte, -n",
        "pron": "",
        "lit": "Fragen Sie die Beamtin an Schalter acht!",
        "verify": false
      }
    }
  },
  {
    "en": "to mean",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "bedeuten",
        "pron": "",
        "lit": "Was bedeutet das Wort?",
        "verify": false
      }
    }
  },
  {
    "en": "to begin",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "beginnen",
        "pron": "",
        "lit": "Das Spiel beginnt um 15.30 Uhr.",
        "verify": false
      }
    }
  },
  {
    "en": "at; near; with",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "bei",
        "pron": "",
        "lit": "Offenbach liegt bei Frankfurt. Ich wohne bei meinen Eltern. Bei uns regnet es heute. Er arbeitet bei der Polizei.",
        "verify": false
      }
    }
  },
  {
    "en": "both",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "beide",
        "pron": "",
        "lit": "Beide Eltern arbeiten. Wir kommen beide.",
        "verify": false
      }
    }
  },
  {
    "en": "the leg",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "das Bein, -e",
        "pron": "",
        "lit": "Mein rechtes Bein tut weh.",
        "verify": false
      }
    }
  },
  {
    "en": "the example",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "das Beispiel, -e",
        "pron": "",
        "lit": "Kannst du mir ein Beispiel sagen?",
        "verify": false
      }
    }
  },
  {
    "en": "for example",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "zum Beispiel/z. B.",
        "pron": "",
        "lit": "Viele meiner Verwandten, z. B. meine beiden Brüder, arbeiten auch hier.",
        "verify": false
      }
    }
  },
  {
    "en": "known; well-known",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "bekannt",
        "pron": "",
        "lit": "Picasso ist sehr bekannt.",
        "verify": false
      }
    }
  },
  {
    "en": "the acquaintance",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der/die Bekannte, -n",
        "pron": "",
        "lit": "Ein Bekannter von mir heißt Klaus.",
        "verify": false
      }
    }
  },
  {
    "en": "to get; to receive",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "bekommen",
        "pron": "",
        "lit": "Haben Sie meinen Brief bekommen? Was bekommen Sie? Dieses Medikament bekommen Sie in der Apotheke.",
        "verify": false
      }
    }
  },
  {
    "en": "to use",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "benutzen",
        "pron": "",
        "lit": "Die Aufzüge bitte nicht benutzen!",
        "verify": false
      }
    }
  },
  {
    "en": "the profession; job",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "der Beruf, -e",
        "pron": "",
        "lit": "Was sind Sie von Beruf? Was ist Ihr Beruf?",
        "verify": false
      }
    }
  },
  {
    "en": "occupied; busy",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "besetzt",
        "pron": "",
        "lit": "Die Nummer ist immer besetzt. Der Platz ist besetzt.",
        "verify": false
      }
    }
  },
  {
    "en": "to visit; to view",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "besichtigen",
        "pron": "",
        "lit": "Ich möchte gern den Dom besichtigen.",
        "verify": false
      }
    }
  },
  {
    "en": "better",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "besser",
        "pron": "",
        "lit": "Es geht mir schon besser.",
        "verify": false
      }
    }
  },
  {
    "en": "best",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "beste",
        "pron": "",
        "lit": "Am besten treffen wir uns morgen.",
        "verify": false
      }
    }
  },
  {
    "en": "to order",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "bestellen",
        "pron": "",
        "lit": "Wir möchten bestellen, bitte. Dieses Buch haben wir nicht – sollen wir es für Sie bestellen?",
        "verify": false
      }
    }
  },
  {
    "en": "to visit",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "besuchen",
        "pron": "",
        "lit": "Darf ich dich besuchen?",
        "verify": false
      }
    }
  },
  {
    "en": "the bed",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Bett, -en",
        "pron": "",
        "lit": "Wir brauchen noch ein Kinderbett.",
        "verify": false
      }
    }
  },
  {
    "en": "to pay",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "bezahlen",
        "pron": "",
        "lit": "Wo muss ich bezahlen?",
        "verify": false
      }
    }
  },
  {
    "en": "the beer",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Bier",
        "pron": "",
        "lit": "Noch ein Bier bitte.",
        "verify": false
      }
    }
  },
  {
    "en": "the picture",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Bild, -er",
        "pron": "",
        "lit": "Hast du ein Bild von deinem Sohn?",
        "verify": false
      }
    }
  },
  {
    "en": "cheap",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "billig",
        "pron": "",
        "lit": "Die Jacke kostet nur 10 Euro! Die ist aber billig!",
        "verify": false
      }
    }
  },
  {
    "en": "the pear",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "die Birne, -n",
        "pron": "",
        "lit": "Ein Kilo Birnen, bitte!",
        "verify": false
      }
    }
  },
  {
    "en": "until",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "bis",
        "pron": "",
        "lit": "Ich fahre nur bis Stuttgart. Ich warte bis morgen.",
        "verify": false
      }
    }
  },
  {
    "en": "a little; a bit",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "bisschen",
        "pron": "",
        "lit": "Ich spreche Englisch, Französisch und ein bisschen Deutsch.",
        "verify": false
      }
    }
  },
  {
    "en": "please",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "bitte",
        "pron": "",
        "lit": "Eine Tasse Kaffee, bitte! Sprechen Sie bitte leise!",
        "verify": false
      }
    }
  },
  {
    "en": "the request",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Bitte, -n",
        "pron": "",
        "lit": "Ich habe noch eine Bitte.",
        "verify": false
      }
    }
  },
  {
    "en": "to ask; to request",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "bitten",
        "pron": "",
        "lit": "Darf ich Sie um etwas bitten?",
        "verify": false
      }
    }
  },
  {
    "en": "bitter",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "bitter",
        "pron": "",
        "lit": "Der Kaffee schmeckt bitter.",
        "verify": false
      }
    }
  },
  {
    "en": "to stay; to remain",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "bleiben",
        "pron": "",
        "lit": "Ich bleibe heute zu Hause. Wir bleiben nur bis morgen.",
        "verify": false
      }
    }
  },
  {
    "en": "the pencil",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Bleistift, -e",
        "pron": "",
        "lit": "Hast du einen Bleistift?",
        "verify": false
      }
    }
  },
  {
    "en": "the view; glance",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Blick",
        "pron": "",
        "lit": "Von diesem Hotel hat man einen guten Blick auf den Rhein.",
        "verify": false
      }
    }
  },
  {
    "en": "the flower",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Blume, -n",
        "pron": "",
        "lit": "Gefallen dir die Blumen?",
        "verify": false
      }
    }
  },
  {
    "en": "the sheet (of paper); arch",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Bogen",
        "pron": "",
        "lit": "Schreiben Sie Ihre Lösungen bitte auf den Antwortbogen.",
        "verify": false
      }
    }
  },
  {
    "en": "angry; bad",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "böse",
        "pron": "",
        "lit": "Sie ist böse auf mich.",
        "verify": false
      }
    }
  },
  {
    "en": "to need",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "brauchen",
        "pron": "",
        "lit": "Brauchst du die Zeitung noch?",
        "verify": false
      }
    }
  },
  {
    "en": "wide",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "breit",
        "pron": "",
        "lit": "Wie breit ist der Schrank?",
        "verify": false
      }
    }
  },
  {
    "en": "the letter",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Brief, -e",
        "pron": "",
        "lit": "Haben Sie einen Brief für mich?",
        "verify": false
      }
    }
  },
  {
    "en": "the stamp",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "die Briefmarke, -n",
        "pron": "",
        "lit": "Kaufst du bitte Briefmarken bei der Post.",
        "verify": false
      }
    }
  },
  {
    "en": "to bring",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "bringen",
        "pron": "",
        "lit": "Bringen Sie mir bitte noch einen Kaffee! Wir müssen ihn zum Arzt bringen.",
        "verify": false
      }
    }
  },
  {
    "en": "the bread",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Brot, -e",
        "pron": "",
        "lit": "Haben Sie auch Weißbrot? Nimm noch ein paar Brote für die Fahrt mit.",
        "verify": false
      }
    }
  },
  {
    "en": "the bread roll",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Brötchen, –",
        "pron": "",
        "lit": "Möchtest du Brötchen zum Frühstück?",
        "verify": false
      }
    }
  },
  {
    "en": "the brother",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Bruder, -ü",
        "pron": "",
        "lit": "Sein Bruder arbeitet auch hier.",
        "verify": false
      }
    }
  },
  {
    "en": "the book",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Buch, -ü, er",
        "pron": "",
        "lit": "Gute Bücher sind oft sehr teuer. In diesem Wörterbuch finden Sie mehr als 20.000 Wörter.",
        "verify": false
      }
    }
  },
  {
    "en": "the letter (alphabet)",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Buchstabe, -n",
        "pron": "",
        "lit": "Diesen Buchstaben gibt es in meiner Sprache nicht.",
        "verify": false
      }
    }
  },
  {
    "en": "to spell",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "buchstabieren",
        "pron": "",
        "lit": "Bitte buchstabieren Sie Ihren Namen.",
        "verify": false
      }
    }
  },
  {
    "en": "the bus",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "der Bus, -se",
        "pron": "",
        "lit": "Wann kommt der nächste Bus?",
        "verify": false
      }
    }
  },
  {
    "en": "the butter",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Butter",
        "pron": "",
        "lit": "Für mich bitte ein Brötchen mit Butter und Käse.",
        "verify": false
      }
    }
  },
  {
    "en": "the café",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Café, -s",
        "pron": "",
        "lit": "Sollen wir uns im Café treffen?",
        "verify": false
      }
    }
  },
  {
    "en": "the CD",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "die CD, -s",
        "pron": "",
        "lit": "Bring bitte deine Lieblings-CD mit.",
        "verify": false
      }
    }
  },
  {
    "en": "the boss",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Chef",
        "pron": "",
        "lit": "Wir haben eine neue Chefin.",
        "verify": false
      }
    }
  },
  {
    "en": "approximately; about",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "circa/ca.",
        "pron": "",
        "lit": "Von Mainz nach Frankfurt sind es circa fünfzig Kilometer.",
        "verify": false
      }
    }
  },
  {
    "en": "the computer",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Computer, –",
        "pron": "",
        "lit": "Wann bekommst du deinen neuen Computer?",
        "verify": false
      }
    }
  },
  {
    "en": "there; since",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "da",
        "pron": "",
        "lit": "Da hinten ist er ja. Wir sprechen gerade über Paul. Da kommt er ja gerade. Ich nehme das da. Ist Herr Klein schon da?",
        "verify": false
      }
    }
  },
  {
    "en": "the lady",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "die Dame, -n",
        "pron": "",
        "lit": "Damen (an der Toilette) Sehr geehrte Damen und Herren!",
        "verify": false
      }
    }
  },
  {
    "en": "next to it; beside it",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "daneben",
        "pron": "",
        "lit": "Du kennst doch die Post. Daneben ist die Bank.",
        "verify": false
      }
    }
  },
  {
    "en": "to thank",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "danken",
        "pron": "",
        "lit": "Ich danke Ihnen für die Einladung.",
        "verify": false
      }
    }
  },
  {
    "en": "thanks; gratitude",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Dank",
        "pron": "",
        "lit": "Vielen Dank! Herzlichen Dank!",
        "verify": false
      }
    }
  },
  {
    "en": "thank you",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "danke",
        "pron": "",
        "lit": "Soll ich Ihnen helfen? - Nein, danke!",
        "verify": false
      }
    }
  },
  {
    "en": "then",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "dann",
        "pron": "",
        "lit": "Ich muss noch schnell zur Post, dann komme ich.",
        "verify": false
      }
    }
  },
  {
    "en": "the date",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Datum",
        "pron": "",
        "lit": "Bitte schreiben Sie noch das Datum auf das Formular.",
        "verify": false
      }
    }
  },
  {
    "en": "to last; to take (time)",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "dauern",
        "pron": "",
        "lit": "Wie lange dauert der Film?",
        "verify": false
      }
    }
  },
  {
    "en": "your (informal, singular)",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "dein",
        "pron": "",
        "lit": "Ist das dein Auto? Ist das deins?",
        "verify": false
      }
    }
  },
  {
    "en": "because; for",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "denn",
        "pron": "",
        "lit": "Ich kann nicht kommen, denn ich bin krank.",
        "verify": false
      }
    }
  },
  {
    "en": "the (definite article)",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "der, die, das",
        "pron": "",
        "lit": "Ich nehme das da. Hier ist der Brief, den du suchst. Die Fahrkarte bekommst du am Bahnhof.",
        "verify": false
      }
    }
  },
  {
    "en": "you (accusative)",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "dich",
        "pron": "",
        "lit": "Die Blumen sind für dich.",
        "verify": false
      }
    }
  },
  {
    "en": "this; this one",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "dieser",
        "pron": "",
        "lit": "Ich nehme lieber diesen Kuchen.",
        "verify": false
      }
    }
  },
  {
    "en": "you (dative)",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "dir",
        "pron": "",
        "lit": "Gefallen dir die Blumen?",
        "verify": false
      }
    }
  },
  {
    "en": "the disco",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Disco",
        "pron": "",
        "lit": "Heute abend gehen wir in die Disco tanzen.",
        "verify": false
      }
    }
  },
  {
    "en": "the doctor",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Doktor",
        "pron": "",
        "lit": "Meine Tochter ist krank. Wir gehen zum Doktor.",
        "verify": false
      }
    }
  },
  {
    "en": "the double room",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "das Doppelzimmer",
        "pron": "",
        "lit": "Wollen Sie ein Doppelzimmer oder ein Einzelzimmer?",
        "verify": false
      }
    }
  },
  {
    "en": "the village",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Dorf, -ö, er",
        "pron": "",
        "lit": "Meine Familie lebt in einem Dorf.",
        "verify": false
      }
    }
  },
  {
    "en": "there; from there; to there",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "dort, -her, -hin",
        "pron": "",
        "lit": "Deine Tasche kannst du dorthin stellen. Dort ist unser Haus.",
        "verify": false
      }
    }
  },
  {
    "en": "outside",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "draußen",
        "pron": "",
        "lit": "Wollen wir draußen sitzen?",
        "verify": false
      }
    }
  },
  {
    "en": "to print",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "drucken",
        "pron": "",
        "lit": "Bitte drucke das Formular für mich.",
        "verify": false
      }
    }
  },
  {
    "en": "the printer",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Drucker, –",
        "pron": "",
        "lit": "Mein Drucker ist kaputt.",
        "verify": false
      }
    }
  },
  {
    "en": "to press; to push",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "drücken",
        "pron": "",
        "lit": "Drück hier, dann geht der Computer an.",
        "verify": false
      }
    }
  },
  {
    "en": "through",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "durch",
        "pron": "",
        "lit": "Am besten gehen Sie durch die Breite Straße.",
        "verify": false
      }
    }
  },
  {
    "en": "the announcement",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "die Durchsage, -n",
        "pron": "",
        "lit": "Ich habe die Durchsage nicht verstanden.",
        "verify": false
      }
    }
  },
  {
    "en": "to be allowed to; may",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "dürfen",
        "pron": "",
        "lit": "Sie dürfen hier nicht rauchen. Darf ich Sie zu einem Kaffee einladen? Es darf nicht mehr als 15 Euro kosten.",
        "verify": false
      }
    }
  },
  {
    "en": "the thirst",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Durst",
        "pron": "",
        "lit": "Hast du etwas zu trinken? Ich habe großen Durst.",
        "verify": false
      }
    }
  },
  {
    "en": "to shower",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "(sich) duschen",
        "pron": "",
        "lit": "Ich bade nicht so gern, ich dusche lieber.",
        "verify": false
      }
    }
  },
  {
    "en": "the shower",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Dusche",
        "pron": "",
        "lit": "Unsere Wohnung hat nur eine Dusche.",
        "verify": false
      }
    }
  },
  {
    "en": "the corner",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Ecke, -n",
        "pron": "",
        "lit": "An der nächsten Ecke links.",
        "verify": false
      }
    }
  },
  {
    "en": "the wife",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Ehefrau, -en/",
        "pron": "",
        "lit": "Das ist mein (Ehe-) Mann/meine (Ehe-) Frau.",
        "verify": false
      }
    }
  },
  {
    "en": "the husband",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Ehemann, ä, er",
        "pron": "",
        "lit": "Das ist mein (Ehe-) Mann/meine (Ehe-) Frau.",
        "verify": false
      }
    }
  },
  {
    "en": "the egg",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Ei, -er",
        "pron": "",
        "lit": "Möchtest du ein Ei zum Frühstück?",
        "verify": false
      }
    }
  },
  {
    "en": "hurried; urgent",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "eilig",
        "pron": "",
        "lit": "Hast du es eilig?",
        "verify": false
      }
    }
  },
  {
    "en": "a; one",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "ein",
        "pron": "",
        "lit": "Ich nehme ein Bier. Willst du auch eins? Ist hier einer, der das kann?",
        "verify": false
      }
    }
  },
  {
    "en": "simple; easy",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "einfach",
        "pron": "",
        "lit": "Die Prüfung ist ganz einfach. Hin und zurück? – Nein, bitte nur einfach. Ich brauche nur ein einfaches Zimmer.",
        "verify": false
      }
    }
  },
  {
    "en": "the entrance",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Eingang",
        "pron": "",
        "lit": "Der Eingang ist um die Ecke.",
        "verify": false
      }
    }
  },
  {
    "en": "to shop; to buy",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "einkaufen",
        "pron": "",
        "lit": "Ich muss noch für morgen einkaufen.",
        "verify": false
      }
    }
  },
  {
    "en": "to invite",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "einladen",
        "pron": "",
        "lit": "Darf ich Sie zu einem Kaffee einladen?",
        "verify": false
      }
    }
  },
  {
    "en": "the invitation",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Einladung",
        "pron": "",
        "lit": "Danke für die Einladung!",
        "verify": false
      }
    }
  },
  {
    "en": "once",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "einmal",
        "pron": "",
        "lit": "Diese Prüfung mache ich nicht noch einmal.",
        "verify": false
      }
    }
  },
  {
    "en": "to get on/in (vehicle)",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "einsteigen",
        "pron": "",
        "lit": "Schnell, steig ein, der Zug fährt gleich.",
        "verify": false
      }
    }
  },
  {
    "en": "the entry; admission",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Eintritt",
        "pron": "",
        "lit": "Der Preis für den Eintritt ist 5 Euro.",
        "verify": false
      }
    }
  },
  {
    "en": "the single room",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Einzelzimmer",
        "pron": "",
        "lit": "Haben Sie noch ein Einzelzimmer?",
        "verify": false
      }
    }
  },
  {
    "en": "the parents",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "die Eltern (pl.)",
        "pron": "",
        "lit": "Meine Eltern leben in Spanien.",
        "verify": false
      }
    }
  },
  {
    "en": "the email",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "die E-Mail, -s",
        "pron": "",
        "lit": "Ich habe Ihre E-Mail nicht bekommen.",
        "verify": false
      }
    }
  },
  {
    "en": "the recipient",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Empfänger, –",
        "pron": "",
        "lit": "Auf dem Brief steht dein Name, also bist du der Empfänger.",
        "verify": false
      }
    }
  },
  {
    "en": "to recommend",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "empfehlen",
        "pron": "",
        "lit": "Welchen Wein können Sie mir empfehlen?",
        "verify": false
      }
    }
  },
  {
    "en": "to end",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "enden",
        "pron": "",
        "lit": "Die Straße endet hier.",
        "verify": false
      }
    }
  },
  {
    "en": "the end",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "das Ende",
        "pron": "",
        "lit": "Sie wohnt am Ende der Straße. Er bekommt sein Geld am Ende des Monats.",
        "verify": false
      }
    }
  },
  {
    "en": "to excuse; to forgive",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "entschuldigen",
        "pron": "",
        "lit": "Entschuldigen Sie bitte!",
        "verify": false
      }
    }
  },
  {
    "en": "the apology; excuse me",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "die Entschuldigung",
        "pron": "",
        "lit": "Entschuldigung! – Bitte.",
        "verify": false
      }
    }
  },
  {
    "en": "he",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "er",
        "pron": "",
        "lit": "Er heißt Ali.",
        "verify": false
      }
    }
  },
  {
    "en": "the result",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "das Ergebnis, -se",
        "pron": "",
        "lit": "Das Ergebnis des Tests bekommen Sie in zwei Wochen.",
        "verify": false
      }
    }
  },
  {
    "en": "to explain",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "erklären",
        "pron": "",
        "lit": "Kannst du mir das erklären?",
        "verify": false
      }
    }
  },
  {
    "en": "to allow; to permit",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "erlauben",
        "pron": "",
        "lit": "Rauchen ist hier nicht erlaubt.",
        "verify": false
      }
    }
  },
  {
    "en": "the adult",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Erwachsene, -n",
        "pron": "",
        "lit": "Dieser Film ist nur für Erwachsene.",
        "verify": false
      }
    }
  },
  {
    "en": "to tell; to narrate",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "erzählen",
        "pron": "",
        "lit": "Wir müssen euch etwas erzählen!",
        "verify": false
      }
    }
  },
  {
    "en": "it",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "es",
        "pron": "",
        "lit": "Es regnet.",
        "verify": false
      }
    }
  },
  {
    "en": "to eat",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "essen",
        "pron": "",
        "lit": "Was gibt es zu essen?",
        "verify": false
      }
    }
  },
  {
    "en": "the food; meal",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "das Essen",
        "pron": "",
        "lit": "Das Essen ist heute sehr gut.",
        "verify": false
      }
    }
  },
  {
    "en": "your (plural)",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "euer",
        "pron": "",
        "lit": "Euer Kurs beginnt heute.",
        "verify": false
      }
    }
  },
  {
    "en": "to drive; to go (by vehicle)",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "fahren",
        "pron": "",
        "lit": "Ich fahre mit dem Auto zur Arbeit.",
        "verify": false
      }
    }
  },
  {
    "en": "the driver",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Fahrer",
        "pron": "",
        "lit": "Bitte nicht mit dem Fahrer sprechen!",
        "verify": false
      }
    }
  },
  {
    "en": "the (travel) ticket",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "die Fahrkarte, -n",
        "pron": "",
        "lit": "Hast du schon eine Fahrkarte?",
        "verify": false
      }
    }
  },
  {
    "en": "the bicycle",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Fahrrad, -ä, er",
        "pron": "",
        "lit": "Fährst du mit dem Fahrrad oder mit dem Auto?",
        "verify": false
      }
    }
  },
  {
    "en": "wrong; false",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "falsch",
        "pron": "",
        "lit": "Das ist falsch.",
        "verify": false
      }
    }
  },
  {
    "en": "the family",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "die Familie, -n",
        "pron": "",
        "lit": "Meine Familie lebt in Spanien.",
        "verify": false
      }
    }
  },
  {
    "en": "the surname; last name",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Familienname",
        "pron": "",
        "lit": "Meine Familiennamen sind García González.",
        "verify": false
      }
    }
  },
  {
    "en": "the marital status",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Familienstand",
        "pron": "",
        "lit": "Bei „Familienstand“ musst du „ledig“ ankreuzen.",
        "verify": false
      }
    }
  },
  {
    "en": "the color",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "die Farbe, -n",
        "pron": "",
        "lit": "Die Farbe gefällt mir gut.",
        "verify": false
      }
    }
  },
  {
    "en": "the fax",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "das Fax, -e",
        "pron": "",
        "lit": "Schicken Sie uns einfach ein Fax!",
        "verify": false
      }
    }
  },
  {
    "en": "the (public) holiday",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Feiertag",
        "pron": "",
        "lit": "z. B. Feierabend, Feiertag Am Montag ist Feiertag.",
        "verify": false
      }
    }
  },
  {
    "en": "to celebrate",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "feiern",
        "pron": "",
        "lit": "Wir feiern heute meinen Geburtstag.",
        "verify": false
      }
    }
  },
  {
    "en": "to be missing; to be lacking",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "fehlen",
        "pron": "",
        "lit": "Herr Müller ist nicht da, er fehlt schon seit drei Tagen. Was fehlt Ihnen?",
        "verify": false
      }
    }
  },
  {
    "en": "the mistake",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Fehler, –",
        "pron": "",
        "lit": "Diesen Fehler mache ich immer.",
        "verify": false
      }
    }
  },
  {
    "en": "to watch TV",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "fernsehen",
        "pron": "",
        "lit": "Wollen wir heute Abend mal fernsehen?",
        "verify": false
      }
    }
  },
  {
    "en": "finished; ready",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "fertig",
        "pron": "",
        "lit": "Bist du fertig? Ist mein Auto schon fertig?",
        "verify": false
      }
    }
  },
  {
    "en": "the fire",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Feuer",
        "pron": "",
        "lit": "Haben Sie Feuer?",
        "verify": false
      }
    }
  },
  {
    "en": "the fever",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "das Fieber",
        "pron": "",
        "lit": "Mein Mann hat noch immer Fieber.",
        "verify": false
      }
    }
  },
  {
    "en": "the film; movie",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Film, -e",
        "pron": "",
        "lit": "Ich möchte gern diesen Film sehen.",
        "verify": false
      }
    }
  },
  {
    "en": "to find",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "finden",
        "pron": "",
        "lit": "Wir müssen den Schlüssel finden.",
        "verify": false
      }
    }
  },
  {
    "en": "the company; firm",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Firma",
        "pron": "",
        "lit": "Er arbeitet jetzt bei einer anderen Firma.",
        "verify": false
      }
    }
  },
  {
    "en": "the fish",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Fisch, -e",
        "pron": "",
        "lit": "Ich esse gern Fisch. Fleisch mag ich nicht.",
        "verify": false
      }
    }
  },
  {
    "en": "the bottle",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Flasche, -n",
        "pron": "",
        "lit": "Eine Flasche Bier, bitte.",
        "verify": false
      }
    }
  },
  {
    "en": "the meat",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Fleisch",
        "pron": "",
        "lit": "Fleisch mag ich nicht.",
        "verify": false
      }
    }
  },
  {
    "en": "to fly",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "fliegen",
        "pron": "",
        "lit": "Ich fliege nicht gern. Deshalb fahre ich mit dem Zug.",
        "verify": false
      }
    }
  },
  {
    "en": "to depart (by plane)",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "abfliegen",
        "pron": "",
        "lit": "Wann fliegst du ab?",
        "verify": false
      }
    }
  },
  {
    "en": "the departure (flight)",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Abflug",
        "pron": "",
        "lit": "Der Abflug ist um 11.20 Uhr.",
        "verify": false
      }
    }
  },
  {
    "en": "the airport",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Flughafen",
        "pron": "",
        "lit": "Kannst du mich zum Flughafen bringen?",
        "verify": false
      }
    }
  },
  {
    "en": "the airplane",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Flugzeug",
        "pron": "",
        "lit": "Das Flugzeug aus Berlin kommt heute später an.",
        "verify": false
      }
    }
  },
  {
    "en": "the form (document)",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Formular, -e",
        "pron": "",
        "lit": "Sie müssen dieses Formular ausfüllen.",
        "verify": false
      }
    }
  },
  {
    "en": "the photo",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Foto, -s",
        "pron": "",
        "lit": "Darf ich ein Foto machen?",
        "verify": false
      }
    }
  },
  {
    "en": "to ask",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "fragen",
        "pron": "",
        "lit": "Er möchte Sie etwas fragen. Wann kommen Sie?",
        "verify": false
      }
    }
  },
  {
    "en": "the question",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "die Frage, -n",
        "pron": "",
        "lit": "Ich habe eine Frage.",
        "verify": false
      }
    }
  },
  {
    "en": "the woman; Mrs.",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "die Frau, -en",
        "pron": "",
        "lit": "Das ist Frau Becker. Guten Tag, Frau Schmitt! Hier arbeiten mehr Frauen als Männer.",
        "verify": false
      }
    }
  },
  {
    "en": "free",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "frei",
        "pron": "",
        "lit": "Ist der Platz noch frei?",
        "verify": false
      }
    }
  },
  {
    "en": "the free time; leisure",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Freizeit",
        "pron": "",
        "lit": "In meiner Freizeit spiele ich oft Fußball.",
        "verify": false
      }
    }
  },
  {
    "en": "foreign; strange",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "fremd",
        "pron": "",
        "lit": "Das weiß ich nicht; ich bin fremd hier.",
        "verify": false
      }
    }
  },
  {
    "en": "to be happy; glad",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "(sich) freuen",
        "pron": "",
        "lit": "Ich freue mich auf den Urlaub.",
        "verify": false
      }
    }
  },
  {
    "en": "the friend",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "der Freund, -e",
        "pron": "",
        "lit": "Das ist ein Freund von mir. Das ist meine Freundin.",
        "verify": false
      }
    }
  },
  {
    "en": "earlier; formerly",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "früher",
        "pron": "",
        "lit": "Früher waren wir oft zusammen im Kino.",
        "verify": false
      }
    }
  },
  {
    "en": "to have breakfast",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "frühstücken",
        "pron": "",
        "lit": "Am Sonntag frühstücke ich gern im Bett.",
        "verify": false
      }
    }
  },
  {
    "en": "the breakfast",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Frühstück",
        "pron": "",
        "lit": "Möchtest du ein Ei zum Frühstück?",
        "verify": false
      }
    }
  },
  {
    "en": "the guided tour",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "die Führung",
        "pron": "",
        "lit": "Die Führung durch das Haus beginnt in 3 Minuten.",
        "verify": false
      }
    }
  },
  {
    "en": "for",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "für",
        "pron": "",
        "lit": "Das ist für Sie. Das ist der Schlüssel für die Haustür. Das ist das Brot für morgen.",
        "verify": false
      }
    }
  },
  {
    "en": "the foot",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Fuß, -ü, e",
        "pron": "",
        "lit": "Der linke Fuß tut mir weh.",
        "verify": false
      }
    }
  },
  {
    "en": "football; soccer",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Fußball",
        "pron": "",
        "lit": "Spielt ihr gerne Fußball?",
        "verify": false
      }
    }
  },
  {
    "en": "the garden",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Garten",
        "pron": "",
        "lit": "Wir haben leider keinen Garten.",
        "verify": false
      }
    }
  },
  {
    "en": "the guest",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Gast, -ä, e",
        "pron": "",
        "lit": "Am Wochenende haben wir mehrere Gäste.",
        "verify": false
      }
    }
  },
  {
    "en": "to give",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "geben",
        "pron": "",
        "lit": "Kannst du mir bitte deinen Kugelschreiber geben? Es gibt keine Karten mehr.",
        "verify": false
      }
    }
  },
  {
    "en": "born",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "geboren",
        "pron": "",
        "lit": "Ich bin in Zagreb geboren.",
        "verify": false
      }
    }
  },
  {
    "en": "the birth year",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "das Geburtsjahr",
        "pron": "",
        "lit": "Das Geburtsjahr Ihres Sohnes, bitte?",
        "verify": false
      }
    }
  },
  {
    "en": "the birthplace",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Geburtsort",
        "pron": "",
        "lit": "Bitte schreiben Sie Ihren Geburtsort auf das Formular.",
        "verify": false
      }
    }
  },
  {
    "en": "the birthday",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "der Geburtstag",
        "pron": "",
        "lit": "Herzlichen Glückwunsch zum Geburtstag!",
        "verify": false
      }
    }
  },
  {
    "en": "to please; to like",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "gefallen",
        "pron": "",
        "lit": "Das gefällt mir.",
        "verify": false
      }
    }
  },
  {
    "en": "against; around (time)",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "gegen",
        "pron": "",
        "lit": "Fahr nicht gegen den Baum! Ich bin gegen diese Lösung. Wer spielt gegen wen?",
        "verify": false
      }
    }
  },
  {
    "en": "to go; to walk",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "gehen",
        "pron": "",
        "lit": "Ich weiß nicht, wie das geht. Wie geht‘s? Jetzt muss ich (aber) leider gehen. Ich muss zum Arzt gehen. Das geht nicht!",
        "verify": false
      }
    }
  },
  {
    "en": "to belong to",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "gehören",
        "pron": "",
        "lit": "Wem gehört das?",
        "verify": false
      }
    }
  },
  {
    "en": "the money",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "das Geld",
        "pron": "",
        "lit": "Hast du noch Geld?",
        "verify": false
      }
    }
  },
  {
    "en": "the vegetables",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Gemüse",
        "pron": "",
        "lit": "Gemüse brauchen wir auch noch.",
        "verify": false
      }
    }
  },
  {
    "en": "the luggage",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Gepäck",
        "pron": "",
        "lit": "Wollen Sie Ihr Gepäck mitnehmen?",
        "verify": false
      }
    }
  },
  {
    "en": "just; straight",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "gerade",
        "pron": "",
        "lit": "Da kommt er ja gerade.",
        "verify": false
      }
    }
  },
  {
    "en": "straight ahead",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "geradeaus",
        "pron": "",
        "lit": "Gehen Sie immer geradeaus!",
        "verify": false
      }
    }
  },
  {
    "en": "gladly; willingly",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "gern(e)",
        "pron": "",
        "lit": "Ich gehe gerne einkaufen.",
        "verify": false
      }
    }
  },
  {
    "en": "the shop; business",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Geschäft, -e",
        "pron": "",
        "lit": "Die Geschäfte schließen um 18.30 Uhr.",
        "verify": false
      }
    }
  },
  {
    "en": "the gift; present",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Geschenk, -e",
        "pron": "",
        "lit": "Danke für das schöne Geschenk.",
        "verify": false
      }
    }
  },
  {
    "en": "the siblings",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Geschwister (pl.)",
        "pron": "",
        "lit": "Ich habe leider keine Geschwister.",
        "verify": false
      }
    }
  },
  {
    "en": "the conversation",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Gespräch, -e",
        "pron": "",
        "lit": "Das Gespräch mit Frau Kunz ist um 14 Uhr.",
        "verify": false
      }
    }
  },
  {
    "en": "yesterday",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "gestern",
        "pron": "",
        "lit": "Gestern war ich krank.",
        "verify": false
      }
    }
  },
  {
    "en": "died",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "gestorben",
        "pron": "",
        "lit": "Meine Frau ist gestern gestorben.",
        "verify": false
      }
    }
  },
  {
    "en": "the drink; beverage",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Getränk, -e",
        "pron": "",
        "lit": "Mein Lieblingsgetränk ist Tomatensaft.",
        "verify": false
      }
    }
  },
  {
    "en": "the weight",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "das Gewicht",
        "pron": "",
        "lit": "Bei „Gewicht“ schreibst du: 62 Kilo.",
        "verify": false
      }
    }
  },
  {
    "en": "to win",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "gewinnen",
        "pron": "",
        "lit": "Wer gewinnt das Spiel?",
        "verify": false
      }
    }
  },
  {
    "en": "the glass",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Glas, -ä, er",
        "pron": "",
        "lit": "Bitte noch ein Glas Wein! Wir brauchen noch drei Gläser.",
        "verify": false
      }
    }
  },
  {
    "en": "to believe; to think",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "glauben",
        "pron": "",
        "lit": "Sie können mir glauben, es ist so. Ich glaube, er kommt gleich.",
        "verify": false
      }
    }
  },
  {
    "en": "same; right away",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "gleich",
        "pron": "",
        "lit": "Das ist mir gleich. Das ist der gleiche Preis. Ich komme gleich.",
        "verify": false
      }
    }
  },
  {
    "en": "the (railway) track; platform",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Gleis, -e",
        "pron": "",
        "lit": "Der ICE nach Berlin hält heute an Gleis 12.",
        "verify": false
      }
    }
  },
  {
    "en": "luck; happiness",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Glück",
        "pron": "",
        "lit": "Viel Glück!",
        "verify": false
      }
    }
  },
  {
    "en": "happy",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "glücklich",
        "pron": "",
        "lit": "Meine Kinder sind glücklich verheiratet.",
        "verify": false
      }
    }
  },
  {
    "en": "congratulations",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Glückwunsch",
        "pron": "",
        "lit": "Herzlichen Glückwunsch zum Geburtstag.",
        "verify": false
      }
    }
  },
  {
    "en": "degree(s) (Celsius)",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "Grad (Celsius)",
        "pron": "",
        "lit": "Heute haben wir dreißig Grad.",
        "verify": false
      }
    }
  },
  {
    "en": "to congratulate",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "gratulieren",
        "pron": "",
        "lit": "Ich gratuliere dir!",
        "verify": false
      }
    }
  },
  {
    "en": "to grill; to barbecue",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "grillen",
        "pron": "",
        "lit": "Heute grillen wir im Garten.",
        "verify": false
      }
    }
  },
  {
    "en": "big; tall",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "groß",
        "pron": "",
        "lit": "Mein Bruder und ich sind gleich groß. Frankfurt ist eine große Stadt.",
        "verify": false
      }
    }
  },
  {
    "en": "the size",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Größe",
        "pron": "",
        "lit": "Haben Sie das auch in Größe 40?",
        "verify": false
      }
    }
  },
  {
    "en": "the grandparents",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Großeltern (pl.)",
        "pron": "",
        "lit": "Meine Großeltern leben in Japan.",
        "verify": false
      }
    }
  },
  {
    "en": "the grandmother",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Großmutter",
        "pron": "",
        "lit": "Meine Großmutter heißt Eva.",
        "verify": false
      }
    }
  },
  {
    "en": "the grandfather",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Großvater",
        "pron": "",
        "lit": "Mein Großvater ist schon 80.",
        "verify": false
      }
    }
  },
  {
    "en": "the group",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Gruppe, -n",
        "pron": "",
        "lit": "Die erste Gruppe beginnt um 16 Uhr.",
        "verify": false
      }
    }
  },
  {
    "en": "the greeting",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Gruß, -ü, e",
        "pron": "",
        "lit": "Viele Grüße an Ihre Frau. Mit freundlichen Grüßen",
        "verify": false
      }
    }
  },
  {
    "en": "valid",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "gültig",
        "pron": "",
        "lit": "Der Pass ist nicht mehr gültig.",
        "verify": false
      }
    }
  },
  {
    "en": "affordable; favorable",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "günstig",
        "pron": "",
        "lit": "Dort gibt es günstige Angebote.",
        "verify": false
      }
    }
  },
  {
    "en": "good",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "gut",
        "pron": "",
        "lit": "Das finde ich gut. Ich komme um 13 Uhr. – Gut! Guten Morgen! Ein gutes neues Jahr! Guten Appetit!",
        "verify": false
      }
    }
  },
  {
    "en": "the hair",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Haar, -e",
        "pron": "",
        "lit": "Sie hat lange Haare.",
        "verify": false
      }
    }
  },
  {
    "en": "to have",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "haben",
        "pron": "",
        "lit": "Ich habe ein neues Auto.",
        "verify": false
      }
    }
  },
  {
    "en": "the chicken",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "das Hähnchen, -",
        "pron": "",
        "lit": "Ein Hähnchen mit Pommes bitte!",
        "verify": false
      }
    }
  },
  {
    "en": "half board (hotel meal plan)",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "die Halbpension",
        "pron": "",
        "lit": "Möchten Sie Vollpension oder Halbpension?",
        "verify": false
      }
    }
  },
  {
    "en": "the hall",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "die Halle",
        "pron": "",
        "lit": "Wir treffen uns in Halle B",
        "verify": false
      }
    }
  },
  {
    "en": "hello",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "hallo",
        "pron": "",
        "lit": "Hallo Inge! Wie geht’s?",
        "verify": false
      }
    }
  },
  {
    "en": "to hold; to stop",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "halten",
        "pron": "",
        "lit": "Dieser Zug hält nicht in Rüdesheim.",
        "verify": false
      }
    }
  },
  {
    "en": "the (bus/tram) stop",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Haltestelle",
        "pron": "",
        "lit": "An der nächsten Haltestelle müssen Sie aussteigen.",
        "verify": false
      }
    }
  },
  {
    "en": "the hand",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Hand, -ä, e",
        "pron": "",
        "lit": "Er gibt mir die Hand.",
        "verify": false
      }
    }
  },
  {
    "en": "the mobile phone",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "das Handy, -s",
        "pron": "",
        "lit": "In der Schule bitte die Handys ausmachen!",
        "verify": false
      }
    }
  },
  {
    "en": "the house",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "das Haus, -ä, er",
        "pron": "",
        "lit": "In welchem Haus wohnst du? Ich gehe jetzt nach Hause. Paul ist nicht zu Hause.",
        "verify": false
      }
    }
  },
  {
    "en": "the homework",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Hausaufgabe,-n",
        "pron": "",
        "lit": "Kannst du mir bei den Hausaufgaben helfen?",
        "verify": false
      }
    }
  },
  {
    "en": "the housewife",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "die Hausfrau, -en/",
        "pron": "",
        "lit": "Die Hausfrau/der Hausmann wäscht, kocht und kauft ein.",
        "verify": false
      }
    }
  },
  {
    "en": "the house-husband",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Hausmann",
        "pron": "",
        "lit": "Die Hausfrau/der Hausmann wäscht, kocht und kauft ein.",
        "verify": false
      }
    }
  },
  {
    "en": "the home(land)",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "die Heimat",
        "pron": "",
        "lit": "Ich komme aus der Schweiz. Das ist meine Heimat.",
        "verify": false
      }
    }
  },
  {
    "en": "to marry",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "heiraten",
        "pron": "",
        "lit": "Meine Schwester heiratet einen Japaner.",
        "verify": false
      }
    }
  },
  {
    "en": "to be called; named",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "heißen",
        "pron": "",
        "lit": "Ich heiße Charlotte Meier. Wie heißt das auf Deutsch?",
        "verify": false
      }
    }
  },
  {
    "en": "to help",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "helfen",
        "pron": "",
        "lit": "Können Sie mir helfen, bitte?",
        "verify": false
      }
    }
  },
  {
    "en": "bright; light",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "hell",
        "pron": "",
        "lit": "Im Sommer ist es bis 21 Uhr hell.",
        "verify": false
      }
    }
  },
  {
    "en": "the stove",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Herd",
        "pron": "",
        "lit": "In der neuen Küche fehlt noch der Herd.",
        "verify": false
      }
    }
  },
  {
    "en": "the gentleman; Mr.",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "der Herr, -en",
        "pron": "",
        "lit": "Guten Tag, Herr Sommer!",
        "verify": false
      }
    }
  },
  {
    "en": "warm; cordial",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "herzlich",
        "pron": "",
        "lit": "Herzlichen Glückwunsch!",
        "verify": false
      }
    }
  },
  {
    "en": "today",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "heute",
        "pron": "",
        "lit": "Heute ist ein schöner Tag.",
        "verify": false
      }
    }
  },
  {
    "en": "here",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "hier",
        "pron": "",
        "lit": "Hier ist 06131-553221, Pamela Linke. Hier wohne ich.",
        "verify": false
      }
    }
  },
  {
    "en": "the help",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Hilfe",
        "pron": "",
        "lit": "Hilfe! Bitte helfen Sie mir! Brauchen Sie meine Hilfe?",
        "verify": false
      }
    }
  },
  {
    "en": "at the back; behind",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "hinten",
        "pron": "",
        "lit": "Die Tür zum Aussteigen ist hinten.",
        "verify": false
      }
    }
  },
  {
    "en": "the hobby",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Hobby, -s",
        "pron": "",
        "lit": "Meine Hobbys sind Wandern und Schwimmen.",
        "verify": false
      }
    }
  },
  {
    "en": "high; tall",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "hoch",
        "pron": "",
        "lit": "Der Mount Everest ist 8.880 Meter hoch.",
        "verify": false
      }
    }
  },
  {
    "en": "the wedding",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Hochzeit",
        "pron": "",
        "lit": "Zur dieser Hochzeit kommen mehr als fünfzig Gäste.",
        "verify": false
      }
    }
  },
  {
    "en": "to fetch; to get",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "holen",
        "pron": "",
        "lit": "Ich hole zwei Flaschen Wasser aus der Küche.",
        "verify": false
      }
    }
  },
  {
    "en": "to hear; to listen",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "hören",
        "pron": "",
        "lit": "Hör mal! Was ist das? Ich habe das Lied schon mal gehört.",
        "verify": false
      }
    }
  },
  {
    "en": "the hotel",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "das Hotel, -s",
        "pron": "",
        "lit": "Im Urlaub sind wir in einem Hotel am Meer.",
        "verify": false
      }
    }
  },
  {
    "en": "the dog",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Hund, -e",
        "pron": "",
        "lit": "Der Hund ist noch jung.",
        "verify": false
      }
    }
  },
  {
    "en": "the hunger",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Hunger",
        "pron": "",
        "lit": "Ich habe Hunger! Wann ist das Essen fertig?",
        "verify": false
      }
    }
  },
  {
    "en": "I",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "ich",
        "pron": "",
        "lit": "Ich heiße Veronika.",
        "verify": false
      }
    }
  },
  {
    "en": "her; him",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "ihr/ihm/ihn",
        "pron": "",
        "lit": "Gib ihr/ihm bitte das Buch. Ruf ihn bitte an.",
        "verify": false
      }
    }
  },
  {
    "en": "always",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "immer",
        "pron": "",
        "lit": "Frau Bast kommt immer zu spät.",
        "verify": false
      }
    }
  },
  {
    "en": "in",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "in",
        "pron": "",
        "lit": "Ich wohne in Wiesbaden. Der Zug kommt in fünf Minuten. Frau Rausch arbeitet in einem Geschäft. Komm, wir gehen ins Kino.",
        "verify": false
      }
    }
  },
  {
    "en": "the information",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Information, -en",
        "pron": "",
        "lit": "Wenn Sie Fragen haben, gehen Sie zur Information. Wir haben hier wichtige Informationen für Sie.",
        "verify": false
      }
    }
  },
  {
    "en": "international",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "international",
        "pron": "",
        "lit": "Unser Deutschkurs ist international: Silvana kommt aus Italien, Conchi aus Spanien, Yin aus China ...",
        "verify": false
      }
    }
  },
  {
    "en": "the internet",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "das Internet",
        "pron": "",
        "lit": "Das findest du im Internet.",
        "verify": false
      }
    }
  },
  {
    "en": "yes",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "ja",
        "pron": "",
        "lit": "Sind Sie Herr Watanabe? – Ja.",
        "verify": false
      }
    }
  },
  {
    "en": "the jacket",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Jacke, -n",
        "pron": "",
        "lit": "Zieh dir eine Jacke an. Es ist kalt.",
        "verify": false
      }
    }
  },
  {
    "en": "each; every",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "jeder",
        "pron": "",
        "lit": "Blumen kannst du in jedem Bahnhof kaufen.",
        "verify": false
      }
    }
  },
  {
    "en": "now",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "jetzt",
        "pron": "",
        "lit": "Jetzt machen wir eine Pause.",
        "verify": false
      }
    }
  },
  {
    "en": "the job",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Job, -s",
        "pron": "",
        "lit": "Jenny hat einen neuen Job bei der Post.",
        "verify": false
      }
    }
  },
  {
    "en": "the young person; teenager",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Jugendliche, -n",
        "pron": "",
        "lit": "Viele Jugendliche kaufen gern ein.",
        "verify": false
      }
    }
  },
  {
    "en": "young",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "jung",
        "pron": "",
        "lit": "Claudia ist 21. – Was? Noch so jung?",
        "verify": false
      }
    }
  },
  {
    "en": "the boy",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Junge, -n",
        "pron": "",
        "lit": "Ich habe zwei Kinder. Einen Jungen und ein Mädchen.",
        "verify": false
      }
    }
  },
  {
    "en": "the coffee",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "der Kaffee",
        "pron": "",
        "lit": "Zum Frühstück trinke ich immer Kaffee.",
        "verify": false
      }
    }
  },
  {
    "en": "broken",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "kaputt",
        "pron": "",
        "lit": "Das Glas war teuer. Es geht sehr leicht kaputt.",
        "verify": false
      }
    }
  },
  {
    "en": "the card; ticket; map",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "die Karte, -n",
        "pron": "",
        "lit": "Ich schreibe meinen Bekannten eine Karte aus dem Urlaub. Wollen wir Karten spielen? Ich möchte auch etwas essen. Bringen Sie mir die Karte, bitte.",
        "verify": false
      }
    }
  },
  {
    "en": "(credit) card",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "(Kredit)-Karte, -n",
        "pron": "",
        "lit": "Kann ich auch mit Karte (be-) zahlen?",
        "verify": false
      }
    }
  },
  {
    "en": "the potato",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Kartoffel, -n",
        "pron": "",
        "lit": "Für Pommes frites braucht man Kartoffeln.",
        "verify": false
      }
    }
  },
  {
    "en": "the cash register; checkout",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Kasse",
        "pron": "",
        "lit": "Zahlen Sie bitte an der Kasse.",
        "verify": false
      }
    }
  },
  {
    "en": "to buy",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "kaufen",
        "pron": "",
        "lit": "Tim kauft sich ein neues Auto.",
        "verify": false
      }
    }
  },
  {
    "en": "no; not any",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "kein",
        "pron": "",
        "lit": "Es gibt keine Eintrittskarten mehr.",
        "verify": false
      }
    }
  },
  {
    "en": "to know (a person/thing)",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "kennen",
        "pron": "",
        "lit": "Kennen Sie diese Frau? – Nein, leider nicht.",
        "verify": false
      }
    }
  },
  {
    "en": "to get to know; to meet",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "kennenlernen",
        "pron": "",
        "lit": "Wir sind neu hier. Wir möchten Sie kennenlernen.",
        "verify": false
      }
    }
  },
  {
    "en": "the child",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "das Kind, -er",
        "pron": "",
        "lit": "Wie viele Kinder haben Sie?",
        "verify": false
      }
    }
  },
  {
    "en": "the kindergarten",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Kindergarten",
        "pron": "",
        "lit": "Die kleine Laura geht schon in den Kindergarten.",
        "verify": false
      }
    }
  },
  {
    "en": "the cinema",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Kino, -s",
        "pron": "",
        "lit": "Wir sehen heute Abend im Kino einen schönen Film.",
        "verify": false
      }
    }
  },
  {
    "en": "the kiosk",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Kiosk",
        "pron": "",
        "lit": "Am Kiosk bekommen Sie Getränke, Zigaretten und Zeitungen.",
        "verify": false
      }
    }
  },
  {
    "en": "clear; of course",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "klar",
        "pron": "",
        "lit": "Kommst du mit? – Klar!",
        "verify": false
      }
    }
  },
  {
    "en": "the class",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Klasse",
        "pron": "",
        "lit": "In unserer Klasse sind fünfundzwanzig Schüler. Im Zug fahre ich immer 2. Klasse.",
        "verify": false
      }
    }
  },
  {
    "en": "the clothing",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Kleidung",
        "pron": "",
        "lit": "Wo finde ich Kleidung? – Jacken im ersten, Jeans im zweiten Stock.",
        "verify": false
      }
    }
  },
  {
    "en": "small",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "klein",
        "pron": "",
        "lit": "Eltville ist eine kleine Stadt am Rhein.",
        "verify": false
      }
    }
  },
  {
    "en": "to cook",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "kochen",
        "pron": "",
        "lit": "Herr Georgi kann gut kochen.",
        "verify": false
      }
    }
  },
  {
    "en": "the suitcase",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Koffer, –",
        "pron": "",
        "lit": "Ist das Ihr Koffer?",
        "verify": false
      }
    }
  },
  {
    "en": "the colleague",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Kollege, -n",
        "pron": "",
        "lit": "Wie heißt die neue Kollegin?",
        "verify": false
      }
    }
  },
  {
    "en": "to come",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "kommen",
        "pron": "",
        "lit": "Woher kommen Sie? – Aus Frankreich. Kommst du mit ins Schwimmbad?",
        "verify": false
      }
    }
  },
  {
    "en": "to be able to; can",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "können",
        "pron": "",
        "lit": "Ich kann Deutsch und Russisch. Können Sie mir helfen?",
        "verify": false
      }
    }
  },
  {
    "en": "the (bank) account",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Konto",
        "pron": "",
        "lit": "Das Geld überweisen wir am ersten März auf Ihr Konto.",
        "verify": false
      }
    }
  },
  {
    "en": "the head",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Kopf",
        "pron": "",
        "lit": "Mein Kopf tut weh!",
        "verify": false
      }
    }
  },
  {
    "en": "to cost",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "kosten",
        "pron": "",
        "lit": "Wie viel kostet das? – 10 Euro.",
        "verify": false
      }
    }
  },
  {
    "en": "sick; ill",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "krank",
        "pron": "",
        "lit": "Ich kann heute nicht zur Arbeit kommen, ich bin krank und liege im Bett.",
        "verify": false
      }
    }
  },
  {
    "en": "to get; to receive (informal)",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "kriegen",
        "pron": "",
        "lit": "Ich kriege 15 Euro in der Stunde für meine Arbeit.",
        "verify": false
      }
    }
  },
  {
    "en": "the kitchen",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Küche",
        "pron": "",
        "lit": "Der neue Herd kommt in die Küche.",
        "verify": false
      }
    }
  },
  {
    "en": "the cake",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Kuchen",
        "pron": "",
        "lit": "Ich nehme ein Stück Kuchen.",
        "verify": false
      }
    }
  },
  {
    "en": "the ballpoint pen",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Kugelschreiber",
        "pron": "",
        "lit": "Hast du einen Kugelschreiber für mich?",
        "verify": false
      }
    }
  },
  {
    "en": "the refrigerator",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Kühlschrank",
        "pron": "",
        "lit": "Haben wir noch Milch? – Ja, im Kühlschrank.",
        "verify": false
      }
    }
  },
  {
    "en": "cultural",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "kulturell",
        "pron": "",
        "lit": "Ich bin kulturell interessiert. Ich gehe oft ins Museum.",
        "verify": false
      }
    }
  },
  {
    "en": "to take care of; to look after",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "sich kümmern",
        "pron": "",
        "lit": "Jede Mutter kümmert sich um ihre kleinen Kinder.",
        "verify": false
      }
    }
  },
  {
    "en": "the customer",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Kunde, -n",
        "pron": "",
        "lit": "Einen Moment, bitte. Ich habe eine Kundin.",
        "verify": false
      }
    }
  },
  {
    "en": "the course",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Kurs, -e",
        "pron": "",
        "lit": "Der Deutschkurs geht bis zum Sommer.",
        "verify": false
      }
    }
  },
  {
    "en": "short",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "kurz",
        "pron": "",
        "lit": "Ricardo hat kurzes Haar.",
        "verify": false
      }
    }
  },
  {
    "en": "to laugh",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "lachen",
        "pron": "",
        "lit": "Die Kinder lachen viel.",
        "verify": false
      }
    }
  },
  {
    "en": "the shop; store",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Laden, -ä",
        "pron": "",
        "lit": "Im Buchladen können Sie Bücher kaufen.",
        "verify": false
      }
    }
  },
  {
    "en": "the country",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "das Land, -ä, er",
        "pron": "",
        "lit": "Italien ist ein schönes Land.",
        "verify": false
      }
    }
  },
  {
    "en": "long",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "lang",
        "pron": "",
        "lit": "Die Jeans ist zu lang.",
        "verify": false
      }
    }
  },
  {
    "en": "for a long time",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "lange",
        "pron": "",
        "lit": "Wie lange fährt der Zug von Hamburg nach Berlin?",
        "verify": false
      }
    }
  },
  {
    "en": "slowly",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "langsam",
        "pron": "",
        "lit": "Könnten Sie bitte etwas langsamer sprechen?",
        "verify": false
      }
    }
  },
  {
    "en": "to run; to walk",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "laufen",
        "pron": "",
        "lit": "Ich möchte nicht Auto fahren, ich möchte laufen.",
        "verify": false
      }
    }
  },
  {
    "en": "loud",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "laut",
        "pron": "",
        "lit": "Nicht so laut! Das Baby schläft.",
        "verify": false
      }
    }
  },
  {
    "en": "to live",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "leben",
        "pron": "",
        "lit": "Sie lebt bei ihrer Schwester. Ihre Eltern leben nicht mehr.",
        "verify": false
      }
    }
  },
  {
    "en": "the life",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Leben",
        "pron": "",
        "lit": "Das Leben in diesem Land ist teuer.",
        "verify": false
      }
    }
  },
  {
    "en": "the groceries; food",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Lebensmittel (pl.)",
        "pron": "",
        "lit": "Lebensmittel bekommen Sie im Supermarkt.",
        "verify": false
      }
    }
  },
  {
    "en": "single; unmarried",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "ledig",
        "pron": "",
        "lit": "Sind Sie verheiratet? – Nein. Ledig.",
        "verify": false
      }
    }
  },
  {
    "en": "to lay; to put down",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "legen",
        "pron": "",
        "lit": "Legen Sie das Buch auf den Tisch.",
        "verify": false
      }
    }
  },
  {
    "en": "the teacher",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "der Lehrer, –",
        "pron": "",
        "lit": "Unsere Deutschlehrerin heißt Frau Müller.",
        "verify": false
      }
    }
  },
  {
    "en": "easy; light",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "leicht",
        "pron": "",
        "lit": "Der Koffer ist leicht. Deutsch ist nicht leicht.",
        "verify": false
      }
    }
  },
  {
    "en": "unfortunately",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "leider",
        "pron": "",
        "lit": "Leider kann ich nicht kommen. Ich muss zum Arzt.",
        "verify": false
      }
    }
  },
  {
    "en": "quiet; soft",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "leise",
        "pron": "",
        "lit": "Seid leise. Die anderen schlafen schon.",
        "verify": false
      }
    }
  },
  {
    "en": "to learn",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "lernen",
        "pron": "",
        "lit": "Wie lange lernen Sie schon Deutsch?",
        "verify": false
      }
    }
  },
  {
    "en": "to read",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "lesen",
        "pron": "",
        "lit": "Ich lese ein Buch von García Márquez.",
        "verify": false
      }
    }
  },
  {
    "en": "last",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "letzte",
        "pron": "",
        "lit": "Morgen ist der letzte Kurstag.",
        "verify": false
      }
    }
  },
  {
    "en": "the people",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "die Leute (pl.)",
        "pron": "",
        "lit": "In der Disko sind viele Leute.",
        "verify": false
      }
    }
  },
  {
    "en": "the light",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Licht",
        "pron": "",
        "lit": "Wo macht man hier das Licht an?",
        "verify": false
      }
    }
  },
  {
    "en": "dear; nice",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "lieb",
        "pron": "",
        "lit": "Liebe Susanne, lieber Hans,",
        "verify": false
      }
    }
  },
  {
    "en": "to love",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "lieben",
        "pron": "",
        "lit": "Ich liebe dich!",
        "verify": false
      }
    }
  },
  {
    "en": "rather; preferably",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "lieber",
        "pron": "",
        "lit": "Sie fährt lieber mit der Bahn.",
        "verify": false
      }
    }
  },
  {
    "en": "(the) favorite movie",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Lieblingsfilm",
        "pron": "",
        "lit": "Mein Lieblingsfilm ist „Schwarze Augen“.",
        "verify": false
      }
    }
  },
  {
    "en": "the song",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Lied, -er",
        "pron": "",
        "lit": "Welches ist dein Lieblingslied?",
        "verify": false
      }
    }
  },
  {
    "en": "to lie; to be located",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "liegen",
        "pron": "",
        "lit": "Um neun Uhr liegt Judith noch im Bett. Frankfurt liegt am Main.",
        "verify": false
      }
    }
  },
  {
    "en": "left",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "links",
        "pron": "",
        "lit": "Gehen Sie die nächste Straße links.",
        "verify": false
      }
    }
  },
  {
    "en": "the truck",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Lkw, -s",
        "pron": "",
        "lit": "Dieser Lastkraftwagen ist sehr groß.",
        "verify": false
      }
    }
  },
  {
    "en": "the restaurant; pub",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "das Lokal",
        "pron": "",
        "lit": "In unserer Straße gibt es ein neues Lokal.",
        "verify": false
      }
    }
  },
  {
    "en": "the solution",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Lösung, -en",
        "pron": "",
        "lit": "Die Lösung ist ganz einfach.",
        "verify": false
      }
    }
  },
  {
    "en": "funny",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "lustig",
        "pron": "",
        "lit": "Frau Mertens ist lustig. Sie lacht immer.",
        "verify": false
      }
    }
  },
  {
    "en": "to do; to make",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "machen",
        "pron": "",
        "lit": "Was machst du heute Abend? Ich muss jetzt das Essen machen. Das macht 5 Euro 95. Das macht nichts.",
        "verify": false
      }
    }
  },
  {
    "en": "the girl",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Mädchen, –",
        "pron": "",
        "lit": "Familie Kurz bekommt ein Baby. – Junge oder Mädchen?",
        "verify": false
      }
    }
  },
  {
    "en": "one; you (impersonal)",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "man",
        "pron": "",
        "lit": "Hier darf man nicht rauchen.",
        "verify": false
      }
    }
  },
  {
    "en": "the man",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "der Mann, -ä, er",
        "pron": "",
        "lit": "Mein Mann arbeitet bei der Polizei.",
        "verify": false
      }
    }
  },
  {
    "en": "male",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "männlich",
        "pron": "",
        "lit": "Kreuzen Sie bitte an: „weiblich“ oder „männlich“.",
        "verify": false
      }
    }
  },
  {
    "en": "the machine",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Maschine, -n",
        "pron": "",
        "lit": "Die Waschmaschine ist günstig.",
        "verify": false
      }
    }
  },
  {
    "en": "the sea",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Meer",
        "pron": "",
        "lit": "Wir machen Urlaub am Meer.",
        "verify": false
      }
    }
  },
  {
    "en": "more",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "mehr",
        "pron": "",
        "lit": "Dieses Auto kostet 1.000 Euro mehr als das andere.",
        "verify": false
      }
    }
  },
  {
    "en": "my",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "mein",
        "pron": "",
        "lit": "Mein Vater ist Arzt.",
        "verify": false
      }
    }
  },
  {
    "en": "most (of them/people)",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die meisten",
        "pron": "",
        "lit": "Die meisten Norddeutschen sind sehr groß.",
        "verify": false
      }
    }
  },
  {
    "en": "the person; human",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Mensch, -en",
        "pron": "",
        "lit": "Die Menschen sind hier anders als bei uns.",
        "verify": false
      }
    }
  },
  {
    "en": "to rent",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "mieten",
        "pron": "",
        "lit": "Ich möchte ein Auto mieten.",
        "verify": false
      }
    }
  },
  {
    "en": "the rent",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Miete",
        "pron": "",
        "lit": "Die Miete für diese Wohnung ist 600 Euro.",
        "verify": false
      }
    }
  },
  {
    "en": "the milk",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Milch",
        "pron": "",
        "lit": "Die Milch steht im Kühlschrank.",
        "verify": false
      }
    }
  },
  {
    "en": "with",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "mit",
        "pron": "",
        "lit": "Trinken Sie den Kaffee mit Milch?",
        "verify": false
      }
    }
  },
  {
    "en": "to bring along",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "mitbringen",
        "pron": "",
        "lit": "Ich gehe einkaufen. Soll ich dir was mitbringen?",
        "verify": false
      }
    }
  },
  {
    "en": "to come along",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "mitkommen",
        "pron": "",
        "lit": "Ich gehe ins Kino. Kommst du mit?",
        "verify": false
      }
    }
  },
  {
    "en": "to take part; to join in",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "mitmachen",
        "pron": "",
        "lit": "Warum macht ihr nicht mit?",
        "verify": false
      }
    }
  },
  {
    "en": "to take along",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "mitnehmen",
        "pron": "",
        "lit": "Nehmen wir meine Schwester ins Kino mit?",
        "verify": false
      }
    }
  },
  {
    "en": "the middle",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Mitte",
        "pron": "",
        "lit": "Der Lehrer steht in der Mitte des Klassenzimmers.",
        "verify": false
      }
    }
  },
  {
    "en": "the furniture",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "die Möbel (pl.)",
        "pron": "",
        "lit": "Sind die Möbel neu?",
        "verify": false
      }
    }
  },
  {
    "en": "would like",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "möchten",
        "pron": "",
        "lit": "Was möchten Sie trinken?",
        "verify": false
      }
    }
  },
  {
    "en": "to like",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "mögen",
        "pron": "",
        "lit": "Magst du Kaffee oder Tee?",
        "verify": false
      }
    }
  },
  {
    "en": "possible",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "möglich",
        "pron": "",
        "lit": "Mit dieser Fahrkarte ist die Fahrt ab 9 Uhr möglich.",
        "verify": false
      }
    }
  },
  {
    "en": "the moment",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "der Moment",
        "pron": "",
        "lit": "Moment mal bitte! Einen Moment bitte.",
        "verify": false
      }
    }
  },
  {
    "en": "tomorrow",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "morgen",
        "pron": "",
        "lit": "Morgen beginnt die Schule um 10 Uhr.",
        "verify": false
      }
    }
  },
  {
    "en": "tired",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "müde",
        "pron": "",
        "lit": "Ich bin müde. Ich gehe schlafen.",
        "verify": false
      }
    }
  },
  {
    "en": "the mouth",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Mund",
        "pron": "",
        "lit": "Öffnen Sie den Mund.",
        "verify": false
      }
    }
  },
  {
    "en": "must; to have to",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "müssen",
        "pron": "",
        "lit": "Ich muss jeden Tag von 8 Uhr bis 18 Uhr arbeiten.",
        "verify": false
      }
    }
  },
  {
    "en": "the mother",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "die Mutter, -ü",
        "pron": "",
        "lit": "Frau Berghäuser ist die Mutter von Michaela.",
        "verify": false
      }
    }
  },
  {
    "en": "after; to (a place)",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "nach",
        "pron": "",
        "lit": "Ich gehe jetzt nach Hause. Ich fliege nach München. Es ist schon 5 nach 12.",
        "verify": false
      }
    }
  },
  {
    "en": "next",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "nächste",
        "pron": "",
        "lit": "Sehen wir uns nächste Woche?",
        "verify": false
      }
    }
  },
  {
    "en": "the name",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "der Name, -n",
        "pron": "",
        "lit": "Mein Name ist Thomas Schmidt. Mein Vorname ist Thomas; Schmidt ist der Familienname.",
        "verify": false
      }
    }
  },
  {
    "en": "to take",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "nehmen",
        "pron": "",
        "lit": "Heute gibt es Hähnchen. Das nehme ich. Ich nehme den Bus.",
        "verify": false
      }
    }
  },
  {
    "en": "no",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "nein",
        "pron": "",
        "lit": "Fährst du auch nach München? – Nein, ich habe keine Zeit.",
        "verify": false
      }
    }
  },
  {
    "en": "new",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "neu",
        "pron": "",
        "lit": "Ich bin der neue Kollege. Wir haben eine neue Wohnung.",
        "verify": false
      }
    }
  },
  {
    "en": "not",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "nicht",
        "pron": "",
        "lit": "Das stimmt nicht. Das ist doch schön, nicht?",
        "verify": false
      }
    }
  },
  {
    "en": "nothing",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "nichts",
        "pron": "",
        "lit": "Das macht nichts. Hier kaufe ich nichts. Der Laden gefällt mir nicht.",
        "verify": false
      }
    }
  },
  {
    "en": "never",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "nie",
        "pron": "",
        "lit": "Er kommt nie pünktlich.",
        "verify": false
      }
    }
  },
  {
    "en": "still; yet",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "noch",
        "pron": "",
        "lit": "Vielleicht kommt er noch. Wir warten noch fünf Minuten. Ich habe noch 20 Euro.",
        "verify": false
      }
    }
  },
  {
    "en": "normal",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "normal",
        "pron": "",
        "lit": "75 kg. Sein Gewicht ist normal.",
        "verify": false
      }
    }
  },
  {
    "en": "the number",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "die Nummer, -n",
        "pron": "",
        "lit": "Sie haben Zimmer Nummer zwölf. Welche Hausnummer haben Sie? Können Sie mir Ihre Nummer geben?",
        "verify": false
      }
    }
  },
  {
    "en": "only",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "nur",
        "pron": "",
        "lit": "Ich möchte nur ein Glas Wasser.",
        "verify": false
      }
    }
  },
  {
    "en": "above; upstairs",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "oben",
        "pron": "",
        "lit": "Ich wohne oben.",
        "verify": false
      }
    }
  },
  {
    "en": "the fruit",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Obst",
        "pron": "",
        "lit": "Im Sommer ist das Obst billig.",
        "verify": false
      }
    }
  },
  {
    "en": "or",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "oder",
        "pron": "",
        "lit": "Wann können Sie kommen – heute oder morgen?",
        "verify": false
      }
    }
  },
  {
    "en": "to open",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "öffnen",
        "pron": "",
        "lit": "Ich öffne die Tür.",
        "verify": false
      }
    }
  },
  {
    "en": "open(ed)",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "geöffnet",
        "pron": "",
        "lit": "Der Laden ist samstags bis 16.00 Uhr geöffnet.",
        "verify": false
      }
    }
  },
  {
    "en": "often",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "oft",
        "pron": "",
        "lit": "Petra treffe ich oft.",
        "verify": false
      }
    }
  },
  {
    "en": "without",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "ohne",
        "pron": "",
        "lit": "Ohne Geld kann er nichts kaufen.",
        "verify": false
      }
    }
  },
  {
    "en": "the oil",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "das Öl",
        "pron": "",
        "lit": "Den Salat machen wir ohne Öl.",
        "verify": false
      }
    }
  },
  {
    "en": "the grandma",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Oma, -s",
        "pron": "",
        "lit": "Meine Oma ist schon tot.",
        "verify": false
      }
    }
  },
  {
    "en": "the grandpa",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Opa, -s",
        "pron": "",
        "lit": "Mein Opa heißt Hans.",
        "verify": false
      }
    }
  },
  {
    "en": "order",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "die Ordnung",
        "pron": "",
        "lit": "Das ist in Ordnung.",
        "verify": false
      }
    }
  },
  {
    "en": "the place; location",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Ort, -e",
        "pron": "",
        "lit": "Der Ort liegt am Meer.",
        "verify": false
      }
    }
  },
  {
    "en": "the paper",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Papier",
        "pron": "",
        "lit": "Hier sind Papier und Bleistift.",
        "verify": false
      }
    }
  },
  {
    "en": "the papers; documents",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Papiere (pl.)",
        "pron": "",
        "lit": "Haben Sie Ihre Papiere dabei?",
        "verify": false
      }
    }
  },
  {
    "en": "the partner (male)",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Partner, -/",
        "pron": "",
        "lit": "Sie ist meine Partnerin.",
        "verify": false
      }
    }
  },
  {
    "en": "the partner (female)",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Partnerin, -nen",
        "pron": "",
        "lit": "Sie ist meine Partnerin.",
        "verify": false
      }
    }
  },
  {
    "en": "the party",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Party",
        "pron": "",
        "lit": "Heute Abend machen wir eine Party.",
        "verify": false
      }
    }
  },
  {
    "en": "the passport",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Pass, -ä, e",
        "pron": "",
        "lit": "Im Hotel brauchst du deinen Pass.",
        "verify": false
      }
    }
  },
  {
    "en": "the break; pause",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Pause, -n",
        "pron": "",
        "lit": "Von 12.00 bis 12.30 Uhr haben wir Mittagspause.",
        "verify": false
      }
    }
  },
  {
    "en": "the plan",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Plan, -ä, e",
        "pron": "",
        "lit": "Ich kaufe mir einen Stadtplan.",
        "verify": false
      }
    }
  },
  {
    "en": "the place; seat; square",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Platz, -ä, e",
        "pron": "",
        "lit": "Tut mir leid, der Platz ist besetzt. Bitte nehmen Sie Platz! Ich wohne Messeplatz 5.",
        "verify": false
      }
    }
  },
  {
    "en": "the police",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Polizei",
        "pron": "",
        "lit": "Holen Sie die Polizei!",
        "verify": false
      }
    }
  },
  {
    "en": "the French fries",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "die Pommes frites (pl.)",
        "pron": "",
        "lit": "Die Kinder essen Hähnchen mit Pommes frites.",
        "verify": false
      }
    }
  },
  {
    "en": "the post office; mail",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Post",
        "pron": "",
        "lit": "Wo ist die Post, bitte? Ist Post da?",
        "verify": false
      }
    }
  },
  {
    "en": "the postal code; zip code",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "die Postleitzahl",
        "pron": "",
        "lit": "Wie ist Ihre Postleitzahl?",
        "verify": false
      }
    }
  },
  {
    "en": "the internship",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "das Praktikum",
        "pron": "",
        "lit": "Ich mache ein Praktikum bei Siemens.",
        "verify": false
      }
    }
  },
  {
    "en": "the (doctor's) practice",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "die Praxis",
        "pron": "",
        "lit": "Die Praxis ist ab acht Uhr geöffnet.",
        "verify": false
      }
    }
  },
  {
    "en": "the price",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Preis, -e",
        "pron": "",
        "lit": "Die Preise sind hoch.",
        "verify": false
      }
    }
  },
  {
    "en": "the problem",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "das Problem, -e",
        "pron": "",
        "lit": "Mein Problem ist die Sprache.",
        "verify": false
      }
    }
  },
  {
    "en": "the brochure",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Prospekt, -e",
        "pron": "",
        "lit": "Bitte schicken Sie mir einen Prospekt von Ihrem Hotel.",
        "verify": false
      }
    }
  },
  {
    "en": "the exam; test",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Prüfung",
        "pron": "",
        "lit": "Die Prüfung ist am Montag um 8.00 Uhr.",
        "verify": false
      }
    }
  },
  {
    "en": "punctual; on time",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "pünktlich",
        "pron": "",
        "lit": "Der Bus fährt pünktlich um acht Uhr. Herr Müller ist immer pünktlich.",
        "verify": false
      }
    }
  },
  {
    "en": "to ride a bike",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "Rad fahren",
        "pron": "",
        "lit": "Das Kind kann schon Rad fahren.",
        "verify": false
      }
    }
  },
  {
    "en": "to smoke",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "rauchen",
        "pron": "",
        "lit": "Ich rauche nicht.",
        "verify": false
      }
    }
  },
  {
    "en": "the room; space",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Raum, -ä, e",
        "pron": "",
        "lit": "Der Unterricht ist in Raum 332.",
        "verify": false
      }
    }
  },
  {
    "en": "the invoice; bill",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Rechnung, -en",
        "pron": "",
        "lit": "Die Rechnung, bitte.",
        "verify": false
      }
    }
  },
  {
    "en": "right",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "rechts",
        "pron": "",
        "lit": "Die Schillerstraße ist hier rechts.",
        "verify": false
      }
    }
  },
  {
    "en": "to rain",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "regnen",
        "pron": "",
        "lit": "Heute regnet es.",
        "verify": false
      }
    }
  },
  {
    "en": "the rain",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Regen",
        "pron": "",
        "lit": "Bei diesem Regen gehe ich nicht raus.",
        "verify": false
      }
    }
  },
  {
    "en": "the rice",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Reis",
        "pron": "",
        "lit": "Ich esse gern Reis.",
        "verify": false
      }
    }
  },
  {
    "en": "to travel",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "reisen",
        "pron": "",
        "lit": "Ich reise gern.",
        "verify": false
      }
    }
  },
  {
    "en": "the trip; journey",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Reise",
        "pron": "",
        "lit": "Wir machen eine Reise nach Österreich.",
        "verify": false
      }
    }
  },
  {
    "en": "the travel agency",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "das Reisebüro, -s",
        "pron": "",
        "lit": "Mein Mann arbeitet im Reisebüro.",
        "verify": false
      }
    }
  },
  {
    "en": "the travel guide",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Reiseführer",
        "pron": "",
        "lit": "Ich kaufe mir einen Reiseführer von Berlin. Unser Reiseführer heißt Peter.",
        "verify": false
      }
    }
  },
  {
    "en": "to repair",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "reparieren",
        "pron": "",
        "lit": "Er hat das Fahrrad repariert.",
        "verify": false
      }
    }
  },
  {
    "en": "the repair",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "die Reparatur",
        "pron": "",
        "lit": "Die Reparatur ist sehr teuer.",
        "verify": false
      }
    }
  },
  {
    "en": "the restaurant",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "das Restaurant, -s",
        "pron": "",
        "lit": "Wir essen heute in einem Restaurant.",
        "verify": false
      }
    }
  },
  {
    "en": "the reception (desk)",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "die Rezeption",
        "pron": "",
        "lit": "Fragen Sie bitte im Hotel an der Rezeption.",
        "verify": false
      }
    }
  },
  {
    "en": "correct; right",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "richtig",
        "pron": "",
        "lit": "Habe ich das richtig verstanden? Das ist richtig.",
        "verify": false
      }
    }
  },
  {
    "en": "to smell",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "riechen",
        "pron": "",
        "lit": "Dieser Wein riecht gut.",
        "verify": false
      }
    }
  },
  {
    "en": "quiet; calm",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "ruhig",
        "pron": "",
        "lit": "Ich möchte ein ruhiges Zimmer.",
        "verify": false
      }
    }
  },
  {
    "en": "the juice",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Saft",
        "pron": "",
        "lit": "Möchtest du einen Apfelsaft?",
        "verify": false
      }
    }
  },
  {
    "en": "to say",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "sagen",
        "pron": "",
        "lit": "Sag mal, wie geht es dir denn?",
        "verify": false
      }
    }
  },
  {
    "en": "the salad",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Salat",
        "pron": "",
        "lit": "Wie schmeckt dir der Salat?",
        "verify": false
      }
    }
  },
  {
    "en": "the salt",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Salz",
        "pron": "",
        "lit": "Herr Ober, kann ich bitte Salz haben?",
        "verify": false
      }
    }
  },
  {
    "en": "the sentence",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "Satz, -ä, e",
        "pron": "",
        "lit": "Dieser Satz ist sehr einfach.",
        "verify": false
      }
    }
  },
  {
    "en": "the (suburban) train",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "die S-Bahn",
        "pron": "",
        "lit": "Ich nehme lieber die S-Bahn.",
        "verify": false
      }
    }
  },
  {
    "en": "the counter; switch",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Schalter",
        "pron": "",
        "lit": "Gehen Sie bitte zum Schalter drei!",
        "verify": false
      }
    }
  },
  {
    "en": "to seem; to shine",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "scheinen",
        "pron": "",
        "lit": "Die Sonne scheint.",
        "verify": false
      }
    }
  },
  {
    "en": "to send",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "schicken",
        "pron": "",
        "lit": "Bitte schicken Sie mir eine E-Mail.",
        "verify": false
      }
    }
  },
  {
    "en": "the sign",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "das Schild, -er",
        "pron": "",
        "lit": "Haben Sie nicht das Schild gesehen?",
        "verify": false
      }
    }
  },
  {
    "en": "the ham",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Schinken, –",
        "pron": "",
        "lit": "Ich möchte gern ein Schinkenbrot.",
        "verify": false
      }
    }
  },
  {
    "en": "to sleep",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "schlafen",
        "pron": "",
        "lit": "Ich schlafe meistens acht Stunden.",
        "verify": false
      }
    }
  },
  {
    "en": "bad",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "schlecht",
        "pron": "",
        "lit": "Mir ist schlecht! Sie sehen schlecht aus. Wir haben schlechtes Wetter.",
        "verify": false
      }
    }
  },
  {
    "en": "to close",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "schließen",
        "pron": "",
        "lit": "Bitte, schließen Sie die Tür.",
        "verify": false
      }
    }
  },
  {
    "en": "closed",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "geschlossen",
        "pron": "",
        "lit": "Die Bank hat am Samstag geschlossen.",
        "verify": false
      }
    }
  },
  {
    "en": "the end",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Schluss",
        "pron": "",
        "lit": "Ich muss jetzt Schluss machen. Zum Schluss gibt er uns allen die Hand.",
        "verify": false
      }
    }
  },
  {
    "en": "the key",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Schlüssel, –",
        "pron": "",
        "lit": "Ich gebe Ihnen noch den Zimmerschlüssel.",
        "verify": false
      }
    }
  },
  {
    "en": "to taste",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "schmecken",
        "pron": "",
        "lit": "Schmeckt das gut?",
        "verify": false
      }
    }
  },
  {
    "en": "fast; quick",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "schnell",
        "pron": "",
        "lit": "Er fährt schnell.",
        "verify": false
      }
    }
  },
  {
    "en": "already",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "schon",
        "pron": "",
        "lit": "Ist das Essen schon fertig?",
        "verify": false
      }
    }
  },
  {
    "en": "beautiful; nice",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "schön",
        "pron": "",
        "lit": "Schönen Urlaub! Das ist sehr schön.",
        "verify": false
      }
    }
  },
  {
    "en": "the cupboard; wardrobe",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Schrank, -ä, e",
        "pron": "",
        "lit": "Die Gläser stehen im Schrank.",
        "verify": false
      }
    }
  },
  {
    "en": "to write",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "schreiben",
        "pron": "",
        "lit": "Er schreibt jeden Tag fünfzig E-Mails.",
        "verify": false
      }
    }
  },
  {
    "en": "the shoe",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Schuh, -e",
        "pron": "",
        "lit": "Zieh die Schuhe aus!",
        "verify": false
      }
    }
  },
  {
    "en": "the school",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "die Schule",
        "pron": "",
        "lit": "Meine Tochter geht schon in die Schule. Die Schule ist gleich hier um die Ecke.",
        "verify": false
      }
    }
  },
  {
    "en": "the (school) student; pupil",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Schüler, –",
        "pron": "",
        "lit": "In meinem Kurs sind acht Schülerinnen und fünf Schüler.",
        "verify": false
      }
    }
  },
  {
    "en": "heavy; difficult",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "schwer",
        "pron": "",
        "lit": "Ist Ihr Gepäck sehr schwer? Das ist eine schwere Arbeit.",
        "verify": false
      }
    }
  },
  {
    "en": "the sister",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Schwester, -n",
        "pron": "",
        "lit": "Meine Schwester kommt am Dienstag.",
        "verify": false
      }
    }
  },
  {
    "en": "to swim",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "schwimmen",
        "pron": "",
        "lit": "Ich schwimme jeden Tag einen Kilometer.",
        "verify": false
      }
    }
  },
  {
    "en": "the swimming pool",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "das Schwimmbad",
        "pron": "",
        "lit": "Kommst du mit ins Schwimmbad?",
        "verify": false
      }
    }
  },
  {
    "en": "the lake",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der See",
        "pron": "",
        "lit": "Komm, wir fahren zum Starnberger See.",
        "verify": false
      }
    }
  },
  {
    "en": "to see",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "sehen",
        "pron": "",
        "lit": "Ich kann dich nicht sehen. Ich habe diesen Jungen schon einmal gesehen.",
        "verify": false
      }
    }
  },
  {
    "en": "the sight; tourist attraction",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "die Sehenswürdigkeit,",
        "pron": "",
        "lit": "-en Welche Sehenswürdigkeiten gibt es in Frankfurt?",
        "verify": false
      }
    }
  },
  {
    "en": "very",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "sehr",
        "pron": "",
        "lit": "Danke sehr! Das ist sehr schwer.",
        "verify": false
      }
    }
  },
  {
    "en": "to be",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "sein",
        "pron": "",
        "lit": "Herr Müller ist in seinem Zimmer. Mir ist kalt. Ich bin dreiundzwanzig.",
        "verify": false
      }
    }
  },
  {
    "en": "to be gone; away",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "weg sein",
        "pron": "",
        "lit": "Herr Meier ist schon weg.",
        "verify": false
      }
    }
  },
  {
    "en": "to be closed",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "zu sein",
        "pron": "",
        "lit": "Die Tür ist zu.",
        "verify": false
      }
    }
  },
  {
    "en": "since (time)",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "seit",
        "pron": "",
        "lit": "Ich wohne seit drei Jahren in Köln.",
        "verify": false
      }
    }
  },
  {
    "en": "independent; self-employed",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "selbstständig",
        "pron": "",
        "lit": "Er ist selbstständig.",
        "verify": false
      }
    }
  },
  {
    "en": "oneself",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "sich",
        "pron": "",
        "lit": "Sie müssen sich erst anmelden.",
        "verify": false
      }
    }
  },
  {
    "en": "she; they",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "sie",
        "pron": "",
        "lit": "Wie heißt sie?",
        "verify": false
      }
    }
  },
  {
    "en": "you (formal)",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "Sie",
        "pron": "",
        "lit": "Wie heißen Sie, bitte?",
        "verify": false
      }
    }
  },
  {
    "en": "to sit",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "sitzen",
        "pron": "",
        "lit": "Wo sitzen Sie?",
        "verify": false
      }
    }
  },
  {
    "en": "so; like this",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "so",
        "pron": "",
        "lit": "Sie müssen das so machen! Fahren Sie bitte nicht so schnell! Meine Frau ist so groß wie ich. So, das war‘s/wär‘s!",
        "verify": false
      }
    }
  },
  {
    "en": "the sofa",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "das Sofa",
        "pron": "",
        "lit": "Das Sofa ist neu.",
        "verify": false
      }
    }
  },
  {
    "en": "immediately",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "sofort",
        "pron": "",
        "lit": "Bitte antworten Sie sofort.",
        "verify": false
      }
    }
  },
  {
    "en": "the son",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Sohn, -ö, e",
        "pron": "",
        "lit": "Das ist Hans, mein Sohn.",
        "verify": false
      }
    }
  },
  {
    "en": "should; to be supposed to",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "sollen",
        "pron": "",
        "lit": "Soll ich kommen? Was soll ich mitbringen?",
        "verify": false
      }
    }
  },
  {
    "en": "the sun",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Sonne",
        "pron": "",
        "lit": "Die Sonne scheint.",
        "verify": false
      }
    }
  },
  {
    "en": "late",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "spät",
        "pron": "",
        "lit": "Es ist schon spät, ich muss gehen.",
        "verify": false
      }
    }
  },
  {
    "en": "later",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "später",
        "pron": "",
        "lit": "Das können wir später machen.",
        "verify": false
      }
    }
  },
  {
    "en": "the menu",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "die Speisekarte",
        "pron": "",
        "lit": "Bringen Sie mir die Speisekarte, bitte.",
        "verify": false
      }
    }
  },
  {
    "en": "to play",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "spielen",
        "pron": "",
        "lit": "Die Kinder spielen draußen. Spielen Sie Karten?",
        "verify": false
      }
    }
  },
  {
    "en": "sports",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Sport",
        "pron": "",
        "lit": "Ich mache viel Sport.",
        "verify": false
      }
    }
  },
  {
    "en": "the language",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Sprache, -n",
        "pron": "",
        "lit": "Welche Sprachen sprichst du?",
        "verify": false
      }
    }
  },
  {
    "en": "to speak",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "sprechen",
        "pron": "",
        "lit": "Kann ich (mit) Herrn Klein sprechen?",
        "verify": false
      }
    }
  },
  {
    "en": "the city",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "die Stadt, -ä, e",
        "pron": "",
        "lit": "Heidelberg ist eine alte Stadt.",
        "verify": false
      }
    }
  },
  {
    "en": "to stand",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "stehen",
        "pron": "",
        "lit": "Ich glaube es nicht, aber es steht in der Zeitung. Der Bus steht schon an der Haltestelle.",
        "verify": false
      }
    }
  },
  {
    "en": "the place; position; job",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Stelle, -n",
        "pron": "",
        "lit": "Ich habe eine neue Stelle.",
        "verify": false
      }
    }
  },
  {
    "en": "to put; to place",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "stellen",
        "pron": "",
        "lit": "Stell die Tasche rechts in die Ecke!",
        "verify": false
      }
    }
  },
  {
    "en": "the floor; story (of a building)",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Stock",
        "pron": "",
        "lit": "Unsere Wohnung liegt im ersten Stock.",
        "verify": false
      }
    }
  },
  {
    "en": "the street",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "die Straße, -n",
        "pron": "",
        "lit": "In welcher Straße wohnen Sie?",
        "verify": false
      }
    }
  },
  {
    "en": "the tram",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "die Straßenbahn",
        "pron": "",
        "lit": "Wo fährt die Straßenbahn ab?",
        "verify": false
      }
    }
  },
  {
    "en": "to study (university)",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "studieren",
        "pron": "",
        "lit": "Ich studiere in Mainz.",
        "verify": false
      }
    }
  },
  {
    "en": "the (university) studies",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "das Studium",
        "pron": "",
        "lit": "Das Studium beginnt im Oktober.",
        "verify": false
      }
    }
  },
  {
    "en": "the (university) student",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Student, -en",
        "pron": "",
        "lit": "Ich bin Studentin.",
        "verify": false
      }
    }
  },
  {
    "en": "the hour",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "die Stunde, -n",
        "pron": "",
        "lit": "Ich bin in einer Stunde zurück.",
        "verify": false
      }
    }
  },
  {
    "en": "to look for; to search",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "suchen",
        "pron": "",
        "lit": "Suchst du etwas?",
        "verify": false
      }
    }
  },
  {
    "en": "to dance",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "tanzen",
        "pron": "",
        "lit": "Tanzen Sie gern?",
        "verify": false
      }
    }
  },
  {
    "en": "the bag; pocket",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Tasche, -n",
        "pron": "",
        "lit": "Ich habe die Schlüssel in der Tasche.",
        "verify": false
      }
    }
  },
  {
    "en": "the taxi",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "das Taxi, -s",
        "pron": "",
        "lit": "Es gibt heute keinen Bus mehr. Er fährt mit dem Taxi.",
        "verify": false
      }
    }
  },
  {
    "en": "the tea",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Tee",
        "pron": "",
        "lit": "Ich trinke morgens immer Tee.",
        "verify": false
      }
    }
  },
  {
    "en": "the part",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Teil, -e",
        "pron": "",
        "lit": "Lies bitte auch den zweiten Teil.",
        "verify": false
      }
    }
  },
  {
    "en": "to phone; to call",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "telefonieren",
        "pron": "",
        "lit": "Darf ich mal telefonieren?",
        "verify": false
      }
    }
  },
  {
    "en": "the telephone",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "das Telefon",
        "pron": "",
        "lit": "Haben Sie Telefon?",
        "verify": false
      }
    }
  },
  {
    "en": "the appointment",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Termin, -e",
        "pron": "",
        "lit": "Am besten machen wir sofort einen Termin.",
        "verify": false
      }
    }
  },
  {
    "en": "the test",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Test",
        "pron": "",
        "lit": "Der Test war einfach.",
        "verify": false
      }
    }
  },
  {
    "en": "expensive",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "teuer",
        "pron": "",
        "lit": "Das ist mir zu teuer.",
        "verify": false
      }
    }
  },
  {
    "en": "the text",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Text, -e",
        "pron": "",
        "lit": "Lesen Sie bitte diesen Text.",
        "verify": false
      }
    }
  },
  {
    "en": "the topic; theme",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Thema",
        "pron": "",
        "lit": "Wir sprechen heute über das Thema „Essen und Trinken“.",
        "verify": false
      }
    }
  },
  {
    "en": "the ticket",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Ticket, -s",
        "pron": "",
        "lit": "Wie viel kostet das Ticket?",
        "verify": false
      }
    }
  },
  {
    "en": "the table",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Tisch, -e",
        "pron": "",
        "lit": "Die Fotos liegen auf dem Tisch.",
        "verify": false
      }
    }
  },
  {
    "en": "the daughter",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Tochter, -ö",
        "pron": "",
        "lit": "Das ist meine Tochter Katharina.",
        "verify": false
      }
    }
  },
  {
    "en": "the toilet",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "die Toilette, -en",
        "pron": "",
        "lit": "Wo ist die Toilette, bitte?",
        "verify": false
      }
    }
  },
  {
    "en": "the tomato",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Tomate, -n",
        "pron": "",
        "lit": "Die Tomate ist noch grün.",
        "verify": false
      }
    }
  },
  {
    "en": "dead",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "tot",
        "pron": "",
        "lit": "Sein Vater ist schon lange tot.",
        "verify": false
      }
    }
  },
  {
    "en": "to meet",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "(sich) treffen",
        "pron": "",
        "lit": "Ich treffe in der Stadt einen Kollegen. Wir treffen uns immer freitags.",
        "verify": false
      }
    }
  },
  {
    "en": "the stairs",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Treppe, -n",
        "pron": "",
        "lit": "Die Toilette? Die Treppe hoch und dann links.",
        "verify": false
      }
    }
  },
  {
    "en": "to drink",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "trinken",
        "pron": "",
        "lit": "Möchtest du etwas trinken?",
        "verify": false
      }
    }
  },
  {
    "en": "bye",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "tschüss",
        "pron": "",
        "lit": "Junge Leute sagen meistens „tschüss!“ und nicht „auf Wiedersehen“.",
        "verify": false
      }
    }
  },
  {
    "en": "to do",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "tun",
        "pron": "",
        "lit": "Ich habe noch etwas zu tun. Was tut Ihr Mann?",
        "verify": false
      }
    }
  },
  {
    "en": "over; about",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "über",
        "pron": "",
        "lit": "Gehen Sie hier über die Straße. Er wohnt im zweiten Stock über Familie Meier. Sind Sie über 18?",
        "verify": false
      }
    }
  },
  {
    "en": "to stay overnight",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "übernachten",
        "pron": "",
        "lit": "Du kannst bei mir übernachten.",
        "verify": false
      }
    }
  },
  {
    "en": "to transfer (money)",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "überweisen",
        "pron": "",
        "lit": "Sie können das Geld auch überweisen.",
        "verify": false
      }
    }
  },
  {
    "en": "the clock; watch; o'clock",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "die Uhr",
        "pron": "",
        "lit": "Es ist vier Uhr.",
        "verify": false
      }
    }
  },
  {
    "en": "around; at (time)",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "um",
        "pron": "",
        "lit": "Er kommt um sieben Uhr. Da kommt er gerade um die Ecke.",
        "verify": false
      }
    }
  },
  {
    "en": "to move (house)",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "umziehen",
        "pron": "",
        "lit": "Nächsten Monat ziehen wir um.",
        "verify": false
      }
    }
  },
  {
    "en": "and",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "und",
        "pron": "",
        "lit": "Peter und Helmut sind meine Söhne.",
        "verify": false
      }
    }
  },
  {
    "en": "our",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "unser",
        "pron": "",
        "lit": "Das ist unsere Lehrerin.",
        "verify": false
      }
    }
  },
  {
    "en": "below; downstairs",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "unten",
        "pron": "",
        "lit": "Er wohnt ganz unten im Haus.",
        "verify": false
      }
    }
  },
  {
    "en": "under",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "unter",
        "pron": "",
        "lit": "Unter uns wohnt eine Familie mit drei Kindern.",
        "verify": false
      }
    }
  },
  {
    "en": "the lesson; class",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Unterricht",
        "pron": "",
        "lit": "Wir haben Unterricht von 8.00 bis 12.00 Uhr.",
        "verify": false
      }
    }
  },
  {
    "en": "to sign",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "unterschreiben",
        "pron": "",
        "lit": "Wo muss ich unterschreiben?",
        "verify": false
      }
    }
  },
  {
    "en": "the signature",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "die Unterschrift",
        "pron": "",
        "lit": "Hier fehlt noch Ihre Unterschrift.",
        "verify": false
      }
    }
  },
  {
    "en": "the vacation; holiday",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "der Urlaub",
        "pron": "",
        "lit": "Ich nehme im September Urlaub.",
        "verify": false
      }
    }
  },
  {
    "en": "the father",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "der Vater, -ä",
        "pron": "",
        "lit": "Mein Vater ist Arbeiter.",
        "verify": false
      }
    }
  },
  {
    "en": "forbidden",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "verboten",
        "pron": "",
        "lit": "Hier ist Rauchen verboten.",
        "verify": false
      }
    }
  },
  {
    "en": "to earn",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "verdienen",
        "pron": "",
        "lit": "Ich verdiene 1.500 Euro im Monat.",
        "verify": false
      }
    }
  },
  {
    "en": "the club; association",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Verein",
        "pron": "",
        "lit": "Es gibt einen neuen Sportverein in der Stadt.",
        "verify": false
      }
    }
  },
  {
    "en": "married",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "verheiratet",
        "pron": "",
        "lit": "Ich bin verheiratet und habe drei Kinder.",
        "verify": false
      }
    }
  },
  {
    "en": "to sell",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "verkaufen",
        "pron": "",
        "lit": "Er verkauft sein altes Auto.",
        "verify": false
      }
    }
  },
  {
    "en": "the salesperson",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Verkäufer, –",
        "pron": "",
        "lit": "Meine Mutter ist Verkäuferin im Kaufhaus.",
        "verify": false
      }
    }
  },
  {
    "en": "to rent out",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "vermieten",
        "pron": "",
        "lit": "Die Wohnung ist schon vermietet.",
        "verify": false
      }
    }
  },
  {
    "en": "the landlord",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Vermieter",
        "pron": "",
        "lit": "Unser Vermieter heißt Huber. Er wohnt auch hier.",
        "verify": false
      }
    }
  },
  {
    "en": "to understand",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "verstehen",
        "pron": "",
        "lit": "Können Sie mich verstehen?",
        "verify": false
      }
    }
  },
  {
    "en": "the relative",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Verwandte, -n",
        "pron": "",
        "lit": "Peter besucht seine Verwandten in Polen.",
        "verify": false
      }
    }
  },
  {
    "en": "much; a lot",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "viel",
        "pron": "",
        "lit": "Hier regnet es viel.",
        "verify": false
      }
    }
  },
  {
    "en": "maybe; perhaps",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "vielleicht",
        "pron": "",
        "lit": "Ich komme vielleicht mit dem Bus.",
        "verify": false
      }
    }
  },
  {
    "en": "from; of",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "von",
        "pron": "",
        "lit": "Das Auto von Felix ist kaputt. Er kommt gerade von Köln/von zu Hause.",
        "verify": false
      }
    }
  },
  {
    "en": "before; in front of",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "vor",
        "pron": "",
        "lit": "Der Termin war vor einer Stunde. Das Auto steht vor der Tür.",
        "verify": false
      }
    }
  },
  {
    "en": "the first name",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Vorname, -n",
        "pron": "",
        "lit": "Ich heiße Müller, mein Vorname ist Eva.",
        "verify": false
      }
    }
  },
  {
    "en": "caution",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Vorsicht",
        "pron": "",
        "lit": "Vorsicht! Da kommt ein Auto.",
        "verify": false
      }
    }
  },
  {
    "en": "to introduce (oneself); to imagine",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "(sich) vorstellen",
        "pron": "",
        "lit": "Wir wollen uns kennenlernen. Können Sie sich bitte vorstellen?",
        "verify": false
      }
    }
  },
  {
    "en": "the area code",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "die Vorwahl",
        "pron": "",
        "lit": "Wie ist die Vorwahl von München?",
        "verify": false
      }
    }
  },
  {
    "en": "to hike",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "wandern",
        "pron": "",
        "lit": "Wir wandern um den Chiemsee.",
        "verify": false
      }
    }
  },
  {
    "en": "when",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "wann",
        "pron": "",
        "lit": "Wann bist du fertig? Wann kann ich Sie anrufen? Wann sind Sie geboren?",
        "verify": false
      }
    }
  },
  {
    "en": "to wait",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "warten",
        "pron": "",
        "lit": "Können Sie ein paar Minuten warten? Auf wen warten Sie?",
        "verify": false
      }
    }
  },
  {
    "en": "why",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "warum",
        "pron": "",
        "lit": "Warum kommt er nicht?",
        "verify": false
      }
    }
  },
  {
    "en": "what",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "was",
        "pron": "",
        "lit": "Was ist das? Was möchten Sie?",
        "verify": false
      }
    }
  },
  {
    "en": "what kind of",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "was für ein",
        "pron": "",
        "lit": "Was für eine Farbe möchten Sie?",
        "verify": false
      }
    }
  },
  {
    "en": "to wash (oneself)",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "(sich) waschen",
        "pron": "",
        "lit": "Wo kann ich mir die Hände waschen? Ich muss morgen waschen.",
        "verify": false
      }
    }
  },
  {
    "en": "the water",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "das Wasser",
        "pron": "",
        "lit": "Ein Glas Wasser, bitte.",
        "verify": false
      }
    }
  },
  {
    "en": "to hurt",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "weh tun",
        "pron": "",
        "lit": "Ich muss zum Arzt. Mein Bein tut weh.",
        "verify": false
      }
    }
  },
  {
    "en": "female",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "weiblich",
        "pron": "",
        "lit": "Kreuzen Sie bitte an: „weiblich“ oder „männlich“.",
        "verify": false
      }
    }
  },
  {
    "en": "the wine",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Wein",
        "pron": "",
        "lit": "Nein danke, ich möchte keinen Wein.",
        "verify": false
      }
    }
  },
  {
    "en": "far",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "weit",
        "pron": "",
        "lit": "Zum Bahnhof ist es nicht weit.",
        "verify": false
      }
    }
  },
  {
    "en": "further; continue",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "weiter",
        "pron": "",
        "lit": "Der Bus fährt nicht weiter.",
        "verify": false
      }
    }
  },
  {
    "en": "which",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "welcher",
        "pron": "",
        "lit": "Welches Buch möchtest du?",
        "verify": false
      }
    }
  },
  {
    "en": "the world",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "die Welt",
        "pron": "",
        "lit": "Es gibt viele Probleme auf der Welt.",
        "verify": false
      }
    }
  },
  {
    "en": "little; few",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "wenig",
        "pron": "",
        "lit": "Ich habe leider nur wenig verstanden. Er verdient wenig.",
        "verify": false
      }
    }
  },
  {
    "en": "who",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "wer",
        "pron": "",
        "lit": "Wer ist das?",
        "verify": false
      }
    }
  },
  {
    "en": "to become",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "werden",
        "pron": "",
        "lit": "Mein Sohn will Arzt werden.",
        "verify": false
      }
    }
  },
  {
    "en": "the weather",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "das Wetter",
        "pron": "",
        "lit": "Wir hatten schlechtes Wetter.",
        "verify": false
      }
    }
  },
  {
    "en": "important",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "wichtig",
        "pron": "",
        "lit": "Dieses Formular ist sehr wichtig.",
        "verify": false
      }
    }
  },
  {
    "en": "how",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "wie",
        "pron": "",
        "lit": "Wie heißt du? Er schreibt wie ein Kind. Meine Frau ist so groß wie ich. Wie soll ich das machen? Wie groß ist die Wohnung? Wie bitte? Wie lange bist du schon hier?",
        "verify": false
      }
    }
  },
  {
    "en": "to repeat",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "wiederholen",
        "pron": "",
        "lit": "Können Sie das bitte wiederholen?",
        "verify": false
      }
    }
  },
  {
    "en": "goodbye (on the phone)",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Wiederhören",
        "pron": "",
        "lit": "Wir müssen jetzt Schluss machen. Also auf Wiederhören!",
        "verify": false
      }
    }
  },
  {
    "en": "goodbye",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "das Wiedersehen",
        "pron": "",
        "lit": "Auf Wiedersehen!",
        "verify": false
      }
    }
  },
  {
    "en": "how much",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "wie viel",
        "pron": "",
        "lit": "Wie viel Milch nehmen Sie?",
        "verify": false
      }
    }
  },
  {
    "en": "welcome",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "willkommen",
        "pron": "",
        "lit": "Herzlich willkommen!",
        "verify": false
      }
    }
  },
  {
    "en": "the wind",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Wind",
        "pron": "",
        "lit": "Der Wind kommt aus Osten.",
        "verify": false
      }
    }
  },
  {
    "en": "we",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "wir",
        "pron": "",
        "lit": "Wir lernen Deutsch.",
        "verify": false
      }
    }
  },
  {
    "en": "to know (a fact)",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "wissen",
        "pron": "",
        "lit": "Weißt du, wie er heißt?",
        "verify": false
      }
    }
  },
  {
    "en": "where",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "wo",
        "pron": "",
        "lit": "Wo waren Sie im Urlaub? Wo ist die Post? Wo sind Sie geboren?",
        "verify": false
      }
    }
  },
  {
    "en": "where from",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "woher",
        "pron": "",
        "lit": "Woher kommen Sie?",
        "verify": false
      }
    }
  },
  {
    "en": "where to",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "wohin",
        "pron": "",
        "lit": "Wohin fährt dieser Bus? Wohin wollen Sie am Wochenende?",
        "verify": false
      }
    }
  },
  {
    "en": "to live; to reside",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "wohnen",
        "pron": "",
        "lit": "Ich wohne in München.",
        "verify": false
      }
    }
  },
  {
    "en": "the apartment; flat",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "die Wohnung, -en",
        "pron": "",
        "lit": "Seit wann haben Sie diese Wohnung?",
        "verify": false
      }
    }
  },
  {
    "en": "to want",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "wollen",
        "pron": "",
        "lit": "Wollen Sie einen Kaffee trinken?",
        "verify": false
      }
    }
  },
  {
    "en": "the word",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Wort, -ö, er/-e",
        "pron": "",
        "lit": "Ich kenne das Wort nicht.",
        "verify": false
      }
    }
  },
  {
    "en": "wonderful",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "wunderbar",
        "pron": "",
        "lit": "Das Essen schmeckt wunderbar.",
        "verify": false
      }
    }
  },
  {
    "en": "to pay",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "zahlen",
        "pron": "",
        "lit": "Zahlen, bitte!",
        "verify": false
      }
    }
  },
  {
    "en": "the time",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "die Zeit",
        "pron": "",
        "lit": "Ich habe heute keine Zeit.",
        "verify": false
      }
    }
  },
  {
    "en": "currently; at the moment",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "zurzeit",
        "pron": "",
        "lit": "Zurzeit habe ich sehr viel zu tun.",
        "verify": false
      }
    }
  },
  {
    "en": "the newspaper",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Zeitung, -en",
        "pron": "",
        "lit": "Ich lese gern Zeitung.",
        "verify": false
      }
    }
  },
  {
    "en": "the cigarette",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "die Zigarette, -n",
        "pron": "",
        "lit": "Wie teuer sind die Zigaretten?",
        "verify": false
      }
    }
  },
  {
    "en": "the room",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "das Zimmer, –",
        "pron": "",
        "lit": "Das Zimmer ist groß. Öffne im Schlafzimmer das Fenster, bitte! Die Wohnung hat drei Zimmer. Ich habe ein Zimmer bestellt.",
        "verify": false
      }
    }
  },
  {
    "en": "customs",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Zoll",
        "pron": "",
        "lit": "Wir müssen noch durch den Zoll.",
        "verify": false
      }
    }
  },
  {
    "en": "to; too",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "zu",
        "pron": "",
        "lit": "Der Bus fährt zum Bahnhof. Ich gehe zu Fuß. Ich bin zu Hause.",
        "verify": false
      }
    }
  },
  {
    "en": "satisfied",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "zufrieden",
        "pron": "",
        "lit": "Ich bin mit der Wohnung zufrieden.",
        "verify": false
      }
    }
  },
  {
    "en": "the train",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "der Zug, -ü, e",
        "pron": "",
        "lit": "Ich fahre gern mit dem Zug.",
        "verify": false
      }
    }
  },
  {
    "en": "back",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "zurück",
        "pron": "",
        "lit": "Einmal Frankfurt und zurück. Wann kommst du zurück?",
        "verify": false
      }
    }
  },
  {
    "en": "together",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "zusammen",
        "pron": "",
        "lit": "Sollen wir zusammen essen gehen? Das macht zusammen 2 Euro 80.",
        "verify": false
      }
    }
  },
  {
    "en": "between",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "zwischen",
        "pron": "",
        "lit": "Heidelberg liegt zwischen Frankfurt und Stuttgart. Zwischen 8 und 10 Uhr bin ich zu Hause.",
        "verify": false
      }
    }
  },
  {
    "en": "one",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "eins",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "two",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "zwei",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "three",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "drei",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "four",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "vier",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "five",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "fünf",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "six",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "sechs",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "seven",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "sieben",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "eight",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "acht",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "nine",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "neun",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "ten",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "zehn",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "eleven",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "elf",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "twelve",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "zwölf",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "thirteen",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "dreizehn",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "fourteen",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "vierzehn",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "fifteen",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "fünfzehn",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "sixteen",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "sechzehn",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "seventeen",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "siebzehn",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "eighteen",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "achtzehn",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "nineteen",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "neunzehn",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "twenty",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "zwanzig",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "thirty",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "dreißig",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "forty",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "vierzig",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "fifty",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "fünfzig",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "sixty",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "sechzig",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "seventy",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "siebzig",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "eighty",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "achtzig",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "ninety",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "neunzig",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "(one) hundred",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "(ein)hundert",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "(one) thousand",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "(ein)tausend",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "a million",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "eine Million",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "first",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "erste",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "second",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "zweite",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "third",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "dritte",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "fourth",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "vierte",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "Sunday",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "der Sonntag",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "Monday",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "der Montag",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "Tuesday",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "der Dienstag",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "Wednesday",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "der Mittwoch",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "Thursday",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "der Donnerstag",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "Friday",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "der Freitag",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "Saturday",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "der Samstag/Sonnabend",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "the weekend",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "das Wochenende",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "January",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "der Januar",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "February",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "der Februar",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "March",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "der März",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "April",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "der April",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "May",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "der Mai",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "June",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "der Juni",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "July",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "der Juli",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "August",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "der August",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "September",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "der September",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "October",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "der Oktober",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "November",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "der November",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "December",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "der Dezember",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "spring",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "der Frühling/das Frühjahr",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "summer",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "der Sommer",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "autumn; fall",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "der Herbst",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "winter",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "der Winter",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "black",
    "cat": "Farben",
    "translations": {
      "de": {
        "text": "schwarz",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "gray",
    "cat": "Farben",
    "translations": {
      "de": {
        "text": "grau",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "blue",
    "cat": "Farben",
    "translations": {
      "de": {
        "text": "blau",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "green",
    "cat": "Farben",
    "translations": {
      "de": {
        "text": "grün",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "white",
    "cat": "Farben",
    "translations": {
      "de": {
        "text": "weiß",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "red",
    "cat": "Farben",
    "translations": {
      "de": {
        "text": "rot",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "yellow",
    "cat": "Farben",
    "translations": {
      "de": {
        "text": "gelb",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "brown",
    "cat": "Farben",
    "translations": {
      "de": {
        "text": "braun",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "the north",
    "cat": "Himmelsrichtungen",
    "translations": {
      "de": {
        "text": "der Norden",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "the south",
    "cat": "Himmelsrichtungen",
    "translations": {
      "de": {
        "text": "der Süden",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "the west",
    "cat": "Himmelsrichtungen",
    "translations": {
      "de": {
        "text": "der Westen",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "the east",
    "cat": "Himmelsrichtungen",
    "translations": {
      "de": {
        "text": "der Osten",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "a person",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "die Person",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "of course; naturally",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "natürlich",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "full",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "voll",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "half",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "halb",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "now",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "nun",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "again",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "wieder",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "thereupon; on it",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "darauf",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "first; at first",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "zuerst",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "to that; in addition",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "dazu",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "after that; afterward",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "danach",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "to wish",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "wünschen",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "to pass (an exam); to consist of",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "bestehen",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "the phone number",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Telefonnummer",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "the date of birth",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Geburtsdatum",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "the passenger",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Fahrgast",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "the sweater",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Pullover",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "the dictionary",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Wörterbuch",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "the morning; forenoon",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "der Vormittag",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "the flight",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Flug",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "to sit down",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "sich setzen",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "the waiter",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Kellner",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "everyday life",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Alltag",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "Who are you? Tell us.",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Erzählen Sie uns: Wer sind Sie?",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "My name is ...",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Mein Name ist ...",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "I come from ...",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Ich komme aus ...",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "I live in ...",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Ich lebe in ...",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "I speak German, ...",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Ich spreche Deutsch, ...",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "My hobby is .../My hobbies are ...",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Mein Hobby ist .../Meine Hobbys sind ...",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "And you, who are you, please?",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Und Sie, wer sind Sie, bitte?",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "What is your first name/last name?",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Wie ist Ihr Vorname/Familienname?",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "Can you spell that, please?",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Können Sie das bitte buchstabieren?",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "Where are you from?",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Woher kommen Sie?",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "Do you have a phone?",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Haben Sie ein Telefon?",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "What is your phone number, please?",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Wie ist bitte Ihre Telefonnummer?",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "Do you have a mobile phone?",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Haben Sie ein Handy?",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "What is your postal code/house number?",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Wie ist Ihre Postleitzahl/Hausnummer?",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "Where can I get a city map?",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Wo kann ich einen Stadtplan bekommen?",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "At the information desk in the station.",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "An der Information im Bahnhof.",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "Where can I buy a newspaper?",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Wo kann ich eine Zeitung kaufen?",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "Where is the checkout, please?",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Wo ist die Kasse, bitte?",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "What do you usually eat for breakfast?",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Was essen Sie normalerweise zum Frühstück?",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "What is your favorite food?",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Was ist Ihr Lieblingsessen?",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "What do you do on Sunday?",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Was machen Sie am Sonntag?",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "Do you like to read books?",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Lesen Sie gern Bücher?",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "Do you have many friends at school?",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Haben Sie viele Freunde in der Schule?",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "Do you like your teacher?",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Mögen Sie Ihren Lehrer/Ihre Lehrerin?",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "What are your working hours?",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Wie sind Ihre Arbeitszeiten?",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "Do you have nice colleagues?",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Haben Sie nette Kollegen?",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "What is your favorite sport?",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Was ist Ihr Lieblingssport?",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "Can you swim?",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Können Sie schwimmen?",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "A glass of water, please!",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Ein Glas Wasser, bitte!",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "Yes, of course. Here you are.",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Ja, natürlich. Bitte.",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "Can I have a pencil, please?",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Kann ich bitte einen Stift haben?",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "Can we sit down here?",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Können wir uns hier hinsetzen?",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "Excuse me, what time is it, please?",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Entschuldigung, wie spät ist es bitte?",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "Can I use the computer, please?",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Kann ich bitte den Computer benutzen?",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "Can you write that down for me, please?",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Können Sie mir das bitte aufschreiben?",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "A beer, please!",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Ein Bier, bitte!",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "These flowers are for you.",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Die Blumen sind für Sie.",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "Do you have time on Monday at 8 o'clock?",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Haben Sie am Montag um 8 Uhr Zeit?",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "Can I have an apple, please?",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Kann ich bitte einen Apfel haben?",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "Please don't smoke here.",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Bitte rauchen Sie hier nicht.",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "Where is the post office, please?",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Wo ist das Postamt, bitte?",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "Can you call a taxi for me, please?",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Können Sie mir bitte ein Taxi rufen?",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "The bill, please!",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Die Rechnung, bitte!",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "Can I try on these shoes, please?",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Kann ich bitte diese Schuhe anprobieren?",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "the second",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "die Sekunde, -n",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "the minute",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "die Minute, -n",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "the day",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "der Tag, -e",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "the week",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "die Woche, -n",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "the year",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "das Jahr, -e",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "the morning",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "der Morgen",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "noon; midday",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "der Mittag",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "the afternoon",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "der Nachmittag, -e",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "the evening",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "der Abend, -e",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "the night",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "die Nacht, -ä, e",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "a meter",
    "cat": "Maße & Gewichte",
    "translations": {
      "de": {
        "text": "ein Meter",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "a centimeter",
    "cat": "Maße & Gewichte",
    "translations": {
      "de": {
        "text": "ein Zentimeter",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "a kilometer",
    "cat": "Maße & Gewichte",
    "translations": {
      "de": {
        "text": "ein Kilometer",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "a square meter",
    "cat": "Maße & Gewichte",
    "translations": {
      "de": {
        "text": "ein Quadratmeter",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "a degree",
    "cat": "Maße & Gewichte",
    "translations": {
      "de": {
        "text": "ein Grad",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "a percent",
    "cat": "Maße & Gewichte",
    "translations": {
      "de": {
        "text": "ein Prozent",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "a liter",
    "cat": "Maße & Gewichte",
    "translations": {
      "de": {
        "text": "ein Liter",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "a gram",
    "cat": "Maße & Gewichte",
    "translations": {
      "de": {
        "text": "ein Gramm",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "a pound (500g)",
    "cat": "Maße & Gewichte",
    "translations": {
      "de": {
        "text": "ein Pfund",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "a kilo(gram)",
    "cat": "Maße & Gewichte",
    "translations": {
      "de": {
        "text": "ein Kilo(gramm)",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "Germany",
    "cat": "Land",
    "translations": {
      "de": {
        "text": "Deutschland",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "the German (person)",
    "cat": "Land",
    "translations": {
      "de": {
        "text": "der/die Deutsche, -n",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "German (adjective)",
    "cat": "Land",
    "translations": {
      "de": {
        "text": "deutsch",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "Europe",
    "cat": "Land",
    "translations": {
      "de": {
        "text": "Europa",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "the European (person)",
    "cat": "Land",
    "translations": {
      "de": {
        "text": "der Europäer",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  },
  {
    "en": "European (adjective)",
    "cat": "Land",
    "translations": {
      "de": {
        "text": "europäisch",
        "pron": "",
        "lit": "",
        "verify": false
      }
    }
  }
]
;
