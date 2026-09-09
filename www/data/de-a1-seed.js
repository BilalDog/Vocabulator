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
// exam papers. Since the exam itself is always conducted with "Sie" (the
// formal you), every one of those 44 sentences is phrased that way -- but
// about half of them also address the listener directly (Sie/Ihr/Ihre),
// so those get a second, informal phrasing in an optional
// `"du": "..."` field alongside `"text"`, shown together on the same
// card. Sentences with no listener-directed pronoun (e.g. "Mein Name
// ist ...", "Ein Glas Wasser, bitte!") have no "du" field, since there's
// no Sie/du distinction to make.
//
// Every entry has a permanent `"seedId"` (de-0001, de-0002, ...) that
// loadState() uses to match it against whatever's already installed --
// unlike matching on text+English, this survives the user editing an
// entry's wording. IMPORTANT: a seedId, once assigned, must never be
// reused or reassigned to a different entry, even if that entry is later
// edited or removed from this file -- existing installs still carry it.
// New entries always get a fresh id continuing the sequence (currently
// up to de-0847); reordering existing entries in this file is fine, but
// their seedId must move with them.
window.DE_A1_SEED_ENTRIES = 
[
  {
    "seedId": "de-0001",
    "en": "from; starting from",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "ab",
        "pron": "",
        "lit": "Ab morgen muss ich arbeiten."
      }
    }
  },
  {
    "seedId": "de-0002",
    "en": "but",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "aber",
        "pron": "",
        "lit": "Ich bin oft im Büro, aber nur für wenige Stunden."
      }
    }
  },
  {
    "seedId": "de-0003",
    "en": "to depart",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "abfahren",
        "pron": "",
        "lit": "Wir fahren um zwölf Uhr ab."
      }
    }
  },
  {
    "seedId": "de-0004",
    "en": "the departure",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Abfahrt",
        "pron": "",
        "lit": "Vor der Abfahrt rufe ich an."
      }
    }
  },
  {
    "seedId": "de-0005",
    "en": "to hand in; to drop off",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "abgeben",
        "pron": "",
        "lit": "Ich muss meine Schlüssel abgeben."
      }
    }
  },
  {
    "seedId": "de-0006",
    "en": "to pick up; to collect",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "abholen",
        "pron": "",
        "lit": "Wann kann ich den Schrank bei dir abholen? Wir müssen noch meinen Bruder abholen."
      }
    }
  },
  {
    "seedId": "de-0007",
    "en": "the sender",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Absender",
        "pron": "",
        "lit": "Da ist ein Brief für dich ohne Absender."
      }
    }
  },
  {
    "seedId": "de-0008",
    "en": "attention!; watch out!",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "Achtung",
        "pron": "",
        "lit": "Achtung! Das dürfen Sie nicht tun."
      }
    }
  },
  {
    "seedId": "de-0009",
    "en": "the address",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Adresse,-en",
        "pron": "",
        "lit": "Können Sie mir seine Adresse sagen?"
      }
    }
  },
  {
    "seedId": "de-0010",
    "en": "all",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "alle",
        "pron": "",
        "lit": "Alles Gute! Das ist alles. Sind alle da? Alle Freunde kommen. Hast du alles?"
      }
    }
  },
  {
    "seedId": "de-0011",
    "en": "alone",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "allein",
        "pron": "",
        "lit": "Er kommt allein."
      }
    }
  },
  {
    "seedId": "de-0012",
    "en": "so; thus",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "also",
        "pron": "",
        "lit": "Also, es ist so: ... Er hat Zeit, also muss er uns helfen."
      }
    }
  },
  {
    "seedId": "de-0013",
    "en": "old",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "alt",
        "pron": "",
        "lit": "Wie alt sind Sie? Sie sehen aber nicht so alt aus. Mein Auto ist schon sehr alt. Wir wohnen in einem sehr alten Haus. Köln ist eine alte Stadt."
      }
    }
  },
  {
    "seedId": "de-0014",
    "en": "the age",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Alter",
        "pron": "",
        "lit": "Alter: 26 Jahre."
      }
    }
  },
  {
    "seedId": "de-0015",
    "en": "at; on",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "an",
        "pron": "",
        "lit": "Fahren Sie an der nächsten Straße nach rechts. Wir treffen uns am Bahnhof. Am nächsten Montag geht es leider nicht."
      }
    }
  },
  {
    "seedId": "de-0016",
    "en": "to offer",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "anbieten",
        "pron": "",
        "lit": "Was darf ich dir anbieten?"
      }
    }
  },
  {
    "seedId": "de-0017",
    "en": "the offer",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Angebot, -e",
        "pron": "",
        "lit": "Heute sind Sportschuhe im Angebot."
      }
    }
  },
  {
    "seedId": "de-0018",
    "en": "other",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "andere",
        "pron": "",
        "lit": "WiIlst du diese Jacke? – Nein, ich möchte die andere."
      }
    }
  },
  {
    "seedId": "de-0019",
    "en": "to begin; to start",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "anfangen",
        "pron": "",
        "lit": "Hier fängt die Bahnhofstraße an. Der Unterricht fängt gleich an."
      }
    }
  },
  {
    "seedId": "de-0020",
    "en": "the beginning",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Anfang",
        "pron": "",
        "lit": "Sie wohnt am Anfang der Straße. Wir machen Anfang Juli Urlaub."
      }
    }
  },
  {
    "seedId": "de-0021",
    "en": "to click (on)",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "anklicken",
        "pron": "",
        "lit": "Da musst du dieses Wort anklicken."
      }
    }
  },
  {
    "seedId": "de-0022",
    "en": "to arrive",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "ankommen",
        "pron": "",
        "lit": "Wann kommt dieser Zug in Hamburg an?"
      }
    }
  },
  {
    "seedId": "de-0023",
    "en": "the arrival",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Ankunft",
        "pron": "",
        "lit": "Auf diesem Plan steht nur die Ankunft(-szeit) der Züge."
      }
    }
  },
  {
    "seedId": "de-0024",
    "en": "to mark with a cross/tick",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "ankreuzen",
        "pron": "",
        "lit": "Auf dem Formular müssen Sie an mehreren Stellen etwas ankreuzen."
      }
    }
  },
  {
    "seedId": "de-0025",
    "en": "to turn on",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "anmachen",
        "pron": "",
        "lit": "Mach bitte das Licht an!"
      }
    }
  },
  {
    "seedId": "de-0026",
    "en": "to register; to sign up",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "(sich) anmelden",
        "pron": "",
        "lit": "Wo kann ich mich anmelden?"
      }
    }
  },
  {
    "seedId": "de-0027",
    "en": "the registration",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Anmeldung",
        "pron": "",
        "lit": "Eine Anmeldung für diesen Kurs ist nicht mehr möglich."
      }
    }
  },
  {
    "seedId": "de-0028",
    "en": "the form of address; salutation",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "die Anrede",
        "pron": "",
        "lit": "Schreiben Sie auch eine Anrede und einen Gruß."
      }
    }
  },
  {
    "seedId": "de-0029",
    "en": "to call (phone)",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "anrufen",
        "pron": "",
        "lit": "Kann man Sie anrufen? Peter ruft kurz seine Freundin an."
      }
    }
  },
  {
    "seedId": "de-0030",
    "en": "the phone call",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Anruf, -e",
        "pron": "",
        "lit": "Sie bekommt viele Anrufe auf ihrem Handy."
      }
    }
  },
  {
    "seedId": "de-0031",
    "en": "the answering machine",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Anrufbeantworter",
        "pron": "",
        "lit": "Wir sind im Moment nicht da. Sprechen Sie bitte auf den Anrufbeantworter."
      }
    }
  },
  {
    "seedId": "de-0032",
    "en": "the announcement",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "die Ansage, -n",
        "pron": "",
        "lit": "Hören Sie die Ansagen."
      }
    }
  },
  {
    "seedId": "de-0033",
    "en": "the connection",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Anschluss",
        "pron": "",
        "lit": "In Mannheim haben Sie Anschluss nach Saarbrücken. Ist das die Anmeldung für einen Telefonanschluss?"
      }
    }
  },
  {
    "seedId": "de-0034",
    "en": "to be on (light/device)",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "an sein",
        "pron": "",
        "lit": "Heute Nacht war das Licht an. Das Licht ist noch an."
      }
    }
  },
  {
    "seedId": "de-0035",
    "en": "to answer",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "antworten",
        "pron": "",
        "lit": "Er antwortet nicht."
      }
    }
  },
  {
    "seedId": "de-0036",
    "en": "the answer",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "die Antwort, -en",
        "pron": "",
        "lit": "Er gibt leider keine Antwort."
      }
    }
  },
  {
    "seedId": "de-0037",
    "en": "the advertisement; notice",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "die Anzeige, -n",
        "pron": "",
        "lit": "Ich habe Ihre Anzeige in der Zeitung gelesen."
      }
    }
  },
  {
    "seedId": "de-0038",
    "en": "to get dressed",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "(sich) anziehen",
        "pron": "",
        "lit": "Ich muss mich noch anziehen."
      }
    }
  },
  {
    "seedId": "de-0039",
    "en": "the apartment",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "das Apartment, -s",
        "pron": "",
        "lit": "Wir haben ein Apartment gemietet."
      }
    }
  },
  {
    "seedId": "de-0040",
    "en": "the apple",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Apfel, -Ä",
        "pron": "",
        "lit": "Ein Pfund Äpfel bitte."
      }
    }
  },
  {
    "seedId": "de-0041",
    "en": "the appetite",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Appetit",
        "pron": "",
        "lit": "Guten Appetit!"
      }
    }
  },
  {
    "seedId": "de-0042",
    "en": "to work",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "arbeiten",
        "pron": "",
        "lit": "Wo arbeiten Sie?"
      }
    }
  },
  {
    "seedId": "de-0043",
    "en": "the work; job",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "die Arbeit, -en",
        "pron": "",
        "lit": "Mein Bruder sucht Arbeit."
      }
    }
  },
  {
    "seedId": "de-0044",
    "en": "unemployed",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "arbeitslos",
        "pron": "",
        "lit": "Es gibt bei uns viele Leute, die schon lange arbeitslos sind."
      }
    }
  },
  {
    "seedId": "de-0045",
    "en": "the workplace",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Arbeitsplatz, -ä, e",
        "pron": "",
        "lit": "An meinem Arbeitsplatz fehlt ein Drucker."
      }
    }
  },
  {
    "seedId": "de-0046",
    "en": "the arm",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Arm, -e",
        "pron": "",
        "lit": "Mein Arm tut weh."
      }
    }
  },
  {
    "seedId": "de-0047",
    "en": "the doctor",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "der Arzt, -Ä, e",
        "pron": "",
        "lit": "Morgen habe ich einen Termin bei meiner Ärztin."
      }
    }
  },
  {
    "seedId": "de-0048",
    "en": "also; too",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "auch",
        "pron": "",
        "lit": "Ich bin auch Spanier."
      }
    }
  },
  {
    "seedId": "de-0049",
    "en": "on; onto",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "auf",
        "pron": "",
        "lit": "Die Kinder spielen auf der Straße. Auf Wiedersehen. Wie heißt das auf Deutsch?"
      }
    }
  },
  {
    "seedId": "de-0050",
    "en": "the task; assignment",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Aufgabe, -n",
        "pron": "",
        "lit": "Das ist eine schwere Aufgabe."
      }
    }
  },
  {
    "seedId": "de-0051",
    "en": "to stop",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "aufhören",
        "pron": "",
        "lit": "Der Kurs hört in einer Woche auf. Hier hört die Bahnhofstraße auf."
      }
    }
  },
  {
    "seedId": "de-0052",
    "en": "to be open",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "auf sein",
        "pron": "",
        "lit": "Du brauchst den Schlüssel nicht. Die Wohnung ist auf. Das Fenster ist noch auf."
      }
    }
  },
  {
    "seedId": "de-0053",
    "en": "to get up; to stand up",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "aufstehen",
        "pron": "",
        "lit": "Ich muss immer um vier Uhr aufstehen. Soll ich aufstehen?"
      }
    }
  },
  {
    "seedId": "de-0054",
    "en": "the elevator; lift",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Aufzug, -ü, e",
        "pron": "",
        "lit": "In diesem Haus gibt es keinen Aufzug."
      }
    }
  },
  {
    "seedId": "de-0055",
    "en": "the eye",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Auge, -n",
        "pron": "",
        "lit": "Er hat blaue Augen."
      }
    }
  },
  {
    "seedId": "de-0056",
    "en": "from; out of",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "aus",
        "pron": "",
        "lit": "Er kommt aus Brasilien."
      }
    }
  },
  {
    "seedId": "de-0057",
    "en": "the excursion; trip",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Ausflug",
        "pron": "",
        "lit": "Morgen machen wir einen Ausflug nach Heidelberg."
      }
    }
  },
  {
    "seedId": "de-0058",
    "en": "to fill out",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "ausfüllen",
        "pron": "",
        "lit": "Füllen Sie bitte dieses Formular aus."
      }
    }
  },
  {
    "seedId": "de-0059",
    "en": "the exit",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Ausgang",
        "pron": "",
        "lit": "Wo ist der Ausgang?"
      }
    }
  },
  {
    "seedId": "de-0060",
    "en": "the information",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "die Auskunft, -ü, e",
        "pron": "",
        "lit": "Können Sie mir eine Auskunft geben?"
      }
    }
  },
  {
    "seedId": "de-0061",
    "en": "abroad; foreign countries",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Ausland",
        "pron": "",
        "lit": "Fahren Sie ins Ausland?"
      }
    }
  },
  {
    "seedId": "de-0062",
    "en": "the foreigner",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Ausländer, -",
        "pron": "",
        "lit": "SInd Sie Ausländerin?"
      }
    }
  },
  {
    "seedId": "de-0063",
    "en": "foreign",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "ausländisch",
        "pron": "",
        "lit": "Leider habe ich nur ausländisches Geld."
      }
    }
  },
  {
    "seedId": "de-0064",
    "en": "to turn off",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "ausmachen",
        "pron": "",
        "lit": "Mach bitte das Licht aus!"
      }
    }
  },
  {
    "seedId": "de-0065",
    "en": "the statement",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "die Aussage, -n",
        "pron": "",
        "lit": "Ist die Aussage richtig oder falsch?"
      }
    }
  },
  {
    "seedId": "de-0066",
    "en": "to look; to appear",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "aussehen",
        "pron": "",
        "lit": "Das sieht schön aus."
      }
    }
  },
  {
    "seedId": "de-0067",
    "en": "to be off; to be over",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "aus sein",
        "pron": "",
        "lit": "Das Licht ist aus. Die Schule ist aus."
      }
    }
  },
  {
    "seedId": "de-0068",
    "en": "to get off/out (vehicle)",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "aussteigen",
        "pron": "",
        "lit": "Wo muss ich aussteigen?"
      }
    }
  },
  {
    "seedId": "de-0069",
    "en": "the ID card",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Ausweis",
        "pron": "",
        "lit": "Hier ist mein Ausweis."
      }
    }
  },
  {
    "seedId": "de-0070",
    "en": "to get undressed",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "(sich) ausziehen",
        "pron": "",
        "lit": "Zieh die Schuhe aus, bitte!"
      }
    }
  },
  {
    "seedId": "de-0071",
    "en": "the car",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "das Auto, -s",
        "pron": "",
        "lit": "Er kommt mit dem Auto."
      }
    }
  },
  {
    "seedId": "de-0072",
    "en": "the highway; motorway",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "die Autobahn, -en",
        "pron": "",
        "lit": "Wo geht‘s hier bitte zur Autobahn?"
      }
    }
  },
  {
    "seedId": "de-0073",
    "en": "the vending machine",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Automat",
        "pron": "",
        "lit": "Die Fahrkarten gibt es nur am Automaten."
      }
    }
  },
  {
    "seedId": "de-0074",
    "en": "automatic",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "automatisch",
        "pron": "",
        "lit": "Du musst nichts machen. Das geht automatisch."
      }
    }
  },
  {
    "seedId": "de-0075",
    "en": "the baby",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Baby, -s",
        "pron": "",
        "lit": "Mein Kind ist noch ein Baby."
      }
    }
  },
  {
    "seedId": "de-0076",
    "en": "the bakery",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Bäckerei",
        "pron": "",
        "lit": "Ich geh mal schnell zur Bäckerei."
      }
    }
  },
  {
    "seedId": "de-0077",
    "en": "the bathroom; bath",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Bad",
        "pron": "",
        "lit": "Wir haben kein großes Bad."
      }
    }
  },
  {
    "seedId": "de-0078",
    "en": "to bathe",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "baden",
        "pron": "",
        "lit": "Ich bade nicht so gern, ich dusche lieber."
      }
    }
  },
  {
    "seedId": "de-0079",
    "en": "the train; railway",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Bahn",
        "pron": "",
        "lit": "Wir fahren lieber mit der Bahn. Ich nehme die nächste Bahn."
      }
    }
  },
  {
    "seedId": "de-0080",
    "en": "the train station",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "der Bahnhof",
        "pron": "",
        "lit": "Komme ich hier zum Bahnhof?"
      }
    }
  },
  {
    "seedId": "de-0081",
    "en": "the platform",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Bahnsteig",
        "pron": "",
        "lit": "Auf welchem Bahnsteig fährt der Zug?"
      }
    }
  },
  {
    "seedId": "de-0082",
    "en": "soon",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "bald",
        "pron": "",
        "lit": "Ich komme bald."
      }
    }
  },
  {
    "seedId": "de-0083",
    "en": "the balcony",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Balkon",
        "pron": "",
        "lit": "Die Wohnung hat auch einen kleinen Balkon."
      }
    }
  },
  {
    "seedId": "de-0084",
    "en": "the banana",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "die Banane, -n",
        "pron": "",
        "lit": "Drei Bananen, bitte!"
      }
    }
  },
  {
    "seedId": "de-0085",
    "en": "the bank; the bench",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Bank",
        "pron": "",
        "lit": "Die Bank schließt schon um vier Uhr. Er sitzt im Park auf einer Bank und liest."
      }
    }
  },
  {
    "seedId": "de-0086",
    "en": "in cash",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "bar",
        "pron": "",
        "lit": "Muss ich bar zahlen oder geht‘s auch mit Karte?"
      }
    }
  },
  {
    "seedId": "de-0087",
    "en": "the belly; stomach",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Bauch",
        "pron": "",
        "lit": "Seit gestern tut mir der Bauch weh."
      }
    }
  },
  {
    "seedId": "de-0088",
    "en": "the tree",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Baum, -ä, e",
        "pron": "",
        "lit": "Vorsicht, fahr nicht an den Baum!"
      }
    }
  },
  {
    "seedId": "de-0089",
    "en": "the official; civil servant",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Beamte, -n",
        "pron": "",
        "lit": "Fragen Sie die Beamtin an Schalter acht!"
      }
    }
  },
  {
    "seedId": "de-0090",
    "en": "to mean",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "bedeuten",
        "pron": "",
        "lit": "Was bedeutet das Wort?"
      }
    }
  },
  {
    "seedId": "de-0091",
    "en": "to begin",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "beginnen",
        "pron": "",
        "lit": "Das Spiel beginnt um 15.30 Uhr."
      }
    }
  },
  {
    "seedId": "de-0092",
    "en": "at; near; with",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "bei",
        "pron": "",
        "lit": "Offenbach liegt bei Frankfurt. Ich wohne bei meinen Eltern. Bei uns regnet es heute. Er arbeitet bei der Polizei."
      }
    }
  },
  {
    "seedId": "de-0093",
    "en": "both",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "beide",
        "pron": "",
        "lit": "Beide Eltern arbeiten. Wir kommen beide."
      }
    }
  },
  {
    "seedId": "de-0094",
    "en": "the leg",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "das Bein, -e",
        "pron": "",
        "lit": "Mein rechtes Bein tut weh."
      }
    }
  },
  {
    "seedId": "de-0095",
    "en": "the example",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "das Beispiel, -e",
        "pron": "",
        "lit": "Kannst du mir ein Beispiel sagen?"
      }
    }
  },
  {
    "seedId": "de-0096",
    "en": "for example",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "zum Beispiel/z. B.",
        "pron": "",
        "lit": "Viele meiner Verwandten, z. B. meine beiden Brüder, arbeiten auch hier."
      }
    }
  },
  {
    "seedId": "de-0097",
    "en": "known; well-known",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "bekannt",
        "pron": "",
        "lit": "Picasso ist sehr bekannt."
      }
    }
  },
  {
    "seedId": "de-0098",
    "en": "the acquaintance",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der/die Bekannte, -n",
        "pron": "",
        "lit": "Ein Bekannter von mir heißt Klaus."
      }
    }
  },
  {
    "seedId": "de-0099",
    "en": "to get; to receive",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "bekommen",
        "pron": "",
        "lit": "Haben Sie meinen Brief bekommen? Was bekommen Sie? Dieses Medikament bekommen Sie in der Apotheke."
      }
    }
  },
  {
    "seedId": "de-0100",
    "en": "to use",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "benutzen",
        "pron": "",
        "lit": "Die Aufzüge bitte nicht benutzen!"
      }
    }
  },
  {
    "seedId": "de-0101",
    "en": "the profession; job",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "der Beruf, -e",
        "pron": "",
        "lit": "Was sind Sie von Beruf? Was ist Ihr Beruf?"
      }
    }
  },
  {
    "seedId": "de-0102",
    "en": "occupied; busy",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "besetzt",
        "pron": "",
        "lit": "Die Nummer ist immer besetzt. Der Platz ist besetzt."
      }
    }
  },
  {
    "seedId": "de-0103",
    "en": "to visit; to view",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "besichtigen",
        "pron": "",
        "lit": "Ich möchte gern den Dom besichtigen."
      }
    }
  },
  {
    "seedId": "de-0104",
    "en": "better",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "besser",
        "pron": "",
        "lit": "Es geht mir schon besser."
      }
    }
  },
  {
    "seedId": "de-0105",
    "en": "best",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "beste",
        "pron": "",
        "lit": "Am besten treffen wir uns morgen."
      }
    }
  },
  {
    "seedId": "de-0106",
    "en": "to order",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "bestellen",
        "pron": "",
        "lit": "Wir möchten bestellen, bitte. Dieses Buch haben wir nicht – sollen wir es für Sie bestellen?"
      }
    }
  },
  {
    "seedId": "de-0107",
    "en": "to visit",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "besuchen",
        "pron": "",
        "lit": "Darf ich dich besuchen?"
      }
    }
  },
  {
    "seedId": "de-0108",
    "en": "the bed",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Bett, -en",
        "pron": "",
        "lit": "Wir brauchen noch ein Kinderbett."
      }
    }
  },
  {
    "seedId": "de-0109",
    "en": "to pay",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "bezahlen",
        "pron": "",
        "lit": "Wo muss ich bezahlen?"
      }
    }
  },
  {
    "seedId": "de-0110",
    "en": "the beer",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Bier",
        "pron": "",
        "lit": "Noch ein Bier bitte."
      }
    }
  },
  {
    "seedId": "de-0111",
    "en": "the picture",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Bild, -er",
        "pron": "",
        "lit": "Hast du ein Bild von deinem Sohn?"
      }
    }
  },
  {
    "seedId": "de-0112",
    "en": "cheap",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "billig",
        "pron": "",
        "lit": "Die Jacke kostet nur 10 Euro! Die ist aber billig!"
      }
    }
  },
  {
    "seedId": "de-0113",
    "en": "the pear",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "die Birne, -n",
        "pron": "",
        "lit": "Ein Kilo Birnen, bitte!"
      }
    }
  },
  {
    "seedId": "de-0114",
    "en": "until",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "bis",
        "pron": "",
        "lit": "Ich fahre nur bis Stuttgart. Ich warte bis morgen."
      }
    }
  },
  {
    "seedId": "de-0115",
    "en": "a little; a bit",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "bisschen",
        "pron": "",
        "lit": "Ich spreche Englisch, Französisch und ein bisschen Deutsch."
      }
    }
  },
  {
    "seedId": "de-0116",
    "en": "please",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "bitte",
        "pron": "",
        "lit": "Eine Tasse Kaffee, bitte! Sprechen Sie bitte leise!"
      }
    }
  },
  {
    "seedId": "de-0117",
    "en": "the request",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Bitte, -n",
        "pron": "",
        "lit": "Ich habe noch eine Bitte."
      }
    }
  },
  {
    "seedId": "de-0118",
    "en": "to ask; to request",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "bitten",
        "pron": "",
        "lit": "Darf ich Sie um etwas bitten?"
      }
    }
  },
  {
    "seedId": "de-0119",
    "en": "bitter",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "bitter",
        "pron": "",
        "lit": "Der Kaffee schmeckt bitter."
      }
    }
  },
  {
    "seedId": "de-0120",
    "en": "to stay; to remain",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "bleiben",
        "pron": "",
        "lit": "Ich bleibe heute zu Hause. Wir bleiben nur bis morgen."
      }
    }
  },
  {
    "seedId": "de-0121",
    "en": "the pencil",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Bleistift, -e",
        "pron": "",
        "lit": "Hast du einen Bleistift?"
      }
    }
  },
  {
    "seedId": "de-0122",
    "en": "the view; glance",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Blick",
        "pron": "",
        "lit": "Von diesem Hotel hat man einen guten Blick auf den Rhein."
      }
    }
  },
  {
    "seedId": "de-0123",
    "en": "the flower",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Blume, -n",
        "pron": "",
        "lit": "Gefallen dir die Blumen?"
      }
    }
  },
  {
    "seedId": "de-0124",
    "en": "the sheet (of paper); arch",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Bogen",
        "pron": "",
        "lit": "Schreiben Sie Ihre Lösungen bitte auf den Antwortbogen."
      }
    }
  },
  {
    "seedId": "de-0125",
    "en": "angry; bad",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "böse",
        "pron": "",
        "lit": "Sie ist böse auf mich."
      }
    }
  },
  {
    "seedId": "de-0126",
    "en": "to need",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "brauchen",
        "pron": "",
        "lit": "Brauchst du die Zeitung noch?"
      }
    }
  },
  {
    "seedId": "de-0127",
    "en": "wide",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "breit",
        "pron": "",
        "lit": "Wie breit ist der Schrank?"
      }
    }
  },
  {
    "seedId": "de-0128",
    "en": "the letter",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Brief, -e",
        "pron": "",
        "lit": "Haben Sie einen Brief für mich?"
      }
    }
  },
  {
    "seedId": "de-0129",
    "en": "the stamp",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "die Briefmarke, -n",
        "pron": "",
        "lit": "Kaufst du bitte Briefmarken bei der Post."
      }
    }
  },
  {
    "seedId": "de-0130",
    "en": "to bring",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "bringen",
        "pron": "",
        "lit": "Bringen Sie mir bitte noch einen Kaffee! Wir müssen ihn zum Arzt bringen."
      }
    }
  },
  {
    "seedId": "de-0131",
    "en": "the bread",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Brot, -e",
        "pron": "",
        "lit": "Haben Sie auch Weißbrot? Nimm noch ein paar Brote für die Fahrt mit."
      }
    }
  },
  {
    "seedId": "de-0132",
    "en": "the bread roll",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Brötchen, –",
        "pron": "",
        "lit": "Möchtest du Brötchen zum Frühstück?"
      }
    }
  },
  {
    "seedId": "de-0133",
    "en": "the brother",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Bruder, -ü",
        "pron": "",
        "lit": "Sein Bruder arbeitet auch hier."
      }
    }
  },
  {
    "seedId": "de-0134",
    "en": "the book",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Buch, -ü, er",
        "pron": "",
        "lit": "Gute Bücher sind oft sehr teuer. In diesem Wörterbuch finden Sie mehr als 20.000 Wörter."
      }
    }
  },
  {
    "seedId": "de-0135",
    "en": "the letter (alphabet)",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Buchstabe, -n",
        "pron": "",
        "lit": "Diesen Buchstaben gibt es in meiner Sprache nicht."
      }
    }
  },
  {
    "seedId": "de-0136",
    "en": "to spell",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "buchstabieren",
        "pron": "",
        "lit": "Bitte buchstabieren Sie Ihren Namen."
      }
    }
  },
  {
    "seedId": "de-0137",
    "en": "the bus",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "der Bus, -se",
        "pron": "",
        "lit": "Wann kommt der nächste Bus?"
      }
    }
  },
  {
    "seedId": "de-0138",
    "en": "the butter",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Butter",
        "pron": "",
        "lit": "Für mich bitte ein Brötchen mit Butter und Käse."
      }
    }
  },
  {
    "seedId": "de-0139",
    "en": "the café",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Café, -s",
        "pron": "",
        "lit": "Sollen wir uns im Café treffen?"
      }
    }
  },
  {
    "seedId": "de-0140",
    "en": "the CD",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "die CD, -s",
        "pron": "",
        "lit": "Bring bitte deine Lieblings-CD mit."
      }
    }
  },
  {
    "seedId": "de-0141",
    "en": "the boss",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Chef",
        "pron": "",
        "lit": "Wir haben eine neue Chefin."
      }
    }
  },
  {
    "seedId": "de-0142",
    "en": "approximately; about",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "circa/ca.",
        "pron": "",
        "lit": "Von Mainz nach Frankfurt sind es circa fünfzig Kilometer."
      }
    }
  },
  {
    "seedId": "de-0143",
    "en": "the computer",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Computer, –",
        "pron": "",
        "lit": "Wann bekommst du deinen neuen Computer?"
      }
    }
  },
  {
    "seedId": "de-0144",
    "en": "there; since",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "da",
        "pron": "",
        "lit": "Da hinten ist er ja. Wir sprechen gerade über Paul. Da kommt er ja gerade. Ich nehme das da. Ist Herr Klein schon da?"
      }
    }
  },
  {
    "seedId": "de-0145",
    "en": "the lady",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "die Dame, -n",
        "pron": "",
        "lit": "Damen (an der Toilette) Sehr geehrte Damen und Herren!"
      }
    }
  },
  {
    "seedId": "de-0146",
    "en": "next to it; beside it",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "daneben",
        "pron": "",
        "lit": "Du kennst doch die Post. Daneben ist die Bank."
      }
    }
  },
  {
    "seedId": "de-0147",
    "en": "to thank",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "danken",
        "pron": "",
        "lit": "Ich danke Ihnen für die Einladung."
      }
    }
  },
  {
    "seedId": "de-0148",
    "en": "thanks; gratitude",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Dank",
        "pron": "",
        "lit": "Vielen Dank! Herzlichen Dank!"
      }
    }
  },
  {
    "seedId": "de-0149",
    "en": "thank you",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "danke",
        "pron": "",
        "lit": "Soll ich Ihnen helfen? - Nein, danke!"
      }
    }
  },
  {
    "seedId": "de-0150",
    "en": "then",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "dann",
        "pron": "",
        "lit": "Ich muss noch schnell zur Post, dann komme ich."
      }
    }
  },
  {
    "seedId": "de-0151",
    "en": "the date",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Datum",
        "pron": "",
        "lit": "Bitte schreiben Sie noch das Datum auf das Formular."
      }
    }
  },
  {
    "seedId": "de-0152",
    "en": "to last; to take (time)",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "dauern",
        "pron": "",
        "lit": "Wie lange dauert der Film?"
      }
    }
  },
  {
    "seedId": "de-0153",
    "en": "your (informal, singular)",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "dein",
        "pron": "",
        "lit": "Ist das dein Auto? Ist das deins?"
      }
    }
  },
  {
    "seedId": "de-0154",
    "en": "because; for",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "denn",
        "pron": "",
        "lit": "Ich kann nicht kommen, denn ich bin krank."
      }
    }
  },
  {
    "seedId": "de-0155",
    "en": "the (definite article)",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "der, die, das",
        "pron": "",
        "lit": "Ich nehme das da. Hier ist der Brief, den du suchst. Die Fahrkarte bekommst du am Bahnhof."
      }
    }
  },
  {
    "seedId": "de-0156",
    "en": "you (accusative)",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "dich",
        "pron": "",
        "lit": "Die Blumen sind für dich."
      }
    }
  },
  {
    "seedId": "de-0157",
    "en": "this; this one",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "dieser",
        "pron": "",
        "lit": "Ich nehme lieber diesen Kuchen."
      }
    }
  },
  {
    "seedId": "de-0158",
    "en": "you (dative)",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "dir",
        "pron": "",
        "lit": "Gefallen dir die Blumen?"
      }
    }
  },
  {
    "seedId": "de-0159",
    "en": "the disco",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Disco",
        "pron": "",
        "lit": "Heute abend gehen wir in die Disco tanzen."
      }
    }
  },
  {
    "seedId": "de-0160",
    "en": "the doctor",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Doktor",
        "pron": "",
        "lit": "Meine Tochter ist krank. Wir gehen zum Doktor."
      }
    }
  },
  {
    "seedId": "de-0161",
    "en": "the double room",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "das Doppelzimmer",
        "pron": "",
        "lit": "Wollen Sie ein Doppelzimmer oder ein Einzelzimmer?"
      }
    }
  },
  {
    "seedId": "de-0162",
    "en": "the village",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Dorf, -ö, er",
        "pron": "",
        "lit": "Meine Familie lebt in einem Dorf."
      }
    }
  },
  {
    "seedId": "de-0163",
    "en": "there; from there; to there",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "dort, -her, -hin",
        "pron": "",
        "lit": "Deine Tasche kannst du dorthin stellen. Dort ist unser Haus."
      }
    }
  },
  {
    "seedId": "de-0164",
    "en": "outside",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "draußen",
        "pron": "",
        "lit": "Wollen wir draußen sitzen?"
      }
    }
  },
  {
    "seedId": "de-0165",
    "en": "to print",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "drucken",
        "pron": "",
        "lit": "Bitte drucke das Formular für mich."
      }
    }
  },
  {
    "seedId": "de-0166",
    "en": "the printer",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Drucker, –",
        "pron": "",
        "lit": "Mein Drucker ist kaputt."
      }
    }
  },
  {
    "seedId": "de-0167",
    "en": "to press; to push",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "drücken",
        "pron": "",
        "lit": "Drück hier, dann geht der Computer an."
      }
    }
  },
  {
    "seedId": "de-0168",
    "en": "through",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "durch",
        "pron": "",
        "lit": "Am besten gehen Sie durch die Breite Straße."
      }
    }
  },
  {
    "seedId": "de-0169",
    "en": "the announcement",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "die Durchsage, -n",
        "pron": "",
        "lit": "Ich habe die Durchsage nicht verstanden."
      }
    }
  },
  {
    "seedId": "de-0170",
    "en": "to be allowed to; may",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "dürfen",
        "pron": "",
        "lit": "Sie dürfen hier nicht rauchen. Darf ich Sie zu einem Kaffee einladen? Es darf nicht mehr als 15 Euro kosten."
      }
    }
  },
  {
    "seedId": "de-0171",
    "en": "the thirst",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Durst",
        "pron": "",
        "lit": "Hast du etwas zu trinken? Ich habe großen Durst."
      }
    }
  },
  {
    "seedId": "de-0172",
    "en": "to shower",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "(sich) duschen",
        "pron": "",
        "lit": "Ich bade nicht so gern, ich dusche lieber."
      }
    }
  },
  {
    "seedId": "de-0173",
    "en": "the shower",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Dusche",
        "pron": "",
        "lit": "Unsere Wohnung hat nur eine Dusche."
      }
    }
  },
  {
    "seedId": "de-0174",
    "en": "the corner",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Ecke, -n",
        "pron": "",
        "lit": "An der nächsten Ecke links."
      }
    }
  },
  {
    "seedId": "de-0175",
    "en": "the wife",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Ehefrau, -en/",
        "pron": "",
        "lit": "Das ist mein (Ehe-) Mann/meine (Ehe-) Frau."
      }
    }
  },
  {
    "seedId": "de-0176",
    "en": "the husband",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Ehemann, ä, er",
        "pron": "",
        "lit": "Das ist mein (Ehe-) Mann/meine (Ehe-) Frau."
      }
    }
  },
  {
    "seedId": "de-0177",
    "en": "the egg",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Ei, -er",
        "pron": "",
        "lit": "Möchtest du ein Ei zum Frühstück?"
      }
    }
  },
  {
    "seedId": "de-0178",
    "en": "hurried; urgent",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "eilig",
        "pron": "",
        "lit": "Hast du es eilig?"
      }
    }
  },
  {
    "seedId": "de-0179",
    "en": "a; one",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "ein",
        "pron": "",
        "lit": "Ich nehme ein Bier. Willst du auch eins? Ist hier einer, der das kann?"
      }
    }
  },
  {
    "seedId": "de-0180",
    "en": "simple; easy",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "einfach",
        "pron": "",
        "lit": "Die Prüfung ist ganz einfach. Hin und zurück? – Nein, bitte nur einfach. Ich brauche nur ein einfaches Zimmer."
      }
    }
  },
  {
    "seedId": "de-0181",
    "en": "the entrance",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Eingang",
        "pron": "",
        "lit": "Der Eingang ist um die Ecke."
      }
    }
  },
  {
    "seedId": "de-0182",
    "en": "to shop; to buy",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "einkaufen",
        "pron": "",
        "lit": "Ich muss noch für morgen einkaufen."
      }
    }
  },
  {
    "seedId": "de-0183",
    "en": "to invite",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "einladen",
        "pron": "",
        "lit": "Darf ich Sie zu einem Kaffee einladen?"
      }
    }
  },
  {
    "seedId": "de-0184",
    "en": "the invitation",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Einladung",
        "pron": "",
        "lit": "Danke für die Einladung!"
      }
    }
  },
  {
    "seedId": "de-0185",
    "en": "once",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "einmal",
        "pron": "",
        "lit": "Diese Prüfung mache ich nicht noch einmal."
      }
    }
  },
  {
    "seedId": "de-0186",
    "en": "to get on/in (vehicle)",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "einsteigen",
        "pron": "",
        "lit": "Schnell, steig ein, der Zug fährt gleich."
      }
    }
  },
  {
    "seedId": "de-0187",
    "en": "the entry; admission",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Eintritt",
        "pron": "",
        "lit": "Der Preis für den Eintritt ist 5 Euro."
      }
    }
  },
  {
    "seedId": "de-0188",
    "en": "the single room",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Einzelzimmer",
        "pron": "",
        "lit": "Haben Sie noch ein Einzelzimmer?"
      }
    }
  },
  {
    "seedId": "de-0189",
    "en": "the parents",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "die Eltern (pl.)",
        "pron": "",
        "lit": "Meine Eltern leben in Spanien."
      }
    }
  },
  {
    "seedId": "de-0190",
    "en": "the email",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "die E-Mail, -s",
        "pron": "",
        "lit": "Ich habe Ihre E-Mail nicht bekommen."
      }
    }
  },
  {
    "seedId": "de-0191",
    "en": "the recipient",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Empfänger, –",
        "pron": "",
        "lit": "Auf dem Brief steht dein Name, also bist du der Empfänger."
      }
    }
  },
  {
    "seedId": "de-0192",
    "en": "to recommend",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "empfehlen",
        "pron": "",
        "lit": "Welchen Wein können Sie mir empfehlen?"
      }
    }
  },
  {
    "seedId": "de-0193",
    "en": "to end",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "enden",
        "pron": "",
        "lit": "Die Straße endet hier."
      }
    }
  },
  {
    "seedId": "de-0194",
    "en": "the end",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "das Ende",
        "pron": "",
        "lit": "Sie wohnt am Ende der Straße. Er bekommt sein Geld am Ende des Monats."
      }
    }
  },
  {
    "seedId": "de-0195",
    "en": "to excuse; to forgive",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "entschuldigen",
        "pron": "",
        "lit": "Entschuldigen Sie bitte!"
      }
    }
  },
  {
    "seedId": "de-0196",
    "en": "the apology; excuse me",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "die Entschuldigung",
        "pron": "",
        "lit": "Entschuldigung! – Bitte."
      }
    }
  },
  {
    "seedId": "de-0197",
    "en": "he",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "er",
        "pron": "",
        "lit": "Er heißt Ali."
      }
    }
  },
  {
    "seedId": "de-0198",
    "en": "the result",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "das Ergebnis, -se",
        "pron": "",
        "lit": "Das Ergebnis des Tests bekommen Sie in zwei Wochen."
      }
    }
  },
  {
    "seedId": "de-0199",
    "en": "to explain",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "erklären",
        "pron": "",
        "lit": "Kannst du mir das erklären?"
      }
    }
  },
  {
    "seedId": "de-0200",
    "en": "to allow; to permit",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "erlauben",
        "pron": "",
        "lit": "Rauchen ist hier nicht erlaubt."
      }
    }
  },
  {
    "seedId": "de-0201",
    "en": "the adult",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Erwachsene, -n",
        "pron": "",
        "lit": "Dieser Film ist nur für Erwachsene."
      }
    }
  },
  {
    "seedId": "de-0202",
    "en": "to tell; to narrate",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "erzählen",
        "pron": "",
        "lit": "Wir müssen euch etwas erzählen!"
      }
    }
  },
  {
    "seedId": "de-0203",
    "en": "it",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "es",
        "pron": "",
        "lit": "Es regnet."
      }
    }
  },
  {
    "seedId": "de-0204",
    "en": "to eat",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "essen",
        "pron": "",
        "lit": "Was gibt es zu essen?"
      }
    }
  },
  {
    "seedId": "de-0205",
    "en": "the food; meal",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "das Essen",
        "pron": "",
        "lit": "Das Essen ist heute sehr gut."
      }
    }
  },
  {
    "seedId": "de-0206",
    "en": "your (plural)",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "euer",
        "pron": "",
        "lit": "Euer Kurs beginnt heute."
      }
    }
  },
  {
    "seedId": "de-0207",
    "en": "to drive; to go (by vehicle)",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "fahren",
        "pron": "",
        "lit": "Ich fahre mit dem Auto zur Arbeit."
      }
    }
  },
  {
    "seedId": "de-0208",
    "en": "the driver",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Fahrer",
        "pron": "",
        "lit": "Bitte nicht mit dem Fahrer sprechen!"
      }
    }
  },
  {
    "seedId": "de-0209",
    "en": "the (travel) ticket",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "die Fahrkarte, -n",
        "pron": "",
        "lit": "Hast du schon eine Fahrkarte?"
      }
    }
  },
  {
    "seedId": "de-0210",
    "en": "the bicycle",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Fahrrad, -ä, er",
        "pron": "",
        "lit": "Fährst du mit dem Fahrrad oder mit dem Auto?"
      }
    }
  },
  {
    "seedId": "de-0211",
    "en": "wrong; false",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "falsch",
        "pron": "",
        "lit": "Das ist falsch."
      }
    }
  },
  {
    "seedId": "de-0212",
    "en": "the family",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "die Familie, -n",
        "pron": "",
        "lit": "Meine Familie lebt in Spanien."
      }
    }
  },
  {
    "seedId": "de-0213",
    "en": "the surname; last name",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Familienname",
        "pron": "",
        "lit": "Meine Familiennamen sind García González."
      }
    }
  },
  {
    "seedId": "de-0214",
    "en": "the marital status",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Familienstand",
        "pron": "",
        "lit": "Bei „Familienstand“ musst du „ledig“ ankreuzen."
      }
    }
  },
  {
    "seedId": "de-0215",
    "en": "the color",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "die Farbe, -n",
        "pron": "",
        "lit": "Die Farbe gefällt mir gut."
      }
    }
  },
  {
    "seedId": "de-0216",
    "en": "the fax",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "das Fax, -e",
        "pron": "",
        "lit": "Schicken Sie uns einfach ein Fax!"
      }
    }
  },
  {
    "seedId": "de-0217",
    "en": "the (public) holiday",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Feiertag",
        "pron": "",
        "lit": "z. B. Feierabend, Feiertag Am Montag ist Feiertag."
      }
    }
  },
  {
    "seedId": "de-0218",
    "en": "to celebrate",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "feiern",
        "pron": "",
        "lit": "Wir feiern heute meinen Geburtstag."
      }
    }
  },
  {
    "seedId": "de-0219",
    "en": "to be missing; to be lacking",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "fehlen",
        "pron": "",
        "lit": "Herr Müller ist nicht da, er fehlt schon seit drei Tagen. Was fehlt Ihnen?"
      }
    }
  },
  {
    "seedId": "de-0220",
    "en": "the mistake",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Fehler, –",
        "pron": "",
        "lit": "Diesen Fehler mache ich immer."
      }
    }
  },
  {
    "seedId": "de-0221",
    "en": "to watch TV",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "fernsehen",
        "pron": "",
        "lit": "Wollen wir heute Abend mal fernsehen?"
      }
    }
  },
  {
    "seedId": "de-0222",
    "en": "finished; ready",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "fertig",
        "pron": "",
        "lit": "Bist du fertig? Ist mein Auto schon fertig?"
      }
    }
  },
  {
    "seedId": "de-0223",
    "en": "the fire",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Feuer",
        "pron": "",
        "lit": "Haben Sie Feuer?"
      }
    }
  },
  {
    "seedId": "de-0224",
    "en": "the fever",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "das Fieber",
        "pron": "",
        "lit": "Mein Mann hat noch immer Fieber."
      }
    }
  },
  {
    "seedId": "de-0225",
    "en": "the film; movie",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Film, -e",
        "pron": "",
        "lit": "Ich möchte gern diesen Film sehen."
      }
    }
  },
  {
    "seedId": "de-0226",
    "en": "to find",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "finden",
        "pron": "",
        "lit": "Wir müssen den Schlüssel finden."
      }
    }
  },
  {
    "seedId": "de-0227",
    "en": "the company; firm",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Firma",
        "pron": "",
        "lit": "Er arbeitet jetzt bei einer anderen Firma."
      }
    }
  },
  {
    "seedId": "de-0228",
    "en": "the fish",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Fisch, -e",
        "pron": "",
        "lit": "Ich esse gern Fisch. Fleisch mag ich nicht."
      }
    }
  },
  {
    "seedId": "de-0229",
    "en": "the bottle",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Flasche, -n",
        "pron": "",
        "lit": "Eine Flasche Bier, bitte."
      }
    }
  },
  {
    "seedId": "de-0230",
    "en": "the meat",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Fleisch",
        "pron": "",
        "lit": "Fleisch mag ich nicht."
      }
    }
  },
  {
    "seedId": "de-0231",
    "en": "to fly",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "fliegen",
        "pron": "",
        "lit": "Ich fliege nicht gern. Deshalb fahre ich mit dem Zug."
      }
    }
  },
  {
    "seedId": "de-0232",
    "en": "to depart (by plane)",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "abfliegen",
        "pron": "",
        "lit": "Wann fliegst du ab?"
      }
    }
  },
  {
    "seedId": "de-0233",
    "en": "the departure (flight)",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Abflug",
        "pron": "",
        "lit": "Der Abflug ist um 11.20 Uhr."
      }
    }
  },
  {
    "seedId": "de-0234",
    "en": "the airport",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Flughafen",
        "pron": "",
        "lit": "Kannst du mich zum Flughafen bringen?"
      }
    }
  },
  {
    "seedId": "de-0235",
    "en": "the airplane",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Flugzeug",
        "pron": "",
        "lit": "Das Flugzeug aus Berlin kommt heute später an."
      }
    }
  },
  {
    "seedId": "de-0236",
    "en": "the form (document)",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Formular, -e",
        "pron": "",
        "lit": "Sie müssen dieses Formular ausfüllen."
      }
    }
  },
  {
    "seedId": "de-0237",
    "en": "the photo",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Foto, -s",
        "pron": "",
        "lit": "Darf ich ein Foto machen?"
      }
    }
  },
  {
    "seedId": "de-0238",
    "en": "to ask",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "fragen",
        "pron": "",
        "lit": "Er möchte Sie etwas fragen. Wann kommen Sie?"
      }
    }
  },
  {
    "seedId": "de-0239",
    "en": "the question",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "die Frage, -n",
        "pron": "",
        "lit": "Ich habe eine Frage."
      }
    }
  },
  {
    "seedId": "de-0240",
    "en": "the woman; Mrs.",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "die Frau, -en",
        "pron": "",
        "lit": "Das ist Frau Becker. Guten Tag, Frau Schmitt! Hier arbeiten mehr Frauen als Männer."
      }
    }
  },
  {
    "seedId": "de-0241",
    "en": "free",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "frei",
        "pron": "",
        "lit": "Ist der Platz noch frei?"
      }
    }
  },
  {
    "seedId": "de-0242",
    "en": "the free time; leisure",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Freizeit",
        "pron": "",
        "lit": "In meiner Freizeit spiele ich oft Fußball."
      }
    }
  },
  {
    "seedId": "de-0243",
    "en": "foreign; strange",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "fremd",
        "pron": "",
        "lit": "Das weiß ich nicht; ich bin fremd hier."
      }
    }
  },
  {
    "seedId": "de-0244",
    "en": "to be happy; glad",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "(sich) freuen",
        "pron": "",
        "lit": "Ich freue mich auf den Urlaub."
      }
    }
  },
  {
    "seedId": "de-0245",
    "en": "the friend",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "der Freund, -e",
        "pron": "",
        "lit": "Das ist ein Freund von mir. Das ist meine Freundin."
      }
    }
  },
  {
    "seedId": "de-0246",
    "en": "earlier; formerly",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "früher",
        "pron": "",
        "lit": "Früher waren wir oft zusammen im Kino."
      }
    }
  },
  {
    "seedId": "de-0247",
    "en": "to have breakfast",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "frühstücken",
        "pron": "",
        "lit": "Am Sonntag frühstücke ich gern im Bett."
      }
    }
  },
  {
    "seedId": "de-0248",
    "en": "the breakfast",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Frühstück",
        "pron": "",
        "lit": "Möchtest du ein Ei zum Frühstück?"
      }
    }
  },
  {
    "seedId": "de-0249",
    "en": "the guided tour",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "die Führung",
        "pron": "",
        "lit": "Die Führung durch das Haus beginnt in 3 Minuten."
      }
    }
  },
  {
    "seedId": "de-0250",
    "en": "for",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "für",
        "pron": "",
        "lit": "Das ist für Sie. Das ist der Schlüssel für die Haustür. Das ist das Brot für morgen."
      }
    }
  },
  {
    "seedId": "de-0251",
    "en": "the foot",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Fuß, -ü, e",
        "pron": "",
        "lit": "Der linke Fuß tut mir weh."
      }
    }
  },
  {
    "seedId": "de-0252",
    "en": "football; soccer",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Fußball",
        "pron": "",
        "lit": "Spielt ihr gerne Fußball?"
      }
    }
  },
  {
    "seedId": "de-0253",
    "en": "the garden",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Garten",
        "pron": "",
        "lit": "Wir haben leider keinen Garten."
      }
    }
  },
  {
    "seedId": "de-0254",
    "en": "the guest",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Gast, -ä, e",
        "pron": "",
        "lit": "Am Wochenende haben wir mehrere Gäste."
      }
    }
  },
  {
    "seedId": "de-0255",
    "en": "to give",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "geben",
        "pron": "",
        "lit": "Kannst du mir bitte deinen Kugelschreiber geben? Es gibt keine Karten mehr."
      }
    }
  },
  {
    "seedId": "de-0256",
    "en": "born",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "geboren",
        "pron": "",
        "lit": "Ich bin in Zagreb geboren."
      }
    }
  },
  {
    "seedId": "de-0257",
    "en": "the birth year",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "das Geburtsjahr",
        "pron": "",
        "lit": "Das Geburtsjahr Ihres Sohnes, bitte?"
      }
    }
  },
  {
    "seedId": "de-0258",
    "en": "the birthplace",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Geburtsort",
        "pron": "",
        "lit": "Bitte schreiben Sie Ihren Geburtsort auf das Formular."
      }
    }
  },
  {
    "seedId": "de-0259",
    "en": "the birthday",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "der Geburtstag",
        "pron": "",
        "lit": "Herzlichen Glückwunsch zum Geburtstag!"
      }
    }
  },
  {
    "seedId": "de-0260",
    "en": "to please; to like",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "gefallen",
        "pron": "",
        "lit": "Das gefällt mir."
      }
    }
  },
  {
    "seedId": "de-0261",
    "en": "against; around (time)",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "gegen",
        "pron": "",
        "lit": "Fahr nicht gegen den Baum! Ich bin gegen diese Lösung. Wer spielt gegen wen?"
      }
    }
  },
  {
    "seedId": "de-0262",
    "en": "to go; to walk",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "gehen",
        "pron": "",
        "lit": "Ich weiß nicht, wie das geht. Wie geht‘s? Jetzt muss ich (aber) leider gehen. Ich muss zum Arzt gehen. Das geht nicht!"
      }
    }
  },
  {
    "seedId": "de-0263",
    "en": "to belong to",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "gehören",
        "pron": "",
        "lit": "Wem gehört das?"
      }
    }
  },
  {
    "seedId": "de-0264",
    "en": "the money",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "das Geld",
        "pron": "",
        "lit": "Hast du noch Geld?"
      }
    }
  },
  {
    "seedId": "de-0265",
    "en": "the vegetables",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Gemüse",
        "pron": "",
        "lit": "Gemüse brauchen wir auch noch."
      }
    }
  },
  {
    "seedId": "de-0266",
    "en": "the luggage",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Gepäck",
        "pron": "",
        "lit": "Wollen Sie Ihr Gepäck mitnehmen?"
      }
    }
  },
  {
    "seedId": "de-0267",
    "en": "just; straight",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "gerade",
        "pron": "",
        "lit": "Da kommt er ja gerade."
      }
    }
  },
  {
    "seedId": "de-0268",
    "en": "straight ahead",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "geradeaus",
        "pron": "",
        "lit": "Gehen Sie immer geradeaus!"
      }
    }
  },
  {
    "seedId": "de-0269",
    "en": "gladly; willingly",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "gern(e)",
        "pron": "",
        "lit": "Ich gehe gerne einkaufen."
      }
    }
  },
  {
    "seedId": "de-0270",
    "en": "the shop; business",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Geschäft, -e",
        "pron": "",
        "lit": "Die Geschäfte schließen um 18.30 Uhr."
      }
    }
  },
  {
    "seedId": "de-0271",
    "en": "the gift; present",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Geschenk, -e",
        "pron": "",
        "lit": "Danke für das schöne Geschenk."
      }
    }
  },
  {
    "seedId": "de-0272",
    "en": "the siblings",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Geschwister (pl.)",
        "pron": "",
        "lit": "Ich habe leider keine Geschwister."
      }
    }
  },
  {
    "seedId": "de-0273",
    "en": "the conversation",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Gespräch, -e",
        "pron": "",
        "lit": "Das Gespräch mit Frau Kunz ist um 14 Uhr."
      }
    }
  },
  {
    "seedId": "de-0274",
    "en": "yesterday",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "gestern",
        "pron": "",
        "lit": "Gestern war ich krank."
      }
    }
  },
  {
    "seedId": "de-0275",
    "en": "died",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "gestorben",
        "pron": "",
        "lit": "Meine Frau ist gestern gestorben."
      }
    }
  },
  {
    "seedId": "de-0276",
    "en": "the drink; beverage",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Getränk, -e",
        "pron": "",
        "lit": "Mein Lieblingsgetränk ist Tomatensaft."
      }
    }
  },
  {
    "seedId": "de-0277",
    "en": "the weight",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "das Gewicht",
        "pron": "",
        "lit": "Bei „Gewicht“ schreibst du: 62 Kilo."
      }
    }
  },
  {
    "seedId": "de-0278",
    "en": "to win",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "gewinnen",
        "pron": "",
        "lit": "Wer gewinnt das Spiel?"
      }
    }
  },
  {
    "seedId": "de-0279",
    "en": "the glass",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Glas, -ä, er",
        "pron": "",
        "lit": "Bitte noch ein Glas Wein! Wir brauchen noch drei Gläser."
      }
    }
  },
  {
    "seedId": "de-0280",
    "en": "to believe; to think",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "glauben",
        "pron": "",
        "lit": "Sie können mir glauben, es ist so. Ich glaube, er kommt gleich."
      }
    }
  },
  {
    "seedId": "de-0281",
    "en": "same; right away",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "gleich",
        "pron": "",
        "lit": "Das ist mir gleich. Das ist der gleiche Preis. Ich komme gleich."
      }
    }
  },
  {
    "seedId": "de-0282",
    "en": "the (railway) track; platform",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Gleis, -e",
        "pron": "",
        "lit": "Der ICE nach Berlin hält heute an Gleis 12."
      }
    }
  },
  {
    "seedId": "de-0283",
    "en": "luck; happiness",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Glück",
        "pron": "",
        "lit": "Viel Glück!"
      }
    }
  },
  {
    "seedId": "de-0284",
    "en": "happy",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "glücklich",
        "pron": "",
        "lit": "Meine Kinder sind glücklich verheiratet."
      }
    }
  },
  {
    "seedId": "de-0285",
    "en": "congratulations",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Glückwunsch",
        "pron": "",
        "lit": "Herzlichen Glückwunsch zum Geburtstag."
      }
    }
  },
  {
    "seedId": "de-0286",
    "en": "degree(s) (Celsius)",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "Grad (Celsius)",
        "pron": "",
        "lit": "Heute haben wir dreißig Grad."
      }
    }
  },
  {
    "seedId": "de-0287",
    "en": "to congratulate",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "gratulieren",
        "pron": "",
        "lit": "Ich gratuliere dir!"
      }
    }
  },
  {
    "seedId": "de-0288",
    "en": "to grill; to barbecue",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "grillen",
        "pron": "",
        "lit": "Heute grillen wir im Garten."
      }
    }
  },
  {
    "seedId": "de-0289",
    "en": "big; tall",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "groß",
        "pron": "",
        "lit": "Mein Bruder und ich sind gleich groß. Frankfurt ist eine große Stadt."
      }
    }
  },
  {
    "seedId": "de-0290",
    "en": "the size",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Größe",
        "pron": "",
        "lit": "Haben Sie das auch in Größe 40?"
      }
    }
  },
  {
    "seedId": "de-0291",
    "en": "the grandparents",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Großeltern (pl.)",
        "pron": "",
        "lit": "Meine Großeltern leben in Japan."
      }
    }
  },
  {
    "seedId": "de-0292",
    "en": "the grandmother",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Großmutter",
        "pron": "",
        "lit": "Meine Großmutter heißt Eva."
      }
    }
  },
  {
    "seedId": "de-0293",
    "en": "the grandfather",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Großvater",
        "pron": "",
        "lit": "Mein Großvater ist schon 80."
      }
    }
  },
  {
    "seedId": "de-0294",
    "en": "the group",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Gruppe, -n",
        "pron": "",
        "lit": "Die erste Gruppe beginnt um 16 Uhr."
      }
    }
  },
  {
    "seedId": "de-0295",
    "en": "the greeting",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Gruß, -ü, e",
        "pron": "",
        "lit": "Viele Grüße an Ihre Frau. Mit freundlichen Grüßen"
      }
    }
  },
  {
    "seedId": "de-0296",
    "en": "valid",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "gültig",
        "pron": "",
        "lit": "Der Pass ist nicht mehr gültig."
      }
    }
  },
  {
    "seedId": "de-0297",
    "en": "affordable; favorable",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "günstig",
        "pron": "",
        "lit": "Dort gibt es günstige Angebote."
      }
    }
  },
  {
    "seedId": "de-0298",
    "en": "good",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "gut",
        "pron": "",
        "lit": "Das finde ich gut. Ich komme um 13 Uhr. – Gut! Guten Morgen! Ein gutes neues Jahr! Guten Appetit!"
      }
    }
  },
  {
    "seedId": "de-0299",
    "en": "the hair",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Haar, -e",
        "pron": "",
        "lit": "Sie hat lange Haare."
      }
    }
  },
  {
    "seedId": "de-0300",
    "en": "to have",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "haben",
        "pron": "",
        "lit": "Ich habe ein neues Auto."
      }
    }
  },
  {
    "seedId": "de-0301",
    "en": "the chicken",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "das Hähnchen, -",
        "pron": "",
        "lit": "Ein Hähnchen mit Pommes bitte!"
      }
    }
  },
  {
    "seedId": "de-0302",
    "en": "half board (hotel meal plan)",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "die Halbpension",
        "pron": "",
        "lit": "Möchten Sie Vollpension oder Halbpension?"
      }
    }
  },
  {
    "seedId": "de-0303",
    "en": "the hall",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "die Halle",
        "pron": "",
        "lit": "Wir treffen uns in Halle B"
      }
    }
  },
  {
    "seedId": "de-0304",
    "en": "hello",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "hallo",
        "pron": "",
        "lit": "Hallo Inge! Wie geht’s?"
      }
    }
  },
  {
    "seedId": "de-0305",
    "en": "to hold; to stop",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "halten",
        "pron": "",
        "lit": "Dieser Zug hält nicht in Rüdesheim."
      }
    }
  },
  {
    "seedId": "de-0306",
    "en": "the (bus/tram) stop",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Haltestelle",
        "pron": "",
        "lit": "An der nächsten Haltestelle müssen Sie aussteigen."
      }
    }
  },
  {
    "seedId": "de-0307",
    "en": "the hand",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Hand, -ä, e",
        "pron": "",
        "lit": "Er gibt mir die Hand."
      }
    }
  },
  {
    "seedId": "de-0308",
    "en": "the mobile phone",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "das Handy, -s",
        "pron": "",
        "lit": "In der Schule bitte die Handys ausmachen!"
      }
    }
  },
  {
    "seedId": "de-0309",
    "en": "the house",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "das Haus, -ä, er",
        "pron": "",
        "lit": "In welchem Haus wohnst du? Ich gehe jetzt nach Hause. Paul ist nicht zu Hause."
      }
    }
  },
  {
    "seedId": "de-0310",
    "en": "the homework",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Hausaufgabe,-n",
        "pron": "",
        "lit": "Kannst du mir bei den Hausaufgaben helfen?"
      }
    }
  },
  {
    "seedId": "de-0311",
    "en": "the housewife",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "die Hausfrau, -en/",
        "pron": "",
        "lit": "Die Hausfrau/der Hausmann wäscht, kocht und kauft ein."
      }
    }
  },
  {
    "seedId": "de-0312",
    "en": "the house-husband",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Hausmann",
        "pron": "",
        "lit": "Die Hausfrau/der Hausmann wäscht, kocht und kauft ein."
      }
    }
  },
  {
    "seedId": "de-0313",
    "en": "the home(land)",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "die Heimat",
        "pron": "",
        "lit": "Ich komme aus der Schweiz. Das ist meine Heimat."
      }
    }
  },
  {
    "seedId": "de-0314",
    "en": "to marry",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "heiraten",
        "pron": "",
        "lit": "Meine Schwester heiratet einen Japaner."
      }
    }
  },
  {
    "seedId": "de-0315",
    "en": "to be called; named",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "heißen",
        "pron": "",
        "lit": "Ich heiße Charlotte Meier. Wie heißt das auf Deutsch?"
      }
    }
  },
  {
    "seedId": "de-0316",
    "en": "to help",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "helfen",
        "pron": "",
        "lit": "Können Sie mir helfen, bitte?"
      }
    }
  },
  {
    "seedId": "de-0317",
    "en": "bright; light",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "hell",
        "pron": "",
        "lit": "Im Sommer ist es bis 21 Uhr hell."
      }
    }
  },
  {
    "seedId": "de-0318",
    "en": "the stove",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Herd",
        "pron": "",
        "lit": "In der neuen Küche fehlt noch der Herd."
      }
    }
  },
  {
    "seedId": "de-0319",
    "en": "the gentleman; Mr.",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "der Herr, -en",
        "pron": "",
        "lit": "Guten Tag, Herr Sommer!"
      }
    }
  },
  {
    "seedId": "de-0320",
    "en": "warm; cordial",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "herzlich",
        "pron": "",
        "lit": "Herzlichen Glückwunsch!"
      }
    }
  },
  {
    "seedId": "de-0321",
    "en": "today",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "heute",
        "pron": "",
        "lit": "Heute ist ein schöner Tag."
      }
    }
  },
  {
    "seedId": "de-0322",
    "en": "here",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "hier",
        "pron": "",
        "lit": "Hier ist 06131-553221, Pamela Linke. Hier wohne ich."
      }
    }
  },
  {
    "seedId": "de-0323",
    "en": "the help",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Hilfe",
        "pron": "",
        "lit": "Hilfe! Bitte helfen Sie mir! Brauchen Sie meine Hilfe?"
      }
    }
  },
  {
    "seedId": "de-0324",
    "en": "at the back; behind",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "hinten",
        "pron": "",
        "lit": "Die Tür zum Aussteigen ist hinten."
      }
    }
  },
  {
    "seedId": "de-0325",
    "en": "the hobby",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Hobby, -s",
        "pron": "",
        "lit": "Meine Hobbys sind Wandern und Schwimmen."
      }
    }
  },
  {
    "seedId": "de-0326",
    "en": "high; tall",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "hoch",
        "pron": "",
        "lit": "Der Mount Everest ist 8.880 Meter hoch."
      }
    }
  },
  {
    "seedId": "de-0327",
    "en": "the wedding",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Hochzeit",
        "pron": "",
        "lit": "Zur dieser Hochzeit kommen mehr als fünfzig Gäste."
      }
    }
  },
  {
    "seedId": "de-0328",
    "en": "to fetch; to get",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "holen",
        "pron": "",
        "lit": "Ich hole zwei Flaschen Wasser aus der Küche."
      }
    }
  },
  {
    "seedId": "de-0329",
    "en": "to hear; to listen",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "hören",
        "pron": "",
        "lit": "Hör mal! Was ist das? Ich habe das Lied schon mal gehört."
      }
    }
  },
  {
    "seedId": "de-0330",
    "en": "the hotel",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "das Hotel, -s",
        "pron": "",
        "lit": "Im Urlaub sind wir in einem Hotel am Meer."
      }
    }
  },
  {
    "seedId": "de-0331",
    "en": "the dog",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Hund, -e",
        "pron": "",
        "lit": "Der Hund ist noch jung."
      }
    }
  },
  {
    "seedId": "de-0332",
    "en": "the hunger",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Hunger",
        "pron": "",
        "lit": "Ich habe Hunger! Wann ist das Essen fertig?"
      }
    }
  },
  {
    "seedId": "de-0333",
    "en": "I",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "ich",
        "pron": "",
        "lit": "Ich heiße Veronika."
      }
    }
  },
  {
    "seedId": "de-0334",
    "en": "her; him",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "ihr/ihm/ihn",
        "pron": "",
        "lit": "Gib ihr/ihm bitte das Buch. Ruf ihn bitte an."
      }
    }
  },
  {
    "seedId": "de-0335",
    "en": "always",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "immer",
        "pron": "",
        "lit": "Frau Bast kommt immer zu spät."
      }
    }
  },
  {
    "seedId": "de-0336",
    "en": "in",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "in",
        "pron": "",
        "lit": "Ich wohne in Wiesbaden. Der Zug kommt in fünf Minuten. Frau Rausch arbeitet in einem Geschäft. Komm, wir gehen ins Kino."
      }
    }
  },
  {
    "seedId": "de-0337",
    "en": "the information",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Information, -en",
        "pron": "",
        "lit": "Wenn Sie Fragen haben, gehen Sie zur Information. Wir haben hier wichtige Informationen für Sie."
      }
    }
  },
  {
    "seedId": "de-0338",
    "en": "international",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "international",
        "pron": "",
        "lit": "Unser Deutschkurs ist international: Silvana kommt aus Italien, Conchi aus Spanien, Yin aus China ..."
      }
    }
  },
  {
    "seedId": "de-0339",
    "en": "the internet",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "das Internet",
        "pron": "",
        "lit": "Das findest du im Internet."
      }
    }
  },
  {
    "seedId": "de-0340",
    "en": "yes",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "ja",
        "pron": "",
        "lit": "Sind Sie Herr Watanabe? – Ja."
      }
    }
  },
  {
    "seedId": "de-0341",
    "en": "the jacket",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Jacke, -n",
        "pron": "",
        "lit": "Zieh dir eine Jacke an. Es ist kalt."
      }
    }
  },
  {
    "seedId": "de-0342",
    "en": "each; every",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "jeder",
        "pron": "",
        "lit": "Blumen kannst du in jedem Bahnhof kaufen."
      }
    }
  },
  {
    "seedId": "de-0343",
    "en": "now",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "jetzt",
        "pron": "",
        "lit": "Jetzt machen wir eine Pause."
      }
    }
  },
  {
    "seedId": "de-0344",
    "en": "the job",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Job, -s",
        "pron": "",
        "lit": "Jenny hat einen neuen Job bei der Post."
      }
    }
  },
  {
    "seedId": "de-0345",
    "en": "the young person; teenager",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Jugendliche, -n",
        "pron": "",
        "lit": "Viele Jugendliche kaufen gern ein."
      }
    }
  },
  {
    "seedId": "de-0346",
    "en": "young",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "jung",
        "pron": "",
        "lit": "Claudia ist 21. – Was? Noch so jung?"
      }
    }
  },
  {
    "seedId": "de-0347",
    "en": "the boy",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Junge, -n",
        "pron": "",
        "lit": "Ich habe zwei Kinder. Einen Jungen und ein Mädchen."
      }
    }
  },
  {
    "seedId": "de-0348",
    "en": "the coffee",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "der Kaffee",
        "pron": "",
        "lit": "Zum Frühstück trinke ich immer Kaffee."
      }
    }
  },
  {
    "seedId": "de-0349",
    "en": "broken",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "kaputt",
        "pron": "",
        "lit": "Das Glas war teuer. Es geht sehr leicht kaputt."
      }
    }
  },
  {
    "seedId": "de-0350",
    "en": "the card; ticket; map",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "die Karte, -n",
        "pron": "",
        "lit": "Ich schreibe meinen Bekannten eine Karte aus dem Urlaub. Wollen wir Karten spielen? Ich möchte auch etwas essen. Bringen Sie mir die Karte, bitte."
      }
    }
  },
  {
    "seedId": "de-0351",
    "en": "(credit) card",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "(Kredit)-Karte, -n",
        "pron": "",
        "lit": "Kann ich auch mit Karte (be-) zahlen?"
      }
    }
  },
  {
    "seedId": "de-0352",
    "en": "the potato",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Kartoffel, -n",
        "pron": "",
        "lit": "Für Pommes frites braucht man Kartoffeln."
      }
    }
  },
  {
    "seedId": "de-0353",
    "en": "the cash register; checkout",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Kasse",
        "pron": "",
        "lit": "Zahlen Sie bitte an der Kasse."
      }
    }
  },
  {
    "seedId": "de-0354",
    "en": "to buy",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "kaufen",
        "pron": "",
        "lit": "Tim kauft sich ein neues Auto."
      }
    }
  },
  {
    "seedId": "de-0355",
    "en": "no; not any",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "kein",
        "pron": "",
        "lit": "Es gibt keine Eintrittskarten mehr."
      }
    }
  },
  {
    "seedId": "de-0356",
    "en": "to know (a person/thing)",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "kennen",
        "pron": "",
        "lit": "Kennen Sie diese Frau? – Nein, leider nicht."
      }
    }
  },
  {
    "seedId": "de-0357",
    "en": "to get to know; to meet",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "kennenlernen",
        "pron": "",
        "lit": "Wir sind neu hier. Wir möchten Sie kennenlernen."
      }
    }
  },
  {
    "seedId": "de-0358",
    "en": "the child",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "das Kind, -er",
        "pron": "",
        "lit": "Wie viele Kinder haben Sie?"
      }
    }
  },
  {
    "seedId": "de-0359",
    "en": "the kindergarten",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Kindergarten",
        "pron": "",
        "lit": "Die kleine Laura geht schon in den Kindergarten."
      }
    }
  },
  {
    "seedId": "de-0360",
    "en": "the cinema",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Kino, -s",
        "pron": "",
        "lit": "Wir sehen heute Abend im Kino einen schönen Film."
      }
    }
  },
  {
    "seedId": "de-0361",
    "en": "the kiosk",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Kiosk",
        "pron": "",
        "lit": "Am Kiosk bekommen Sie Getränke, Zigaretten und Zeitungen."
      }
    }
  },
  {
    "seedId": "de-0362",
    "en": "clear; of course",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "klar",
        "pron": "",
        "lit": "Kommst du mit? – Klar!"
      }
    }
  },
  {
    "seedId": "de-0363",
    "en": "the class",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Klasse",
        "pron": "",
        "lit": "In unserer Klasse sind fünfundzwanzig Schüler. Im Zug fahre ich immer 2. Klasse."
      }
    }
  },
  {
    "seedId": "de-0364",
    "en": "the clothing",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Kleidung",
        "pron": "",
        "lit": "Wo finde ich Kleidung? – Jacken im ersten, Jeans im zweiten Stock."
      }
    }
  },
  {
    "seedId": "de-0365",
    "en": "small",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "klein",
        "pron": "",
        "lit": "Eltville ist eine kleine Stadt am Rhein."
      }
    }
  },
  {
    "seedId": "de-0366",
    "en": "to cook",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "kochen",
        "pron": "",
        "lit": "Herr Georgi kann gut kochen."
      }
    }
  },
  {
    "seedId": "de-0367",
    "en": "the suitcase",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Koffer, –",
        "pron": "",
        "lit": "Ist das Ihr Koffer?"
      }
    }
  },
  {
    "seedId": "de-0368",
    "en": "the colleague",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Kollege, -n",
        "pron": "",
        "lit": "Wie heißt die neue Kollegin?"
      }
    }
  },
  {
    "seedId": "de-0369",
    "en": "to come",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "kommen",
        "pron": "",
        "lit": "Woher kommen Sie? – Aus Frankreich. Kommst du mit ins Schwimmbad?"
      }
    }
  },
  {
    "seedId": "de-0370",
    "en": "to be able to; can",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "können",
        "pron": "",
        "lit": "Ich kann Deutsch und Russisch. Können Sie mir helfen?"
      }
    }
  },
  {
    "seedId": "de-0371",
    "en": "the (bank) account",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Konto",
        "pron": "",
        "lit": "Das Geld überweisen wir am ersten März auf Ihr Konto."
      }
    }
  },
  {
    "seedId": "de-0372",
    "en": "the head",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Kopf",
        "pron": "",
        "lit": "Mein Kopf tut weh!"
      }
    }
  },
  {
    "seedId": "de-0373",
    "en": "to cost",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "kosten",
        "pron": "",
        "lit": "Wie viel kostet das? – 10 Euro."
      }
    }
  },
  {
    "seedId": "de-0374",
    "en": "sick; ill",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "krank",
        "pron": "",
        "lit": "Ich kann heute nicht zur Arbeit kommen, ich bin krank und liege im Bett."
      }
    }
  },
  {
    "seedId": "de-0375",
    "en": "to get; to receive (informal)",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "kriegen",
        "pron": "",
        "lit": "Ich kriege 15 Euro in der Stunde für meine Arbeit."
      }
    }
  },
  {
    "seedId": "de-0376",
    "en": "the kitchen",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Küche",
        "pron": "",
        "lit": "Der neue Herd kommt in die Küche."
      }
    }
  },
  {
    "seedId": "de-0377",
    "en": "the cake",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Kuchen",
        "pron": "",
        "lit": "Ich nehme ein Stück Kuchen."
      }
    }
  },
  {
    "seedId": "de-0378",
    "en": "the ballpoint pen",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Kugelschreiber",
        "pron": "",
        "lit": "Hast du einen Kugelschreiber für mich?"
      }
    }
  },
  {
    "seedId": "de-0379",
    "en": "the refrigerator",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Kühlschrank",
        "pron": "",
        "lit": "Haben wir noch Milch? – Ja, im Kühlschrank."
      }
    }
  },
  {
    "seedId": "de-0380",
    "en": "cultural",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "kulturell",
        "pron": "",
        "lit": "Ich bin kulturell interessiert. Ich gehe oft ins Museum."
      }
    }
  },
  {
    "seedId": "de-0381",
    "en": "to take care of; to look after",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "sich kümmern",
        "pron": "",
        "lit": "Jede Mutter kümmert sich um ihre kleinen Kinder."
      }
    }
  },
  {
    "seedId": "de-0382",
    "en": "the customer",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Kunde, -n",
        "pron": "",
        "lit": "Einen Moment, bitte. Ich habe eine Kundin."
      }
    }
  },
  {
    "seedId": "de-0383",
    "en": "the course",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Kurs, -e",
        "pron": "",
        "lit": "Der Deutschkurs geht bis zum Sommer."
      }
    }
  },
  {
    "seedId": "de-0384",
    "en": "short",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "kurz",
        "pron": "",
        "lit": "Ricardo hat kurzes Haar."
      }
    }
  },
  {
    "seedId": "de-0385",
    "en": "to laugh",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "lachen",
        "pron": "",
        "lit": "Die Kinder lachen viel."
      }
    }
  },
  {
    "seedId": "de-0386",
    "en": "the shop; store",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Laden, -ä",
        "pron": "",
        "lit": "Im Buchladen können Sie Bücher kaufen."
      }
    }
  },
  {
    "seedId": "de-0387",
    "en": "the country",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "das Land, -ä, er",
        "pron": "",
        "lit": "Italien ist ein schönes Land."
      }
    }
  },
  {
    "seedId": "de-0388",
    "en": "long",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "lang",
        "pron": "",
        "lit": "Die Jeans ist zu lang."
      }
    }
  },
  {
    "seedId": "de-0389",
    "en": "for a long time",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "lange",
        "pron": "",
        "lit": "Wie lange fährt der Zug von Hamburg nach Berlin?"
      }
    }
  },
  {
    "seedId": "de-0390",
    "en": "slowly",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "langsam",
        "pron": "",
        "lit": "Könnten Sie bitte etwas langsamer sprechen?"
      }
    }
  },
  {
    "seedId": "de-0391",
    "en": "to run; to walk",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "laufen",
        "pron": "",
        "lit": "Ich möchte nicht Auto fahren, ich möchte laufen."
      }
    }
  },
  {
    "seedId": "de-0392",
    "en": "loud",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "laut",
        "pron": "",
        "lit": "Nicht so laut! Das Baby schläft."
      }
    }
  },
  {
    "seedId": "de-0393",
    "en": "to live",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "leben",
        "pron": "",
        "lit": "Sie lebt bei ihrer Schwester. Ihre Eltern leben nicht mehr."
      }
    }
  },
  {
    "seedId": "de-0394",
    "en": "the life",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Leben",
        "pron": "",
        "lit": "Das Leben in diesem Land ist teuer."
      }
    }
  },
  {
    "seedId": "de-0395",
    "en": "the groceries; food",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Lebensmittel (pl.)",
        "pron": "",
        "lit": "Lebensmittel bekommen Sie im Supermarkt."
      }
    }
  },
  {
    "seedId": "de-0396",
    "en": "single; unmarried",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "ledig",
        "pron": "",
        "lit": "Sind Sie verheiratet? – Nein. Ledig."
      }
    }
  },
  {
    "seedId": "de-0397",
    "en": "to lay; to put down",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "legen",
        "pron": "",
        "lit": "Legen Sie das Buch auf den Tisch."
      }
    }
  },
  {
    "seedId": "de-0398",
    "en": "the teacher",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "der Lehrer, –",
        "pron": "",
        "lit": "Unsere Deutschlehrerin heißt Frau Müller."
      }
    }
  },
  {
    "seedId": "de-0399",
    "en": "easy; light",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "leicht",
        "pron": "",
        "lit": "Der Koffer ist leicht. Deutsch ist nicht leicht."
      }
    }
  },
  {
    "seedId": "de-0400",
    "en": "unfortunately",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "leider",
        "pron": "",
        "lit": "Leider kann ich nicht kommen. Ich muss zum Arzt."
      }
    }
  },
  {
    "seedId": "de-0401",
    "en": "quiet; soft",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "leise",
        "pron": "",
        "lit": "Seid leise. Die anderen schlafen schon."
      }
    }
  },
  {
    "seedId": "de-0402",
    "en": "to learn",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "lernen",
        "pron": "",
        "lit": "Wie lange lernen Sie schon Deutsch?"
      }
    }
  },
  {
    "seedId": "de-0403",
    "en": "to read",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "lesen",
        "pron": "",
        "lit": "Ich lese ein Buch von García Márquez."
      }
    }
  },
  {
    "seedId": "de-0404",
    "en": "last",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "letzte",
        "pron": "",
        "lit": "Morgen ist der letzte Kurstag."
      }
    }
  },
  {
    "seedId": "de-0405",
    "en": "the people",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "die Leute (pl.)",
        "pron": "",
        "lit": "In der Disko sind viele Leute."
      }
    }
  },
  {
    "seedId": "de-0406",
    "en": "the light",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Licht",
        "pron": "",
        "lit": "Wo macht man hier das Licht an?"
      }
    }
  },
  {
    "seedId": "de-0407",
    "en": "dear; nice",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "lieb",
        "pron": "",
        "lit": "Liebe Susanne, lieber Hans,"
      }
    }
  },
  {
    "seedId": "de-0408",
    "en": "to love",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "lieben",
        "pron": "",
        "lit": "Ich liebe dich!"
      }
    }
  },
  {
    "seedId": "de-0409",
    "en": "rather; preferably",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "lieber",
        "pron": "",
        "lit": "Sie fährt lieber mit der Bahn."
      }
    }
  },
  {
    "seedId": "de-0410",
    "en": "(the) favorite movie",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Lieblingsfilm",
        "pron": "",
        "lit": "Mein Lieblingsfilm ist „Schwarze Augen“."
      }
    }
  },
  {
    "seedId": "de-0411",
    "en": "the song",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Lied, -er",
        "pron": "",
        "lit": "Welches ist dein Lieblingslied?"
      }
    }
  },
  {
    "seedId": "de-0412",
    "en": "to lie; to be located",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "liegen",
        "pron": "",
        "lit": "Um neun Uhr liegt Judith noch im Bett. Frankfurt liegt am Main."
      }
    }
  },
  {
    "seedId": "de-0413",
    "en": "left",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "links",
        "pron": "",
        "lit": "Gehen Sie die nächste Straße links."
      }
    }
  },
  {
    "seedId": "de-0414",
    "en": "the truck",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Lkw, -s",
        "pron": "",
        "lit": "Dieser Lastkraftwagen ist sehr groß."
      }
    }
  },
  {
    "seedId": "de-0415",
    "en": "the restaurant; pub",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "das Lokal",
        "pron": "",
        "lit": "In unserer Straße gibt es ein neues Lokal."
      }
    }
  },
  {
    "seedId": "de-0416",
    "en": "the solution",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Lösung, -en",
        "pron": "",
        "lit": "Die Lösung ist ganz einfach."
      }
    }
  },
  {
    "seedId": "de-0417",
    "en": "funny",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "lustig",
        "pron": "",
        "lit": "Frau Mertens ist lustig. Sie lacht immer."
      }
    }
  },
  {
    "seedId": "de-0418",
    "en": "to do; to make",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "machen",
        "pron": "",
        "lit": "Was machst du heute Abend? Ich muss jetzt das Essen machen. Das macht 5 Euro 95. Das macht nichts."
      }
    }
  },
  {
    "seedId": "de-0419",
    "en": "the girl",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Mädchen, –",
        "pron": "",
        "lit": "Familie Kurz bekommt ein Baby. – Junge oder Mädchen?"
      }
    }
  },
  {
    "seedId": "de-0420",
    "en": "one; you (impersonal)",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "man",
        "pron": "",
        "lit": "Hier darf man nicht rauchen."
      }
    }
  },
  {
    "seedId": "de-0421",
    "en": "the man",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "der Mann, -ä, er",
        "pron": "",
        "lit": "Mein Mann arbeitet bei der Polizei."
      }
    }
  },
  {
    "seedId": "de-0422",
    "en": "male",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "männlich",
        "pron": "",
        "lit": "Kreuzen Sie bitte an: „weiblich“ oder „männlich“."
      }
    }
  },
  {
    "seedId": "de-0423",
    "en": "the machine",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Maschine, -n",
        "pron": "",
        "lit": "Die Waschmaschine ist günstig."
      }
    }
  },
  {
    "seedId": "de-0424",
    "en": "the sea",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Meer",
        "pron": "",
        "lit": "Wir machen Urlaub am Meer."
      }
    }
  },
  {
    "seedId": "de-0425",
    "en": "more",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "mehr",
        "pron": "",
        "lit": "Dieses Auto kostet 1.000 Euro mehr als das andere."
      }
    }
  },
  {
    "seedId": "de-0426",
    "en": "my",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "mein",
        "pron": "",
        "lit": "Mein Vater ist Arzt."
      }
    }
  },
  {
    "seedId": "de-0427",
    "en": "most (of them/people)",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die meisten",
        "pron": "",
        "lit": "Die meisten Norddeutschen sind sehr groß."
      }
    }
  },
  {
    "seedId": "de-0428",
    "en": "the person; human",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Mensch, -en",
        "pron": "",
        "lit": "Die Menschen sind hier anders als bei uns."
      }
    }
  },
  {
    "seedId": "de-0429",
    "en": "to rent",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "mieten",
        "pron": "",
        "lit": "Ich möchte ein Auto mieten."
      }
    }
  },
  {
    "seedId": "de-0430",
    "en": "the rent",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Miete",
        "pron": "",
        "lit": "Die Miete für diese Wohnung ist 600 Euro."
      }
    }
  },
  {
    "seedId": "de-0431",
    "en": "the milk",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Milch",
        "pron": "",
        "lit": "Die Milch steht im Kühlschrank."
      }
    }
  },
  {
    "seedId": "de-0432",
    "en": "with",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "mit",
        "pron": "",
        "lit": "Trinken Sie den Kaffee mit Milch?"
      }
    }
  },
  {
    "seedId": "de-0433",
    "en": "to bring along",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "mitbringen",
        "pron": "",
        "lit": "Ich gehe einkaufen. Soll ich dir was mitbringen?"
      }
    }
  },
  {
    "seedId": "de-0434",
    "en": "to come along",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "mitkommen",
        "pron": "",
        "lit": "Ich gehe ins Kino. Kommst du mit?"
      }
    }
  },
  {
    "seedId": "de-0435",
    "en": "to take part; to join in",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "mitmachen",
        "pron": "",
        "lit": "Warum macht ihr nicht mit?"
      }
    }
  },
  {
    "seedId": "de-0436",
    "en": "to take along",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "mitnehmen",
        "pron": "",
        "lit": "Nehmen wir meine Schwester ins Kino mit?"
      }
    }
  },
  {
    "seedId": "de-0437",
    "en": "the middle",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Mitte",
        "pron": "",
        "lit": "Der Lehrer steht in der Mitte des Klassenzimmers."
      }
    }
  },
  {
    "seedId": "de-0438",
    "en": "the furniture",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "die Möbel (pl.)",
        "pron": "",
        "lit": "Sind die Möbel neu?"
      }
    }
  },
  {
    "seedId": "de-0439",
    "en": "would like",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "möchten",
        "pron": "",
        "lit": "Was möchten Sie trinken?"
      }
    }
  },
  {
    "seedId": "de-0440",
    "en": "to like",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "mögen",
        "pron": "",
        "lit": "Magst du Kaffee oder Tee?"
      }
    }
  },
  {
    "seedId": "de-0441",
    "en": "possible",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "möglich",
        "pron": "",
        "lit": "Mit dieser Fahrkarte ist die Fahrt ab 9 Uhr möglich."
      }
    }
  },
  {
    "seedId": "de-0442",
    "en": "the moment",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "der Moment",
        "pron": "",
        "lit": "Moment mal bitte! Einen Moment bitte."
      }
    }
  },
  {
    "seedId": "de-0443",
    "en": "tomorrow",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "morgen",
        "pron": "",
        "lit": "Morgen beginnt die Schule um 10 Uhr."
      }
    }
  },
  {
    "seedId": "de-0444",
    "en": "tired",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "müde",
        "pron": "",
        "lit": "Ich bin müde. Ich gehe schlafen."
      }
    }
  },
  {
    "seedId": "de-0445",
    "en": "the mouth",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Mund",
        "pron": "",
        "lit": "Öffnen Sie den Mund."
      }
    }
  },
  {
    "seedId": "de-0446",
    "en": "must; to have to",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "müssen",
        "pron": "",
        "lit": "Ich muss jeden Tag von 8 Uhr bis 18 Uhr arbeiten."
      }
    }
  },
  {
    "seedId": "de-0447",
    "en": "the mother",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "die Mutter, -ü",
        "pron": "",
        "lit": "Frau Berghäuser ist die Mutter von Michaela."
      }
    }
  },
  {
    "seedId": "de-0448",
    "en": "after; to (a place)",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "nach",
        "pron": "",
        "lit": "Ich gehe jetzt nach Hause. Ich fliege nach München. Es ist schon 5 nach 12."
      }
    }
  },
  {
    "seedId": "de-0449",
    "en": "next",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "nächste",
        "pron": "",
        "lit": "Sehen wir uns nächste Woche?"
      }
    }
  },
  {
    "seedId": "de-0450",
    "en": "the name",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "der Name, -n",
        "pron": "",
        "lit": "Mein Name ist Thomas Schmidt. Mein Vorname ist Thomas; Schmidt ist der Familienname."
      }
    }
  },
  {
    "seedId": "de-0451",
    "en": "to take",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "nehmen",
        "pron": "",
        "lit": "Heute gibt es Hähnchen. Das nehme ich. Ich nehme den Bus."
      }
    }
  },
  {
    "seedId": "de-0452",
    "en": "no",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "nein",
        "pron": "",
        "lit": "Fährst du auch nach München? – Nein, ich habe keine Zeit."
      }
    }
  },
  {
    "seedId": "de-0453",
    "en": "new",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "neu",
        "pron": "",
        "lit": "Ich bin der neue Kollege. Wir haben eine neue Wohnung."
      }
    }
  },
  {
    "seedId": "de-0454",
    "en": "not",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "nicht",
        "pron": "",
        "lit": "Das stimmt nicht. Das ist doch schön, nicht?"
      }
    }
  },
  {
    "seedId": "de-0455",
    "en": "nothing",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "nichts",
        "pron": "",
        "lit": "Das macht nichts. Hier kaufe ich nichts. Der Laden gefällt mir nicht."
      }
    }
  },
  {
    "seedId": "de-0456",
    "en": "never",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "nie",
        "pron": "",
        "lit": "Er kommt nie pünktlich."
      }
    }
  },
  {
    "seedId": "de-0457",
    "en": "still; yet",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "noch",
        "pron": "",
        "lit": "Vielleicht kommt er noch. Wir warten noch fünf Minuten. Ich habe noch 20 Euro."
      }
    }
  },
  {
    "seedId": "de-0458",
    "en": "normal",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "normal",
        "pron": "",
        "lit": "75 kg. Sein Gewicht ist normal."
      }
    }
  },
  {
    "seedId": "de-0459",
    "en": "the number",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "die Nummer, -n",
        "pron": "",
        "lit": "Sie haben Zimmer Nummer zwölf. Welche Hausnummer haben Sie? Können Sie mir Ihre Nummer geben?"
      }
    }
  },
  {
    "seedId": "de-0460",
    "en": "only",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "nur",
        "pron": "",
        "lit": "Ich möchte nur ein Glas Wasser."
      }
    }
  },
  {
    "seedId": "de-0461",
    "en": "above; upstairs",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "oben",
        "pron": "",
        "lit": "Ich wohne oben."
      }
    }
  },
  {
    "seedId": "de-0462",
    "en": "the fruit",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Obst",
        "pron": "",
        "lit": "Im Sommer ist das Obst billig."
      }
    }
  },
  {
    "seedId": "de-0463",
    "en": "or",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "oder",
        "pron": "",
        "lit": "Wann können Sie kommen – heute oder morgen?"
      }
    }
  },
  {
    "seedId": "de-0464",
    "en": "to open",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "öffnen",
        "pron": "",
        "lit": "Ich öffne die Tür."
      }
    }
  },
  {
    "seedId": "de-0465",
    "en": "open(ed)",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "geöffnet",
        "pron": "",
        "lit": "Der Laden ist samstags bis 16.00 Uhr geöffnet."
      }
    }
  },
  {
    "seedId": "de-0466",
    "en": "often",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "oft",
        "pron": "",
        "lit": "Petra treffe ich oft."
      }
    }
  },
  {
    "seedId": "de-0467",
    "en": "without",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "ohne",
        "pron": "",
        "lit": "Ohne Geld kann er nichts kaufen."
      }
    }
  },
  {
    "seedId": "de-0468",
    "en": "the oil",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "das Öl",
        "pron": "",
        "lit": "Den Salat machen wir ohne Öl."
      }
    }
  },
  {
    "seedId": "de-0469",
    "en": "the grandma",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Oma, -s",
        "pron": "",
        "lit": "Meine Oma ist schon tot."
      }
    }
  },
  {
    "seedId": "de-0470",
    "en": "the grandpa",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Opa, -s",
        "pron": "",
        "lit": "Mein Opa heißt Hans."
      }
    }
  },
  {
    "seedId": "de-0471",
    "en": "order",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "die Ordnung",
        "pron": "",
        "lit": "Das ist in Ordnung."
      }
    }
  },
  {
    "seedId": "de-0472",
    "en": "the place; location",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Ort, -e",
        "pron": "",
        "lit": "Der Ort liegt am Meer."
      }
    }
  },
  {
    "seedId": "de-0473",
    "en": "the paper",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Papier",
        "pron": "",
        "lit": "Hier sind Papier und Bleistift."
      }
    }
  },
  {
    "seedId": "de-0474",
    "en": "the papers; documents",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Papiere (pl.)",
        "pron": "",
        "lit": "Haben Sie Ihre Papiere dabei?"
      }
    }
  },
  {
    "seedId": "de-0475",
    "en": "the partner (male)",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Partner, -/",
        "pron": "",
        "lit": "Sie ist meine Partnerin."
      }
    }
  },
  {
    "seedId": "de-0476",
    "en": "the partner (female)",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Partnerin, -nen",
        "pron": "",
        "lit": "Sie ist meine Partnerin."
      }
    }
  },
  {
    "seedId": "de-0477",
    "en": "the party",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Party",
        "pron": "",
        "lit": "Heute Abend machen wir eine Party."
      }
    }
  },
  {
    "seedId": "de-0478",
    "en": "the passport",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Pass, -ä, e",
        "pron": "",
        "lit": "Im Hotel brauchst du deinen Pass."
      }
    }
  },
  {
    "seedId": "de-0479",
    "en": "the break; pause",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Pause, -n",
        "pron": "",
        "lit": "Von 12.00 bis 12.30 Uhr haben wir Mittagspause."
      }
    }
  },
  {
    "seedId": "de-0480",
    "en": "the plan",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Plan, -ä, e",
        "pron": "",
        "lit": "Ich kaufe mir einen Stadtplan."
      }
    }
  },
  {
    "seedId": "de-0481",
    "en": "the place; seat; square",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Platz, -ä, e",
        "pron": "",
        "lit": "Tut mir leid, der Platz ist besetzt. Bitte nehmen Sie Platz! Ich wohne Messeplatz 5."
      }
    }
  },
  {
    "seedId": "de-0482",
    "en": "the police",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Polizei",
        "pron": "",
        "lit": "Holen Sie die Polizei!"
      }
    }
  },
  {
    "seedId": "de-0483",
    "en": "the French fries",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "die Pommes frites (pl.)",
        "pron": "",
        "lit": "Die Kinder essen Hähnchen mit Pommes frites."
      }
    }
  },
  {
    "seedId": "de-0484",
    "en": "the post office; mail",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Post",
        "pron": "",
        "lit": "Wo ist die Post, bitte? Ist Post da?"
      }
    }
  },
  {
    "seedId": "de-0485",
    "en": "the postal code; zip code",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "die Postleitzahl",
        "pron": "",
        "lit": "Wie ist Ihre Postleitzahl?"
      }
    }
  },
  {
    "seedId": "de-0486",
    "en": "the internship",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "das Praktikum",
        "pron": "",
        "lit": "Ich mache ein Praktikum bei Siemens."
      }
    }
  },
  {
    "seedId": "de-0487",
    "en": "the (doctor's) practice",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "die Praxis",
        "pron": "",
        "lit": "Die Praxis ist ab acht Uhr geöffnet."
      }
    }
  },
  {
    "seedId": "de-0488",
    "en": "the price",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Preis, -e",
        "pron": "",
        "lit": "Die Preise sind hoch."
      }
    }
  },
  {
    "seedId": "de-0489",
    "en": "the problem",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "das Problem, -e",
        "pron": "",
        "lit": "Mein Problem ist die Sprache."
      }
    }
  },
  {
    "seedId": "de-0490",
    "en": "the brochure",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Prospekt, -e",
        "pron": "",
        "lit": "Bitte schicken Sie mir einen Prospekt von Ihrem Hotel."
      }
    }
  },
  {
    "seedId": "de-0491",
    "en": "the exam; test",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Prüfung",
        "pron": "",
        "lit": "Die Prüfung ist am Montag um 8.00 Uhr."
      }
    }
  },
  {
    "seedId": "de-0492",
    "en": "punctual; on time",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "pünktlich",
        "pron": "",
        "lit": "Der Bus fährt pünktlich um acht Uhr. Herr Müller ist immer pünktlich."
      }
    }
  },
  {
    "seedId": "de-0493",
    "en": "to ride a bike",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "Rad fahren",
        "pron": "",
        "lit": "Das Kind kann schon Rad fahren."
      }
    }
  },
  {
    "seedId": "de-0494",
    "en": "to smoke",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "rauchen",
        "pron": "",
        "lit": "Ich rauche nicht."
      }
    }
  },
  {
    "seedId": "de-0495",
    "en": "the room; space",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Raum, -ä, e",
        "pron": "",
        "lit": "Der Unterricht ist in Raum 332."
      }
    }
  },
  {
    "seedId": "de-0496",
    "en": "the invoice; bill",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Rechnung, -en",
        "pron": "",
        "lit": "Die Rechnung, bitte."
      }
    }
  },
  {
    "seedId": "de-0497",
    "en": "right",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "rechts",
        "pron": "",
        "lit": "Die Schillerstraße ist hier rechts."
      }
    }
  },
  {
    "seedId": "de-0498",
    "en": "to rain",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "regnen",
        "pron": "",
        "lit": "Heute regnet es."
      }
    }
  },
  {
    "seedId": "de-0499",
    "en": "the rain",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Regen",
        "pron": "",
        "lit": "Bei diesem Regen gehe ich nicht raus."
      }
    }
  },
  {
    "seedId": "de-0500",
    "en": "the rice",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Reis",
        "pron": "",
        "lit": "Ich esse gern Reis."
      }
    }
  },
  {
    "seedId": "de-0501",
    "en": "to travel",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "reisen",
        "pron": "",
        "lit": "Ich reise gern."
      }
    }
  },
  {
    "seedId": "de-0502",
    "en": "the trip; journey",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Reise",
        "pron": "",
        "lit": "Wir machen eine Reise nach Österreich."
      }
    }
  },
  {
    "seedId": "de-0503",
    "en": "the travel agency",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "das Reisebüro, -s",
        "pron": "",
        "lit": "Mein Mann arbeitet im Reisebüro."
      }
    }
  },
  {
    "seedId": "de-0504",
    "en": "the travel guide",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Reiseführer",
        "pron": "",
        "lit": "Ich kaufe mir einen Reiseführer von Berlin. Unser Reiseführer heißt Peter."
      }
    }
  },
  {
    "seedId": "de-0505",
    "en": "to repair",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "reparieren",
        "pron": "",
        "lit": "Er hat das Fahrrad repariert."
      }
    }
  },
  {
    "seedId": "de-0506",
    "en": "the repair",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "die Reparatur",
        "pron": "",
        "lit": "Die Reparatur ist sehr teuer."
      }
    }
  },
  {
    "seedId": "de-0507",
    "en": "the restaurant",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "das Restaurant, -s",
        "pron": "",
        "lit": "Wir essen heute in einem Restaurant."
      }
    }
  },
  {
    "seedId": "de-0508",
    "en": "the reception (desk)",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "die Rezeption",
        "pron": "",
        "lit": "Fragen Sie bitte im Hotel an der Rezeption."
      }
    }
  },
  {
    "seedId": "de-0509",
    "en": "correct; right",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "richtig",
        "pron": "",
        "lit": "Habe ich das richtig verstanden? Das ist richtig."
      }
    }
  },
  {
    "seedId": "de-0510",
    "en": "to smell",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "riechen",
        "pron": "",
        "lit": "Dieser Wein riecht gut."
      }
    }
  },
  {
    "seedId": "de-0511",
    "en": "quiet; calm",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "ruhig",
        "pron": "",
        "lit": "Ich möchte ein ruhiges Zimmer."
      }
    }
  },
  {
    "seedId": "de-0512",
    "en": "the juice",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Saft",
        "pron": "",
        "lit": "Möchtest du einen Apfelsaft?"
      }
    }
  },
  {
    "seedId": "de-0513",
    "en": "to say",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "sagen",
        "pron": "",
        "lit": "Sag mal, wie geht es dir denn?"
      }
    }
  },
  {
    "seedId": "de-0514",
    "en": "the salad",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Salat",
        "pron": "",
        "lit": "Wie schmeckt dir der Salat?"
      }
    }
  },
  {
    "seedId": "de-0515",
    "en": "the salt",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Salz",
        "pron": "",
        "lit": "Herr Ober, kann ich bitte Salz haben?"
      }
    }
  },
  {
    "seedId": "de-0516",
    "en": "the sentence",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "Satz, -ä, e",
        "pron": "",
        "lit": "Dieser Satz ist sehr einfach."
      }
    }
  },
  {
    "seedId": "de-0517",
    "en": "the (suburban) train",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "die S-Bahn",
        "pron": "",
        "lit": "Ich nehme lieber die S-Bahn."
      }
    }
  },
  {
    "seedId": "de-0518",
    "en": "the counter; switch",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Schalter",
        "pron": "",
        "lit": "Gehen Sie bitte zum Schalter drei!"
      }
    }
  },
  {
    "seedId": "de-0519",
    "en": "to seem; to shine",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "scheinen",
        "pron": "",
        "lit": "Die Sonne scheint."
      }
    }
  },
  {
    "seedId": "de-0520",
    "en": "to send",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "schicken",
        "pron": "",
        "lit": "Bitte schicken Sie mir eine E-Mail."
      }
    }
  },
  {
    "seedId": "de-0521",
    "en": "the sign",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "das Schild, -er",
        "pron": "",
        "lit": "Haben Sie nicht das Schild gesehen?"
      }
    }
  },
  {
    "seedId": "de-0522",
    "en": "the ham",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Schinken, –",
        "pron": "",
        "lit": "Ich möchte gern ein Schinkenbrot."
      }
    }
  },
  {
    "seedId": "de-0523",
    "en": "to sleep",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "schlafen",
        "pron": "",
        "lit": "Ich schlafe meistens acht Stunden."
      }
    }
  },
  {
    "seedId": "de-0524",
    "en": "bad",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "schlecht",
        "pron": "",
        "lit": "Mir ist schlecht! Sie sehen schlecht aus. Wir haben schlechtes Wetter."
      }
    }
  },
  {
    "seedId": "de-0525",
    "en": "to close",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "schließen",
        "pron": "",
        "lit": "Bitte, schließen Sie die Tür."
      }
    }
  },
  {
    "seedId": "de-0526",
    "en": "closed",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "geschlossen",
        "pron": "",
        "lit": "Die Bank hat am Samstag geschlossen."
      }
    }
  },
  {
    "seedId": "de-0527",
    "en": "the end",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Schluss",
        "pron": "",
        "lit": "Ich muss jetzt Schluss machen. Zum Schluss gibt er uns allen die Hand."
      }
    }
  },
  {
    "seedId": "de-0528",
    "en": "the key",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Schlüssel, –",
        "pron": "",
        "lit": "Ich gebe Ihnen noch den Zimmerschlüssel."
      }
    }
  },
  {
    "seedId": "de-0529",
    "en": "to taste",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "schmecken",
        "pron": "",
        "lit": "Schmeckt das gut?"
      }
    }
  },
  {
    "seedId": "de-0530",
    "en": "fast; quick",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "schnell",
        "pron": "",
        "lit": "Er fährt schnell."
      }
    }
  },
  {
    "seedId": "de-0531",
    "en": "already",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "schon",
        "pron": "",
        "lit": "Ist das Essen schon fertig?"
      }
    }
  },
  {
    "seedId": "de-0532",
    "en": "beautiful; nice",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "schön",
        "pron": "",
        "lit": "Schönen Urlaub! Das ist sehr schön."
      }
    }
  },
  {
    "seedId": "de-0533",
    "en": "the cupboard; wardrobe",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Schrank, -ä, e",
        "pron": "",
        "lit": "Die Gläser stehen im Schrank."
      }
    }
  },
  {
    "seedId": "de-0534",
    "en": "to write",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "schreiben",
        "pron": "",
        "lit": "Er schreibt jeden Tag fünfzig E-Mails."
      }
    }
  },
  {
    "seedId": "de-0535",
    "en": "the shoe",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Schuh, -e",
        "pron": "",
        "lit": "Zieh die Schuhe aus!"
      }
    }
  },
  {
    "seedId": "de-0536",
    "en": "the school",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "die Schule",
        "pron": "",
        "lit": "Meine Tochter geht schon in die Schule. Die Schule ist gleich hier um die Ecke."
      }
    }
  },
  {
    "seedId": "de-0537",
    "en": "the (school) student; pupil",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Schüler, –",
        "pron": "",
        "lit": "In meinem Kurs sind acht Schülerinnen und fünf Schüler."
      }
    }
  },
  {
    "seedId": "de-0538",
    "en": "heavy; difficult",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "schwer",
        "pron": "",
        "lit": "Ist Ihr Gepäck sehr schwer? Das ist eine schwere Arbeit."
      }
    }
  },
  {
    "seedId": "de-0539",
    "en": "the sister",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Schwester, -n",
        "pron": "",
        "lit": "Meine Schwester kommt am Dienstag."
      }
    }
  },
  {
    "seedId": "de-0540",
    "en": "to swim",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "schwimmen",
        "pron": "",
        "lit": "Ich schwimme jeden Tag einen Kilometer."
      }
    }
  },
  {
    "seedId": "de-0541",
    "en": "the swimming pool",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "das Schwimmbad",
        "pron": "",
        "lit": "Kommst du mit ins Schwimmbad?"
      }
    }
  },
  {
    "seedId": "de-0542",
    "en": "the lake",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der See",
        "pron": "",
        "lit": "Komm, wir fahren zum Starnberger See."
      }
    }
  },
  {
    "seedId": "de-0543",
    "en": "to see",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "sehen",
        "pron": "",
        "lit": "Ich kann dich nicht sehen. Ich habe diesen Jungen schon einmal gesehen."
      }
    }
  },
  {
    "seedId": "de-0544",
    "en": "the sight; tourist attraction",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "die Sehenswürdigkeit,",
        "pron": "",
        "lit": "-en Welche Sehenswürdigkeiten gibt es in Frankfurt?"
      }
    }
  },
  {
    "seedId": "de-0545",
    "en": "very",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "sehr",
        "pron": "",
        "lit": "Danke sehr! Das ist sehr schwer."
      }
    }
  },
  {
    "seedId": "de-0546",
    "en": "to be",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "sein",
        "pron": "",
        "lit": "Herr Müller ist in seinem Zimmer. Mir ist kalt. Ich bin dreiundzwanzig."
      }
    }
  },
  {
    "seedId": "de-0547",
    "en": "to be gone; away",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "weg sein",
        "pron": "",
        "lit": "Herr Meier ist schon weg."
      }
    }
  },
  {
    "seedId": "de-0548",
    "en": "to be closed",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "zu sein",
        "pron": "",
        "lit": "Die Tür ist zu."
      }
    }
  },
  {
    "seedId": "de-0549",
    "en": "since (time)",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "seit",
        "pron": "",
        "lit": "Ich wohne seit drei Jahren in Köln."
      }
    }
  },
  {
    "seedId": "de-0550",
    "en": "independent; self-employed",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "selbstständig",
        "pron": "",
        "lit": "Er ist selbstständig."
      }
    }
  },
  {
    "seedId": "de-0551",
    "en": "oneself",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "sich",
        "pron": "",
        "lit": "Sie müssen sich erst anmelden."
      }
    }
  },
  {
    "seedId": "de-0552",
    "en": "she; they",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "sie",
        "pron": "",
        "lit": "Wie heißt sie?"
      }
    }
  },
  {
    "seedId": "de-0553",
    "en": "you (formal)",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "Sie",
        "pron": "",
        "lit": "Wie heißen Sie, bitte?"
      }
    }
  },
  {
    "seedId": "de-0554",
    "en": "to sit",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "sitzen",
        "pron": "",
        "lit": "Wo sitzen Sie?"
      }
    }
  },
  {
    "seedId": "de-0555",
    "en": "so; like this",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "so",
        "pron": "",
        "lit": "Sie müssen das so machen! Fahren Sie bitte nicht so schnell! Meine Frau ist so groß wie ich. So, das war‘s/wär‘s!"
      }
    }
  },
  {
    "seedId": "de-0556",
    "en": "the sofa",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "das Sofa",
        "pron": "",
        "lit": "Das Sofa ist neu."
      }
    }
  },
  {
    "seedId": "de-0557",
    "en": "immediately",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "sofort",
        "pron": "",
        "lit": "Bitte antworten Sie sofort."
      }
    }
  },
  {
    "seedId": "de-0558",
    "en": "the son",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Sohn, -ö, e",
        "pron": "",
        "lit": "Das ist Hans, mein Sohn."
      }
    }
  },
  {
    "seedId": "de-0559",
    "en": "should; to be supposed to",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "sollen",
        "pron": "",
        "lit": "Soll ich kommen? Was soll ich mitbringen?"
      }
    }
  },
  {
    "seedId": "de-0560",
    "en": "the sun",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Sonne",
        "pron": "",
        "lit": "Die Sonne scheint."
      }
    }
  },
  {
    "seedId": "de-0561",
    "en": "late",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "spät",
        "pron": "",
        "lit": "Es ist schon spät, ich muss gehen."
      }
    }
  },
  {
    "seedId": "de-0562",
    "en": "later",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "später",
        "pron": "",
        "lit": "Das können wir später machen."
      }
    }
  },
  {
    "seedId": "de-0563",
    "en": "the menu",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "die Speisekarte",
        "pron": "",
        "lit": "Bringen Sie mir die Speisekarte, bitte."
      }
    }
  },
  {
    "seedId": "de-0564",
    "en": "to play",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "spielen",
        "pron": "",
        "lit": "Die Kinder spielen draußen. Spielen Sie Karten?"
      }
    }
  },
  {
    "seedId": "de-0565",
    "en": "sports",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Sport",
        "pron": "",
        "lit": "Ich mache viel Sport."
      }
    }
  },
  {
    "seedId": "de-0566",
    "en": "the language",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Sprache, -n",
        "pron": "",
        "lit": "Welche Sprachen sprichst du?"
      }
    }
  },
  {
    "seedId": "de-0567",
    "en": "to speak",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "sprechen",
        "pron": "",
        "lit": "Kann ich (mit) Herrn Klein sprechen?"
      }
    }
  },
  {
    "seedId": "de-0568",
    "en": "the city",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "die Stadt, -ä, e",
        "pron": "",
        "lit": "Heidelberg ist eine alte Stadt."
      }
    }
  },
  {
    "seedId": "de-0569",
    "en": "to stand",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "stehen",
        "pron": "",
        "lit": "Ich glaube es nicht, aber es steht in der Zeitung. Der Bus steht schon an der Haltestelle."
      }
    }
  },
  {
    "seedId": "de-0570",
    "en": "the place; position; job",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Stelle, -n",
        "pron": "",
        "lit": "Ich habe eine neue Stelle."
      }
    }
  },
  {
    "seedId": "de-0571",
    "en": "to put; to place",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "stellen",
        "pron": "",
        "lit": "Stell die Tasche rechts in die Ecke!"
      }
    }
  },
  {
    "seedId": "de-0572",
    "en": "the floor; story (of a building)",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Stock",
        "pron": "",
        "lit": "Unsere Wohnung liegt im ersten Stock."
      }
    }
  },
  {
    "seedId": "de-0573",
    "en": "the street",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "die Straße, -n",
        "pron": "",
        "lit": "In welcher Straße wohnen Sie?"
      }
    }
  },
  {
    "seedId": "de-0574",
    "en": "the tram",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "die Straßenbahn",
        "pron": "",
        "lit": "Wo fährt die Straßenbahn ab?"
      }
    }
  },
  {
    "seedId": "de-0575",
    "en": "to study (university)",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "studieren",
        "pron": "",
        "lit": "Ich studiere in Mainz."
      }
    }
  },
  {
    "seedId": "de-0576",
    "en": "the (university) studies",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "das Studium",
        "pron": "",
        "lit": "Das Studium beginnt im Oktober."
      }
    }
  },
  {
    "seedId": "de-0577",
    "en": "the (university) student",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Student, -en",
        "pron": "",
        "lit": "Ich bin Studentin."
      }
    }
  },
  {
    "seedId": "de-0578",
    "en": "the hour",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "die Stunde, -n",
        "pron": "",
        "lit": "Ich bin in einer Stunde zurück."
      }
    }
  },
  {
    "seedId": "de-0579",
    "en": "to look for; to search",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "suchen",
        "pron": "",
        "lit": "Suchst du etwas?"
      }
    }
  },
  {
    "seedId": "de-0580",
    "en": "to dance",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "tanzen",
        "pron": "",
        "lit": "Tanzen Sie gern?"
      }
    }
  },
  {
    "seedId": "de-0581",
    "en": "the bag; pocket",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Tasche, -n",
        "pron": "",
        "lit": "Ich habe die Schlüssel in der Tasche."
      }
    }
  },
  {
    "seedId": "de-0582",
    "en": "the taxi",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "das Taxi, -s",
        "pron": "",
        "lit": "Es gibt heute keinen Bus mehr. Er fährt mit dem Taxi."
      }
    }
  },
  {
    "seedId": "de-0583",
    "en": "the tea",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Tee",
        "pron": "",
        "lit": "Ich trinke morgens immer Tee."
      }
    }
  },
  {
    "seedId": "de-0584",
    "en": "the part",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Teil, -e",
        "pron": "",
        "lit": "Lies bitte auch den zweiten Teil."
      }
    }
  },
  {
    "seedId": "de-0585",
    "en": "to phone; to call",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "telefonieren",
        "pron": "",
        "lit": "Darf ich mal telefonieren?"
      }
    }
  },
  {
    "seedId": "de-0586",
    "en": "the telephone",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "das Telefon",
        "pron": "",
        "lit": "Haben Sie Telefon?"
      }
    }
  },
  {
    "seedId": "de-0587",
    "en": "the appointment",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Termin, -e",
        "pron": "",
        "lit": "Am besten machen wir sofort einen Termin."
      }
    }
  },
  {
    "seedId": "de-0588",
    "en": "the test",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Test",
        "pron": "",
        "lit": "Der Test war einfach."
      }
    }
  },
  {
    "seedId": "de-0589",
    "en": "expensive",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "teuer",
        "pron": "",
        "lit": "Das ist mir zu teuer."
      }
    }
  },
  {
    "seedId": "de-0590",
    "en": "the text",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Text, -e",
        "pron": "",
        "lit": "Lesen Sie bitte diesen Text."
      }
    }
  },
  {
    "seedId": "de-0591",
    "en": "the topic; theme",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Thema",
        "pron": "",
        "lit": "Wir sprechen heute über das Thema „Essen und Trinken“."
      }
    }
  },
  {
    "seedId": "de-0592",
    "en": "the ticket",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Ticket, -s",
        "pron": "",
        "lit": "Wie viel kostet das Ticket?"
      }
    }
  },
  {
    "seedId": "de-0593",
    "en": "the table",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Tisch, -e",
        "pron": "",
        "lit": "Die Fotos liegen auf dem Tisch."
      }
    }
  },
  {
    "seedId": "de-0594",
    "en": "the daughter",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Tochter, -ö",
        "pron": "",
        "lit": "Das ist meine Tochter Katharina."
      }
    }
  },
  {
    "seedId": "de-0595",
    "en": "the toilet",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "die Toilette, -en",
        "pron": "",
        "lit": "Wo ist die Toilette, bitte?"
      }
    }
  },
  {
    "seedId": "de-0596",
    "en": "the tomato",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Tomate, -n",
        "pron": "",
        "lit": "Die Tomate ist noch grün."
      }
    }
  },
  {
    "seedId": "de-0597",
    "en": "dead",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "tot",
        "pron": "",
        "lit": "Sein Vater ist schon lange tot."
      }
    }
  },
  {
    "seedId": "de-0598",
    "en": "to meet",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "(sich) treffen",
        "pron": "",
        "lit": "Ich treffe in der Stadt einen Kollegen. Wir treffen uns immer freitags."
      }
    }
  },
  {
    "seedId": "de-0599",
    "en": "the stairs",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Treppe, -n",
        "pron": "",
        "lit": "Die Toilette? Die Treppe hoch und dann links."
      }
    }
  },
  {
    "seedId": "de-0600",
    "en": "to drink",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "trinken",
        "pron": "",
        "lit": "Möchtest du etwas trinken?"
      }
    }
  },
  {
    "seedId": "de-0601",
    "en": "bye",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "tschüss",
        "pron": "",
        "lit": "Junge Leute sagen meistens „tschüss!“ und nicht „auf Wiedersehen“."
      }
    }
  },
  {
    "seedId": "de-0602",
    "en": "to do",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "tun",
        "pron": "",
        "lit": "Ich habe noch etwas zu tun. Was tut Ihr Mann?"
      }
    }
  },
  {
    "seedId": "de-0603",
    "en": "over; about",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "über",
        "pron": "",
        "lit": "Gehen Sie hier über die Straße. Er wohnt im zweiten Stock über Familie Meier. Sind Sie über 18?"
      }
    }
  },
  {
    "seedId": "de-0604",
    "en": "to stay overnight",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "übernachten",
        "pron": "",
        "lit": "Du kannst bei mir übernachten."
      }
    }
  },
  {
    "seedId": "de-0605",
    "en": "to transfer (money)",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "überweisen",
        "pron": "",
        "lit": "Sie können das Geld auch überweisen."
      }
    }
  },
  {
    "seedId": "de-0606",
    "en": "the clock; watch; o'clock",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "die Uhr",
        "pron": "",
        "lit": "Es ist vier Uhr."
      }
    }
  },
  {
    "seedId": "de-0607",
    "en": "around; at (time)",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "um",
        "pron": "",
        "lit": "Er kommt um sieben Uhr. Da kommt er gerade um die Ecke."
      }
    }
  },
  {
    "seedId": "de-0608",
    "en": "to move (house)",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "umziehen",
        "pron": "",
        "lit": "Nächsten Monat ziehen wir um."
      }
    }
  },
  {
    "seedId": "de-0609",
    "en": "and",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "und",
        "pron": "",
        "lit": "Peter und Helmut sind meine Söhne."
      }
    }
  },
  {
    "seedId": "de-0610",
    "en": "our",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "unser",
        "pron": "",
        "lit": "Das ist unsere Lehrerin."
      }
    }
  },
  {
    "seedId": "de-0611",
    "en": "below; downstairs",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "unten",
        "pron": "",
        "lit": "Er wohnt ganz unten im Haus."
      }
    }
  },
  {
    "seedId": "de-0612",
    "en": "under",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "unter",
        "pron": "",
        "lit": "Unter uns wohnt eine Familie mit drei Kindern."
      }
    }
  },
  {
    "seedId": "de-0613",
    "en": "the lesson; class",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Unterricht",
        "pron": "",
        "lit": "Wir haben Unterricht von 8.00 bis 12.00 Uhr."
      }
    }
  },
  {
    "seedId": "de-0614",
    "en": "to sign",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "unterschreiben",
        "pron": "",
        "lit": "Wo muss ich unterschreiben?"
      }
    }
  },
  {
    "seedId": "de-0615",
    "en": "the signature",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "die Unterschrift",
        "pron": "",
        "lit": "Hier fehlt noch Ihre Unterschrift."
      }
    }
  },
  {
    "seedId": "de-0616",
    "en": "the vacation; holiday",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "der Urlaub",
        "pron": "",
        "lit": "Ich nehme im September Urlaub."
      }
    }
  },
  {
    "seedId": "de-0617",
    "en": "the father",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "der Vater, -ä",
        "pron": "",
        "lit": "Mein Vater ist Arbeiter."
      }
    }
  },
  {
    "seedId": "de-0618",
    "en": "forbidden",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "verboten",
        "pron": "",
        "lit": "Hier ist Rauchen verboten."
      }
    }
  },
  {
    "seedId": "de-0619",
    "en": "to earn",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "verdienen",
        "pron": "",
        "lit": "Ich verdiene 1.500 Euro im Monat."
      }
    }
  },
  {
    "seedId": "de-0620",
    "en": "the club; association",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Verein",
        "pron": "",
        "lit": "Es gibt einen neuen Sportverein in der Stadt."
      }
    }
  },
  {
    "seedId": "de-0621",
    "en": "married",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "verheiratet",
        "pron": "",
        "lit": "Ich bin verheiratet und habe drei Kinder."
      }
    }
  },
  {
    "seedId": "de-0622",
    "en": "to sell",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "verkaufen",
        "pron": "",
        "lit": "Er verkauft sein altes Auto."
      }
    }
  },
  {
    "seedId": "de-0623",
    "en": "the salesperson",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Verkäufer, –",
        "pron": "",
        "lit": "Meine Mutter ist Verkäuferin im Kaufhaus."
      }
    }
  },
  {
    "seedId": "de-0624",
    "en": "to rent out",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "vermieten",
        "pron": "",
        "lit": "Die Wohnung ist schon vermietet."
      }
    }
  },
  {
    "seedId": "de-0625",
    "en": "the landlord",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Vermieter",
        "pron": "",
        "lit": "Unser Vermieter heißt Huber. Er wohnt auch hier."
      }
    }
  },
  {
    "seedId": "de-0626",
    "en": "to understand",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "verstehen",
        "pron": "",
        "lit": "Können Sie mich verstehen?"
      }
    }
  },
  {
    "seedId": "de-0627",
    "en": "the relative",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Verwandte, -n",
        "pron": "",
        "lit": "Peter besucht seine Verwandten in Polen."
      }
    }
  },
  {
    "seedId": "de-0628",
    "en": "much; a lot",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "viel",
        "pron": "",
        "lit": "Hier regnet es viel."
      }
    }
  },
  {
    "seedId": "de-0629",
    "en": "maybe; perhaps",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "vielleicht",
        "pron": "",
        "lit": "Ich komme vielleicht mit dem Bus."
      }
    }
  },
  {
    "seedId": "de-0630",
    "en": "from; of",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "von",
        "pron": "",
        "lit": "Das Auto von Felix ist kaputt. Er kommt gerade von Köln/von zu Hause."
      }
    }
  },
  {
    "seedId": "de-0631",
    "en": "before; in front of",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "vor",
        "pron": "",
        "lit": "Der Termin war vor einer Stunde. Das Auto steht vor der Tür."
      }
    }
  },
  {
    "seedId": "de-0632",
    "en": "the first name",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Vorname, -n",
        "pron": "",
        "lit": "Ich heiße Müller, mein Vorname ist Eva."
      }
    }
  },
  {
    "seedId": "de-0633",
    "en": "caution",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Vorsicht",
        "pron": "",
        "lit": "Vorsicht! Da kommt ein Auto."
      }
    }
  },
  {
    "seedId": "de-0634",
    "en": "to introduce (oneself); to imagine",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "(sich) vorstellen",
        "pron": "",
        "lit": "Wir wollen uns kennenlernen. Können Sie sich bitte vorstellen?"
      }
    }
  },
  {
    "seedId": "de-0635",
    "en": "the area code",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "die Vorwahl",
        "pron": "",
        "lit": "Wie ist die Vorwahl von München?"
      }
    }
  },
  {
    "seedId": "de-0636",
    "en": "to hike",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "wandern",
        "pron": "",
        "lit": "Wir wandern um den Chiemsee."
      }
    }
  },
  {
    "seedId": "de-0637",
    "en": "when",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "wann",
        "pron": "",
        "lit": "Wann bist du fertig? Wann kann ich Sie anrufen? Wann sind Sie geboren?"
      }
    }
  },
  {
    "seedId": "de-0638",
    "en": "to wait",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "warten",
        "pron": "",
        "lit": "Können Sie ein paar Minuten warten? Auf wen warten Sie?"
      }
    }
  },
  {
    "seedId": "de-0639",
    "en": "why",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "warum",
        "pron": "",
        "lit": "Warum kommt er nicht?"
      }
    }
  },
  {
    "seedId": "de-0640",
    "en": "what",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "was",
        "pron": "",
        "lit": "Was ist das? Was möchten Sie?"
      }
    }
  },
  {
    "seedId": "de-0641",
    "en": "what kind of",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "was für ein",
        "pron": "",
        "lit": "Was für eine Farbe möchten Sie?"
      }
    }
  },
  {
    "seedId": "de-0642",
    "en": "to wash (oneself)",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "(sich) waschen",
        "pron": "",
        "lit": "Wo kann ich mir die Hände waschen? Ich muss morgen waschen."
      }
    }
  },
  {
    "seedId": "de-0643",
    "en": "the water",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "das Wasser",
        "pron": "",
        "lit": "Ein Glas Wasser, bitte."
      }
    }
  },
  {
    "seedId": "de-0644",
    "en": "to hurt",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "weh tun",
        "pron": "",
        "lit": "Ich muss zum Arzt. Mein Bein tut weh."
      }
    }
  },
  {
    "seedId": "de-0645",
    "en": "female",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "weiblich",
        "pron": "",
        "lit": "Kreuzen Sie bitte an: „weiblich“ oder „männlich“."
      }
    }
  },
  {
    "seedId": "de-0646",
    "en": "the wine",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Wein",
        "pron": "",
        "lit": "Nein danke, ich möchte keinen Wein."
      }
    }
  },
  {
    "seedId": "de-0647",
    "en": "far",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "weit",
        "pron": "",
        "lit": "Zum Bahnhof ist es nicht weit."
      }
    }
  },
  {
    "seedId": "de-0648",
    "en": "further; continue",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "weiter",
        "pron": "",
        "lit": "Der Bus fährt nicht weiter."
      }
    }
  },
  {
    "seedId": "de-0649",
    "en": "which",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "welcher",
        "pron": "",
        "lit": "Welches Buch möchtest du?"
      }
    }
  },
  {
    "seedId": "de-0650",
    "en": "the world",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "die Welt",
        "pron": "",
        "lit": "Es gibt viele Probleme auf der Welt."
      }
    }
  },
  {
    "seedId": "de-0651",
    "en": "little; few",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "wenig",
        "pron": "",
        "lit": "Ich habe leider nur wenig verstanden. Er verdient wenig."
      }
    }
  },
  {
    "seedId": "de-0652",
    "en": "who",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "wer",
        "pron": "",
        "lit": "Wer ist das?"
      }
    }
  },
  {
    "seedId": "de-0653",
    "en": "to become",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "werden",
        "pron": "",
        "lit": "Mein Sohn will Arzt werden."
      }
    }
  },
  {
    "seedId": "de-0654",
    "en": "the weather",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "das Wetter",
        "pron": "",
        "lit": "Wir hatten schlechtes Wetter."
      }
    }
  },
  {
    "seedId": "de-0655",
    "en": "important",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "wichtig",
        "pron": "",
        "lit": "Dieses Formular ist sehr wichtig."
      }
    }
  },
  {
    "seedId": "de-0656",
    "en": "how",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "wie",
        "pron": "",
        "lit": "Wie heißt du? Er schreibt wie ein Kind. Meine Frau ist so groß wie ich. Wie soll ich das machen? Wie groß ist die Wohnung? Wie bitte? Wie lange bist du schon hier?"
      }
    }
  },
  {
    "seedId": "de-0657",
    "en": "to repeat",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "wiederholen",
        "pron": "",
        "lit": "Können Sie das bitte wiederholen?"
      }
    }
  },
  {
    "seedId": "de-0658",
    "en": "goodbye (on the phone)",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Wiederhören",
        "pron": "",
        "lit": "Wir müssen jetzt Schluss machen. Also auf Wiederhören!"
      }
    }
  },
  {
    "seedId": "de-0659",
    "en": "goodbye",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "das Wiedersehen",
        "pron": "",
        "lit": "Auf Wiedersehen!"
      }
    }
  },
  {
    "seedId": "de-0660",
    "en": "how much",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "wie viel",
        "pron": "",
        "lit": "Wie viel Milch nehmen Sie?"
      }
    }
  },
  {
    "seedId": "de-0661",
    "en": "welcome",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "willkommen",
        "pron": "",
        "lit": "Herzlich willkommen!"
      }
    }
  },
  {
    "seedId": "de-0662",
    "en": "the wind",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Wind",
        "pron": "",
        "lit": "Der Wind kommt aus Osten."
      }
    }
  },
  {
    "seedId": "de-0663",
    "en": "we",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "wir",
        "pron": "",
        "lit": "Wir lernen Deutsch."
      }
    }
  },
  {
    "seedId": "de-0664",
    "en": "to know (a fact)",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "wissen",
        "pron": "",
        "lit": "Weißt du, wie er heißt?"
      }
    }
  },
  {
    "seedId": "de-0665",
    "en": "where",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "wo",
        "pron": "",
        "lit": "Wo waren Sie im Urlaub? Wo ist die Post? Wo sind Sie geboren?"
      }
    }
  },
  {
    "seedId": "de-0666",
    "en": "where from",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "woher",
        "pron": "",
        "lit": "Woher kommen Sie?"
      }
    }
  },
  {
    "seedId": "de-0667",
    "en": "where to",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "wohin",
        "pron": "",
        "lit": "Wohin fährt dieser Bus? Wohin wollen Sie am Wochenende?"
      }
    }
  },
  {
    "seedId": "de-0668",
    "en": "to live; to reside",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "wohnen",
        "pron": "",
        "lit": "Ich wohne in München."
      }
    }
  },
  {
    "seedId": "de-0669",
    "en": "the apartment; flat",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "die Wohnung, -en",
        "pron": "",
        "lit": "Seit wann haben Sie diese Wohnung?"
      }
    }
  },
  {
    "seedId": "de-0670",
    "en": "to want",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "wollen",
        "pron": "",
        "lit": "Wollen Sie einen Kaffee trinken?"
      }
    }
  },
  {
    "seedId": "de-0671",
    "en": "the word",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Wort, -ö, er/-e",
        "pron": "",
        "lit": "Ich kenne das Wort nicht."
      }
    }
  },
  {
    "seedId": "de-0672",
    "en": "wonderful",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "wunderbar",
        "pron": "",
        "lit": "Das Essen schmeckt wunderbar."
      }
    }
  },
  {
    "seedId": "de-0673",
    "en": "to pay",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "zahlen",
        "pron": "",
        "lit": "Zahlen, bitte!"
      }
    }
  },
  {
    "seedId": "de-0674",
    "en": "the time",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "die Zeit",
        "pron": "",
        "lit": "Ich habe heute keine Zeit."
      }
    }
  },
  {
    "seedId": "de-0675",
    "en": "currently; at the moment",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "zurzeit",
        "pron": "",
        "lit": "Zurzeit habe ich sehr viel zu tun."
      }
    }
  },
  {
    "seedId": "de-0676",
    "en": "the newspaper",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Zeitung, -en",
        "pron": "",
        "lit": "Ich lese gern Zeitung."
      }
    }
  },
  {
    "seedId": "de-0677",
    "en": "the cigarette",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "die Zigarette, -n",
        "pron": "",
        "lit": "Wie teuer sind die Zigaretten?"
      }
    }
  },
  {
    "seedId": "de-0678",
    "en": "the room",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "das Zimmer, –",
        "pron": "",
        "lit": "Das Zimmer ist groß. Öffne im Schlafzimmer das Fenster, bitte! Die Wohnung hat drei Zimmer. Ich habe ein Zimmer bestellt."
      }
    }
  },
  {
    "seedId": "de-0679",
    "en": "customs",
    "cat": "Level 3",
    "translations": {
      "de": {
        "text": "der Zoll",
        "pron": "",
        "lit": "Wir müssen noch durch den Zoll."
      }
    }
  },
  {
    "seedId": "de-0680",
    "en": "to; too",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "zu",
        "pron": "",
        "lit": "Der Bus fährt zum Bahnhof. Ich gehe zu Fuß. Ich bin zu Hause."
      }
    }
  },
  {
    "seedId": "de-0681",
    "en": "satisfied",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "zufrieden",
        "pron": "",
        "lit": "Ich bin mit der Wohnung zufrieden."
      }
    }
  },
  {
    "seedId": "de-0682",
    "en": "the train",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "der Zug, -ü, e",
        "pron": "",
        "lit": "Ich fahre gern mit dem Zug."
      }
    }
  },
  {
    "seedId": "de-0683",
    "en": "back",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "zurück",
        "pron": "",
        "lit": "Einmal Frankfurt und zurück. Wann kommst du zurück?"
      }
    }
  },
  {
    "seedId": "de-0684",
    "en": "together",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "zusammen",
        "pron": "",
        "lit": "Sollen wir zusammen essen gehen? Das macht zusammen 2 Euro 80."
      }
    }
  },
  {
    "seedId": "de-0685",
    "en": "between",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "zwischen",
        "pron": "",
        "lit": "Heidelberg liegt zwischen Frankfurt und Stuttgart. Zwischen 8 und 10 Uhr bin ich zu Hause."
      }
    }
  },
  {
    "seedId": "de-0686",
    "en": "one",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "eins",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0687",
    "en": "two",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "zwei",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0688",
    "en": "three",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "drei",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0689",
    "en": "four",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "vier",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0690",
    "en": "five",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "fünf",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0691",
    "en": "six",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "sechs",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0692",
    "en": "seven",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "sieben",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0693",
    "en": "eight",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "acht",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0694",
    "en": "nine",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "neun",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0695",
    "en": "ten",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "zehn",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0696",
    "en": "eleven",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "elf",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0697",
    "en": "twelve",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "zwölf",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0698",
    "en": "thirteen",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "dreizehn",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0699",
    "en": "fourteen",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "vierzehn",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0700",
    "en": "fifteen",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "fünfzehn",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0701",
    "en": "sixteen",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "sechzehn",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0702",
    "en": "seventeen",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "siebzehn",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0703",
    "en": "eighteen",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "achtzehn",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0704",
    "en": "nineteen",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "neunzehn",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0705",
    "en": "twenty",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "zwanzig",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0706",
    "en": "thirty",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "dreißig",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0707",
    "en": "forty",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "vierzig",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0708",
    "en": "fifty",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "fünfzig",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0709",
    "en": "sixty",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "sechzig",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0710",
    "en": "seventy",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "siebzig",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0711",
    "en": "eighty",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "achtzig",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0712",
    "en": "ninety",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "neunzig",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0713",
    "en": "(one) hundred",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "(ein)hundert",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0714",
    "en": "(one) thousand",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "(ein)tausend",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0715",
    "en": "a million",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "eine Million",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0716",
    "en": "first",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "erste",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0717",
    "en": "second",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "zweite",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0718",
    "en": "third",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "dritte",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0719",
    "en": "fourth",
    "cat": "Zahlen",
    "translations": {
      "de": {
        "text": "vierte",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0720",
    "en": "Sunday",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "der Sonntag",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0721",
    "en": "Monday",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "der Montag",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0722",
    "en": "Tuesday",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "der Dienstag",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0723",
    "en": "Wednesday",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "der Mittwoch",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0724",
    "en": "Thursday",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "der Donnerstag",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0725",
    "en": "Friday",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "der Freitag",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0726",
    "en": "Saturday",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "der Samstag/Sonnabend",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0727",
    "en": "the weekend",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "das Wochenende",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0728",
    "en": "January",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "der Januar",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0729",
    "en": "February",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "der Februar",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0730",
    "en": "March",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "der März",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0731",
    "en": "April",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "der April",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0732",
    "en": "May",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "der Mai",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0733",
    "en": "June",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "der Juni",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0734",
    "en": "July",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "der Juli",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0735",
    "en": "August",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "der August",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0736",
    "en": "September",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "der September",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0737",
    "en": "October",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "der Oktober",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0738",
    "en": "November",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "der November",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0739",
    "en": "December",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "der Dezember",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0740",
    "en": "spring",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "der Frühling/das Frühjahr",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0741",
    "en": "summer",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "der Sommer",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0742",
    "en": "autumn; fall",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "der Herbst",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0743",
    "en": "winter",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "der Winter",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0744",
    "en": "black",
    "cat": "Farben",
    "translations": {
      "de": {
        "text": "schwarz",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0745",
    "en": "gray",
    "cat": "Farben",
    "translations": {
      "de": {
        "text": "grau",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0746",
    "en": "blue",
    "cat": "Farben",
    "translations": {
      "de": {
        "text": "blau",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0747",
    "en": "green",
    "cat": "Farben",
    "translations": {
      "de": {
        "text": "grün",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0748",
    "en": "white",
    "cat": "Farben",
    "translations": {
      "de": {
        "text": "weiß",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0749",
    "en": "red",
    "cat": "Farben",
    "translations": {
      "de": {
        "text": "rot",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0750",
    "en": "yellow",
    "cat": "Farben",
    "translations": {
      "de": {
        "text": "gelb",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0751",
    "en": "brown",
    "cat": "Farben",
    "translations": {
      "de": {
        "text": "braun",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0752",
    "en": "the north",
    "cat": "Himmelsrichtungen",
    "translations": {
      "de": {
        "text": "der Norden",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0753",
    "en": "the south",
    "cat": "Himmelsrichtungen",
    "translations": {
      "de": {
        "text": "der Süden",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0754",
    "en": "the west",
    "cat": "Himmelsrichtungen",
    "translations": {
      "de": {
        "text": "der Westen",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0755",
    "en": "the east",
    "cat": "Himmelsrichtungen",
    "translations": {
      "de": {
        "text": "der Osten",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0756",
    "en": "a person",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "die Person",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0757",
    "en": "of course; naturally",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "natürlich",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0758",
    "en": "full",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "voll",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0759",
    "en": "half",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "halb",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0760",
    "en": "now",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "nun",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0761",
    "en": "again",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "wieder",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0762",
    "en": "thereupon; on it",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "darauf",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0763",
    "en": "first; at first",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "zuerst",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0764",
    "en": "to that; in addition",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "dazu",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0765",
    "en": "after that; afterward",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "danach",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0766",
    "en": "to wish",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "wünschen",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0767",
    "en": "to pass (an exam); to consist of",
    "cat": "Level 1",
    "translations": {
      "de": {
        "text": "bestehen",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0768",
    "en": "the phone number",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "die Telefonnummer",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0769",
    "en": "the date of birth",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Geburtsdatum",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0770",
    "en": "the passenger",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Fahrgast",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0771",
    "en": "the sweater",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Pullover",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0772",
    "en": "the dictionary",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "das Wörterbuch",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0773",
    "en": "the morning; forenoon",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "der Vormittag",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0774",
    "en": "the flight",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Flug",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0775",
    "en": "to sit down",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "sich setzen",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0776",
    "en": "the waiter",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Kellner",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0777",
    "en": "everyday life",
    "cat": "Level 2",
    "translations": {
      "de": {
        "text": "der Alltag",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0778",
    "en": "Who are you? Tell us.",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Erzählen Sie uns: Wer sind Sie?",
        "du": "Erzähl mir: Wer bist du?",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0779",
    "en": "My name is ...",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Mein Name ist ...",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0780",
    "en": "I come from ...",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Ich komme aus ...",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0781",
    "en": "I live in ...",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Ich lebe in ...",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0782",
    "en": "I speak German, ...",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Ich spreche Deutsch, ...",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0783",
    "en": "My hobby is .../My hobbies are ...",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Mein Hobby ist .../Meine Hobbys sind ...",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0784",
    "en": "And you, who are you, please?",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Und Sie, wer sind Sie, bitte?",
        "du": "Und du, wer bist du?",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0785",
    "en": "What is your first name/last name?",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Wie ist Ihr Vorname/Familienname?",
        "du": "Wie ist dein Vorname/Familienname?",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0786",
    "en": "Can you spell that, please?",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Können Sie das bitte buchstabieren?",
        "du": "Kannst du das bitte buchstabieren?",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0787",
    "en": "Where are you from?",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Woher kommen Sie?",
        "du": "Woher kommst du?",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0788",
    "en": "Do you have a phone?",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Haben Sie ein Telefon?",
        "du": "Hast du ein Telefon?",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0789",
    "en": "What is your phone number, please?",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Wie ist bitte Ihre Telefonnummer?",
        "du": "Wie ist bitte deine Telefonnummer?",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0790",
    "en": "Do you have a mobile phone?",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Haben Sie ein Handy?",
        "du": "Hast du ein Handy?",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0791",
    "en": "What is your postal code/house number?",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Wie ist Ihre Postleitzahl/Hausnummer?",
        "du": "Wie ist deine Postleitzahl/Hausnummer?",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0792",
    "en": "Where can I get a city map?",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Wo kann ich einen Stadtplan bekommen?",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0793",
    "en": "At the information desk in the station.",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "An der Information im Bahnhof.",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0794",
    "en": "Where can I buy a newspaper?",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Wo kann ich eine Zeitung kaufen?",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0795",
    "en": "Where is the checkout, please?",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Wo ist die Kasse, bitte?",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0796",
    "en": "What do you usually eat for breakfast?",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Was essen Sie normalerweise zum Frühstück?",
        "du": "Was isst du normalerweise zum Frühstück?",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0797",
    "en": "What is your favorite food?",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Was ist Ihr Lieblingsessen?",
        "du": "Was ist dein Lieblingsessen?",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0798",
    "en": "What do you do on Sunday?",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Was machen Sie am Sonntag?",
        "du": "Was machst du am Sonntag?",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0799",
    "en": "Do you like to read books?",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Lesen Sie gern Bücher?",
        "du": "Liest du gern Bücher?",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0800",
    "en": "Do you have many friends at school?",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Haben Sie viele Freunde in der Schule?",
        "du": "Hast du viele Freunde in der Schule?",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0801",
    "en": "Do you like your teacher?",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Mögen Sie Ihren Lehrer/Ihre Lehrerin?",
        "du": "Magst du deinen Lehrer/deine Lehrerin?",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0802",
    "en": "What are your working hours?",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Wie sind Ihre Arbeitszeiten?",
        "du": "Wie sind deine Arbeitszeiten?",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0803",
    "en": "Do you have nice colleagues?",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Haben Sie nette Kollegen?",
        "du": "Hast du nette Kollegen?",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0804",
    "en": "What is your favorite sport?",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Was ist Ihr Lieblingssport?",
        "du": "Was ist dein Lieblingssport?",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0805",
    "en": "Can you swim?",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Können Sie schwimmen?",
        "du": "Kannst du schwimmen?",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0806",
    "en": "A glass of water, please!",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Ein Glas Wasser, bitte!",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0807",
    "en": "Yes, of course. Here you are.",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Ja, natürlich. Bitte.",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0808",
    "en": "Can I have a pencil, please?",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Kann ich bitte einen Stift haben?",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0809",
    "en": "Can we sit down here?",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Können wir uns hier hinsetzen?",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0810",
    "en": "Excuse me, what time is it, please?",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Entschuldigung, wie spät ist es bitte?",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0811",
    "en": "Can I use the computer, please?",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Kann ich bitte den Computer benutzen?",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0812",
    "en": "Can you write that down for me, please?",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Können Sie mir das bitte aufschreiben?",
        "du": "Kannst du mir das bitte aufschreiben?",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0813",
    "en": "A beer, please!",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Ein Bier, bitte!",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0814",
    "en": "These flowers are for you.",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Die Blumen sind für Sie.",
        "du": "Die Blumen sind für dich.",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0815",
    "en": "Do you have time on Monday at 8 o'clock?",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Haben Sie am Montag um 8 Uhr Zeit?",
        "du": "Hast du am Montag um 8 Uhr Zeit?",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0816",
    "en": "Can I have an apple, please?",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Kann ich bitte einen Apfel haben?",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0817",
    "en": "Please don't smoke here.",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Bitte rauchen Sie hier nicht.",
        "du": "Bitte rauch hier nicht.",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0818",
    "en": "Where is the post office, please?",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Wo ist das Postamt, bitte?",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0819",
    "en": "Can you call a taxi for me, please?",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Können Sie mir bitte ein Taxi rufen?",
        "du": "Kannst du mir bitte ein Taxi rufen?",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0820",
    "en": "The bill, please!",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Die Rechnung, bitte!",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0821",
    "en": "Can I try on these shoes, please?",
    "cat": "Sätze",
    "translations": {
      "de": {
        "text": "Kann ich bitte diese Schuhe anprobieren?",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0822",
    "en": "the second",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "die Sekunde, -n",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0823",
    "en": "the minute",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "die Minute, -n",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0824",
    "en": "the day",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "der Tag, -e",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0825",
    "en": "the week",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "die Woche, -n",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0826",
    "en": "the year",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "das Jahr, -e",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0827",
    "en": "the morning",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "der Morgen",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0828",
    "en": "noon; midday",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "der Mittag",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0829",
    "en": "the afternoon",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "der Nachmittag, -e",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0830",
    "en": "the evening",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "der Abend, -e",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0831",
    "en": "the night",
    "cat": "Zeit",
    "translations": {
      "de": {
        "text": "die Nacht, -ä, e",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0832",
    "en": "a meter",
    "cat": "Maße & Gewichte",
    "translations": {
      "de": {
        "text": "ein Meter",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0833",
    "en": "a centimeter",
    "cat": "Maße & Gewichte",
    "translations": {
      "de": {
        "text": "ein Zentimeter",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0834",
    "en": "a kilometer",
    "cat": "Maße & Gewichte",
    "translations": {
      "de": {
        "text": "ein Kilometer",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0835",
    "en": "a square meter",
    "cat": "Maße & Gewichte",
    "translations": {
      "de": {
        "text": "ein Quadratmeter",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0836",
    "en": "a degree",
    "cat": "Maße & Gewichte",
    "translations": {
      "de": {
        "text": "ein Grad",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0837",
    "en": "a percent",
    "cat": "Maße & Gewichte",
    "translations": {
      "de": {
        "text": "ein Prozent",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0838",
    "en": "a liter",
    "cat": "Maße & Gewichte",
    "translations": {
      "de": {
        "text": "ein Liter",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0839",
    "en": "a gram",
    "cat": "Maße & Gewichte",
    "translations": {
      "de": {
        "text": "ein Gramm",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0840",
    "en": "a pound (500g)",
    "cat": "Maße & Gewichte",
    "translations": {
      "de": {
        "text": "ein Pfund",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0841",
    "en": "a kilo(gram)",
    "cat": "Maße & Gewichte",
    "translations": {
      "de": {
        "text": "ein Kilo(gramm)",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0842",
    "en": "Germany",
    "cat": "Land",
    "translations": {
      "de": {
        "text": "Deutschland",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0843",
    "en": "the German (person)",
    "cat": "Land",
    "translations": {
      "de": {
        "text": "der/die Deutsche, -n",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0844",
    "en": "German (adjective)",
    "cat": "Land",
    "translations": {
      "de": {
        "text": "deutsch",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0845",
    "en": "Europe",
    "cat": "Land",
    "translations": {
      "de": {
        "text": "Europa",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0846",
    "en": "the European (person)",
    "cat": "Land",
    "translations": {
      "de": {
        "text": "der Europäer",
        "pron": "",
        "lit": ""
      }
    }
  },
  {
    "seedId": "de-0847",
    "en": "European (adjective)",
    "cat": "Land",
    "translations": {
      "de": {
        "text": "europäisch",
        "pron": "",
        "lit": ""
      }
    }
  }
]
;
