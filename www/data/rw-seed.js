// Everyday Kinyarwanda phrases (curated, not from an official list --
// translations best-effort).
//
// No mainstream text-to-speech engine has a Kinyarwanda voice, so unlike
// English/German (spoken live via the browser's speech synthesis), a
// Kinyarwanda entry can only be played back from a real recording. An
// entry can optionally add `"audio": "audio/rw/<file>.mp3"` next to its
// "text"/"pron"/"lit" fields, pointing at a file under www/audio/rw/ --
// until such a file exists for it, the speak button for that word simply
// stays hidden. None of the entries below have one yet.
//
// Every entry has a permanent `"seedId"` (rw-0001, rw-0002, ...) that
// loadState() uses to match it against whatever's already installed --
// unlike matching on text+English, this survives the user editing an
// entry's wording. IMPORTANT: a seedId, once assigned, must never be
// reused or reassigned to a different entry, even if that entry is later
// edited or removed from this file -- existing installs still carry it.
// New entries always get a fresh id continuing the sequence (currently
// up to rw-0056); reordering existing entries in this file is fine, but
// their seedId must move with them.
window.RW_SEED_ENTRIES = 
[
  {
    "seedId": "rw-0001",
    "en": "Hello / Good day",
    "cat": "Greetings",
    "translations": {
      "rw": {
        "text": "Muraho",
        "pron": "moo-RAH-ho",
        "lit": "General greeting, any time of day."
      }
    }
  },
  {
    "seedId": "rw-0002",
    "en": "Good morning",
    "cat": "Greetings",
    "translations": {
      "rw": {
        "text": "Mwaramutse",
        "pron": "mwah-rah-MOOT-seh",
        "lit": "Said in the morning."
      }
    }
  },
  {
    "seedId": "rw-0003",
    "en": "Good evening",
    "cat": "Greetings",
    "translations": {
      "rw": {
        "text": "Mwiriwe",
        "pron": "mwee-REE-weh",
        "lit": "Said in the afternoon/evening."
      }
    }
  },
  {
    "seedId": "rw-0004",
    "en": "How are you?",
    "cat": "Greetings",
    "translations": {
      "rw": {
        "text": "Amakuru?",
        "pron": "ah-mah-KOO-roo",
        "lit": "Literally: “(any) news?” — the standard ‘how are you’."
      }
    }
  },
  {
    "seedId": "rw-0005",
    "en": "I'm fine / It's good",
    "cat": "Greetings",
    "translations": {
      "rw": {
        "text": "Ni meza",
        "pron": "nee MEH-zah",
        "lit": "Reply to “Amakuru?”. Literally “(it is) good”."
      }
    }
  },
  {
    "seedId": "rw-0006",
    "en": "Thank you",
    "cat": "Greetings",
    "translations": {
      "rw": {
        "text": "Murakoze",
        "pron": "moo-rah-KOH-zeh",
        "lit": "Polite ‘thank you’ (to one or more people)."
      }
    }
  },
  {
    "seedId": "rw-0007",
    "en": "Thank you very much",
    "cat": "Greetings",
    "translations": {
      "rw": {
        "text": "Murakoze cyane",
        "pron": "moo-rah-KOH-zeh CHAH-neh",
        "lit": "‘cyane’ = very much."
      }
    }
  },
  {
    "seedId": "rw-0008",
    "en": "Please",
    "cat": "Greetings",
    "translations": {
      "rw": {
        "text": "Nyabuneka",
        "pron": "nyah-boo-NEH-kah",
        "lit": "Used to say ‘please’."
      }
    }
  },
  {
    "seedId": "rw-0009",
    "en": "Yes",
    "cat": "Greetings",
    "translations": {
      "rw": {
        "text": "Yego",
        "pron": "YEH-go",
        "lit": ""
      }
    }
  },
  {
    "seedId": "rw-0010",
    "en": "No",
    "cat": "Greetings",
    "translations": {
      "rw": {
        "text": "Oya",
        "pron": "OH-yah",
        "lit": ""
      }
    }
  },
  {
    "seedId": "rw-0011",
    "en": "Excuse me / Sorry",
    "cat": "Greetings",
    "translations": {
      "rw": {
        "text": "Mbabarira",
        "pron": "mbah-bah-REE-rah",
        "lit": "‘Forgive me’ — to get attention or apologise."
      }
    }
  },
  {
    "seedId": "rw-0012",
    "en": "Goodbye",
    "cat": "Greetings",
    "translations": {
      "rw": {
        "text": "Murabeho",
        "pron": "moo-rah-BEH-ho",
        "lit": "Said to someone staying/leaving."
      }
    }
  },
  {
    "seedId": "rw-0013",
    "en": "See you later",
    "cat": "Greetings",
    "translations": {
      "rw": {
        "text": "Turabonana",
        "pron": "too-rah-boh-NAH-nah",
        "lit": "‘We'll see each other’."
      }
    }
  },
  {
    "seedId": "rw-0014",
    "en": "What is your name?",
    "cat": "Greetings",
    "translations": {
      "rw": {
        "text": "Witwa nde?",
        "pron": "WEET-wah n-DEH",
        "lit": "Literally: ‘You are called who?’"
      }
    }
  },
  {
    "seedId": "rw-0015",
    "en": "My name is ___",
    "cat": "Greetings",
    "translations": {
      "rw": {
        "text": "Nitwa ___",
        "pron": "NEET-wah ___",
        "lit": "‘I am called ___’."
      }
    }
  },
  {
    "seedId": "rw-0016",
    "en": "I don't understand",
    "cat": "Greetings",
    "translations": {
      "rw": {
        "text": "Sinumva",
        "pron": "see-NOOM-vah",
        "lit": "‘I don't hear/understand’."
      }
    }
  },
  {
    "seedId": "rw-0017",
    "en": "Do you speak English?",
    "cat": "Greetings",
    "translations": {
      "rw": {
        "text": "Uvuga Icyongereza?",
        "pron": "oo-VOO-gah ee-chon-geh-REH-zah",
        "lit": "‘Do you speak English?’"
      }
    }
  },
  {
    "seedId": "rw-0018",
    "en": "I speak a little Kinyarwanda",
    "cat": "Greetings",
    "translations": {
      "rw": {
        "text": "Mvuga Ikinyarwanda gicye",
        "pron": "m-VOO-gah ee-kin-yar-WAN-dah GEE-cheh",
        "lit": "‘gicye’ = a little."
      }
    }
  },
  {
    "seedId": "rw-0019",
    "en": "No problem / It's okay",
    "cat": "Greetings",
    "translations": {
      "rw": {
        "text": "Nta kibazo",
        "pron": "n-tah kee-BAH-zoh",
        "lit": "Literally ‘no problem/question’."
      }
    }
  },
  {
    "seedId": "rw-0020",
    "en": "Where is ___?",
    "cat": "Directions",
    "translations": {
      "rw": {
        "text": "___ iri he?",
        "pron": "___ EE-ree heh",
        "lit": "‘iri he’ = is where. Word order: [thing] iri he?"
      }
    }
  },
  {
    "seedId": "rw-0021",
    "en": "Where is the toilet?",
    "cat": "Directions",
    "translations": {
      "rw": {
        "text": "Ubwiherero buri he?",
        "pron": "oo-bwee-heh-REH-roh BOO-ree heh",
        "lit": ""
      }
    }
  },
  {
    "seedId": "rw-0022",
    "en": "Where is the market?",
    "cat": "Directions",
    "translations": {
      "rw": {
        "text": "Isoko riri he?",
        "pron": "ee-SOH-koh REE-ree heh",
        "lit": ""
      }
    }
  },
  {
    "seedId": "rw-0023",
    "en": "How much does it cost to go to ___?",
    "cat": "Directions",
    "translations": {
      "rw": {
        "text": "Kujya ___ ni angahe?",
        "pron": "koo-JYAH ___ nee an-GAH-heh",
        "lit": "‘Going to ___ is how much?’"
      }
    }
  },
  {
    "seedId": "rw-0024",
    "en": "I want to go to ___",
    "cat": "Directions",
    "translations": {
      "rw": {
        "text": "Nshaka kujya ___",
        "pron": "n-SHAH-kah koo-JYAH ___",
        "lit": "‘I want to go (to) ___’."
      }
    }
  },
  {
    "seedId": "rw-0025",
    "en": "Stop here, please",
    "cat": "Directions",
    "translations": {
      "rw": {
        "text": "Hagarara hano, nyabuneka",
        "pron": "hah-gah-RAH-rah HAH-no, nyah-boo-NEH-kah",
        "lit": "Useful in a taxi/moto."
      }
    }
  },
  {
    "seedId": "rw-0026",
    "en": "Left",
    "cat": "Directions",
    "translations": {
      "rw": {
        "text": "Ibumoso",
        "pron": "ee-boo-MOH-so",
        "lit": ""
      }
    }
  },
  {
    "seedId": "rw-0027",
    "en": "Right",
    "cat": "Directions",
    "translations": {
      "rw": {
        "text": "Iburyo",
        "pron": "ee-BOO-ryo",
        "lit": ""
      }
    }
  },
  {
    "seedId": "rw-0028",
    "en": "Straight ahead",
    "cat": "Directions",
    "translations": {
      "rw": {
        "text": "Imbere",
        "pron": "eem-BEH-reh",
        "lit": "‘Forward / ahead’."
      }
    }
  },
  {
    "seedId": "rw-0029",
    "en": "Here",
    "cat": "Directions",
    "translations": {
      "rw": {
        "text": "Hano",
        "pron": "HAH-no",
        "lit": ""
      }
    }
  },
  {
    "seedId": "rw-0030",
    "en": "There",
    "cat": "Directions",
    "translations": {
      "rw": {
        "text": "Hariya",
        "pron": "hah-REE-yah",
        "lit": ""
      }
    }
  },
  {
    "seedId": "rw-0031",
    "en": "Is it far?",
    "cat": "Directions",
    "translations": {
      "rw": {
        "text": "Ni kure?",
        "pron": "nee KOO-reh",
        "lit": "‘kure’ = far."
      }
    }
  },
  {
    "seedId": "rw-0032",
    "en": "It's near",
    "cat": "Directions",
    "translations": {
      "rw": {
        "text": "Ni hafi",
        "pron": "nee HAH-fee",
        "lit": "‘hafi’ = near."
      }
    }
  },
  {
    "seedId": "rw-0033",
    "en": "I'm hungry",
    "cat": "Food",
    "translations": {
      "rw": {
        "text": "Ndashonje",
        "pron": "n-dah-SHOHN-jeh",
        "lit": ""
      }
    }
  },
  {
    "seedId": "rw-0034",
    "en": "I'm thirsty",
    "cat": "Food",
    "translations": {
      "rw": {
        "text": "Mfite inyota",
        "pron": "m-FEE-teh een-YOH-tah",
        "lit": "Literally ‘I have thirst’."
      }
    }
  },
  {
    "seedId": "rw-0035",
    "en": "Water, please",
    "cat": "Food",
    "translations": {
      "rw": {
        "text": "Amazi, nyabuneka",
        "pron": "ah-MAH-zee, nyah-boo-NEH-kah",
        "lit": "‘amazi’ = water."
      }
    }
  },
  {
    "seedId": "rw-0036",
    "en": "I would like ___",
    "cat": "Food",
    "translations": {
      "rw": {
        "text": "Nifuza ___",
        "pron": "nee-FOO-zah ___",
        "lit": "‘I would like ___’."
      }
    }
  },
  {
    "seedId": "rw-0037",
    "en": "The bill, please",
    "cat": "Food",
    "translations": {
      "rw": {
        "text": "Fagitire, nyabuneka",
        "pron": "fah-gee-TEE-reh, nyah-boo-NEH-kah",
        "lit": "‘fagitire’ = bill (from French ‘facture’)."
      }
    }
  },
  {
    "seedId": "rw-0038",
    "en": "It's delicious",
    "cat": "Food",
    "translations": {
      "rw": {
        "text": "Biraryoshye",
        "pron": "bee-rah-RYOH-shyeh",
        "lit": "‘It is tasty’."
      }
    }
  },
  {
    "seedId": "rw-0039",
    "en": "I'm full / I'm satisfied",
    "cat": "Food",
    "translations": {
      "rw": {
        "text": "Narahaze",
        "pron": "nah-rah-HAH-zeh",
        "lit": ""
      }
    }
  },
  {
    "seedId": "rw-0040",
    "en": "Tea",
    "cat": "Food",
    "translations": {
      "rw": {
        "text": "Icyayi",
        "pron": "ee-CHAH-yee",
        "lit": ""
      }
    }
  },
  {
    "seedId": "rw-0041",
    "en": "Coffee",
    "cat": "Food",
    "translations": {
      "rw": {
        "text": "Ikawa",
        "pron": "ee-KAH-wah",
        "lit": ""
      }
    }
  },
  {
    "seedId": "rw-0042",
    "en": "Milk",
    "cat": "Food",
    "translations": {
      "rw": {
        "text": "Amata",
        "pron": "ah-MAH-tah",
        "lit": ""
      }
    }
  },
  {
    "seedId": "rw-0043",
    "en": "Bread",
    "cat": "Food",
    "translations": {
      "rw": {
        "text": "Umugati",
        "pron": "oo-moo-GAH-tee",
        "lit": ""
      }
    }
  },
  {
    "seedId": "rw-0044",
    "en": "Meat",
    "cat": "Food",
    "translations": {
      "rw": {
        "text": "Inyama",
        "pron": "een-YAH-mah",
        "lit": ""
      }
    }
  },
  {
    "seedId": "rw-0045",
    "en": "I don't eat meat",
    "cat": "Food",
    "translations": {
      "rw": {
        "text": "Sinya inyama",
        "pron": "seen-YAH een-YAH-mah",
        "lit": "‘I don't eat meat’."
      }
    }
  },
  {
    "seedId": "rw-0046",
    "en": "How much is it?",
    "cat": "Shopping",
    "translations": {
      "rw": {
        "text": "Ni angahe?",
        "pron": "nee an-GAH-heh",
        "lit": "The key shopping phrase."
      }
    }
  },
  {
    "seedId": "rw-0047",
    "en": "That's expensive",
    "cat": "Shopping",
    "translations": {
      "rw": {
        "text": "Birahenze",
        "pron": "bee-rah-HEN-zeh",
        "lit": "‘It is expensive’."
      }
    }
  },
  {
    "seedId": "rw-0048",
    "en": "Reduce the price a little",
    "cat": "Shopping",
    "translations": {
      "rw": {
        "text": "Gabanya gato",
        "pron": "gah-BAHN-yah GAH-toh",
        "lit": "For bargaining. ‘Reduce a little’."
      }
    }
  },
  {
    "seedId": "rw-0049",
    "en": "I want to buy this",
    "cat": "Shopping",
    "translations": {
      "rw": {
        "text": "Nshaka kugura iki",
        "pron": "n-SHAH-kah koo-GOO-rah EE-kee",
        "lit": ""
      }
    }
  },
  {
    "seedId": "rw-0050",
    "en": "I don't want it",
    "cat": "Shopping",
    "translations": {
      "rw": {
        "text": "Sinshaka",
        "pron": "seen-SHAH-kah",
        "lit": "‘I don't want (it)’."
      }
    }
  },
  {
    "seedId": "rw-0051",
    "en": "Do you have ___?",
    "cat": "Shopping",
    "translations": {
      "rw": {
        "text": "Ufite ___?",
        "pron": "oo-FEE-teh ___",
        "lit": "‘Do you have ___?’"
      }
    }
  },
  {
    "seedId": "rw-0052",
    "en": "Money",
    "cat": "Shopping",
    "translations": {
      "rw": {
        "text": "Amafaranga",
        "pron": "ah-mah-fah-RAN-gah",
        "lit": "Also the word for Rwandan francs."
      }
    }
  },
  {
    "seedId": "rw-0053",
    "en": "Give me change, please",
    "cat": "Shopping",
    "translations": {
      "rw": {
        "text": "Mpa amasaranga asigaye, nyabuneka",
        "pron": "m-PAH ah-mah-sah-RAN-gah ah-see-GAH-yeh",
        "lit": "Rough; ‘give me the remaining money’."
      }
    }
  },
  {
    "seedId": "rw-0054",
    "en": "One",
    "cat": "Shopping",
    "translations": {
      "rw": {
        "text": "Rimwe",
        "pron": "REEM-weh",
        "lit": "Counting (1)."
      }
    }
  },
  {
    "seedId": "rw-0055",
    "en": "Two",
    "cat": "Shopping",
    "translations": {
      "rw": {
        "text": "Kabiri",
        "pron": "kah-BEE-ree",
        "lit": "Counting (2)."
      }
    }
  },
  {
    "seedId": "rw-0056",
    "en": "Three",
    "cat": "Shopping",
    "translations": {
      "rw": {
        "text": "Gatatu",
        "pron": "gah-TAH-too",
        "lit": "Counting (3)."
      }
    }
  }
]
;
