import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import PortfolioCard from "@/components/portfolio-card";

import { Symptoms, Hormones } from "../data/healthGuideData";
import { Nutrients } from "../data/nutrientsData";
import { Foods } from "../data/foodsData";
import { Recipes } from "../data/recipesData";

const HealthGuide = () => {
  const [step, setStep] = useState(1);

  const [selectedSymptom, setSelectedSymptom] = useState(null);
  const [selectedHormone, setSelectedHormone] = useState(null);
  const [selectedMealType, setSelectedMealType] = useState(null);

  // 🔁 Reset
  const reset = () => {
    setStep(1);
    setSelectedSymptom(null);
    setSelectedHormone(null);
    setSelectedMealType(null);
  };

  //Filter Rezepte

  const filteredRecipes = Recipes.filter((recipe) => {
    if (!selectedHormone || !selectedSymptom) return false;
  
    const hasAllNutrients = selectedHormone.nutrientIds.every((n) =>
      recipe.nutrientIds.includes(n)
    );
  
    const matchesHormone = recipe.hormoneIds.includes(selectedHormone.id);
    const matchesSymptom = recipe.symptomIds.includes(selectedSymptom.id);
  
    return hasAllNutrients && matchesHormone && matchesSymptom;
  });

  // 🔹 Step 1 → Symptom wählen
  const handleSymptom = (symptom) => {
    setSelectedSymptom(symptom);

    const hormone = Hormones.find(
      (h) => h.id === symptom.hormoneId
    );

    setSelectedHormone(hormone);

    setStep(2);
  };

  // 🔹 Daten vorbereiten
  const nutrients = selectedHormone
    ? Nutrients.filter((n) =>
        selectedHormone.nutrientIds.includes(n.id)
      )
    : [];

  const foods = Foods.filter((food) =>
    nutrients.some((n) =>
      food.nutrientIds.includes(n.id)
    )
  );


  

  return (
    <section>
      <Container>

       {/* 🔹 STEP 1 */}
        {step === 1 && (
          <Row className="mb-4 text-center">
            <Col>
              <h2>Was ist denn los?</h2>

              <Row className="justify-content-center">
                {Symptoms.map((s) => (
                  <Col lg={3} md={4} sm={6} key={s.id} className="mb-4">
                    
                    <div
                      onClick={() => handleSymptom(s)}
                      className="symptom-card"
                    >
                      <img
                        src={s.image}
                        alt={s.label}
                        className="symptom-image"
                      />

                      <p>{s.label}</p>
                    </div>

                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        )}

        {/* 🔹 STEP 2 – Hormon */}
        {step === 2 && selectedHormone && (
          <Row className="mb-4 text-center">
            <Col>
              <h3>Das ist das Hormon was dir fehlt</h3>
              <p>{selectedHormone.name}</p>

              <Button onClick={() => setStep(3)}>
                Weiter
              </Button>
            </Col>
          </Row>
        )}

        {/* 🔹 STEP 3 – Nährstoffe */}
        {step === 3 && (
          <Row className="mb-4 text-center">
            <Col>
              <h3>Das sind die Nährstoffe die dir gut tun</h3>

              {nutrients.map((n) => (
                <div key={n.id}>
                  <strong>{n.name}</strong>
                  <p>{n.description}</p>
                </div>
              ))}

              <Button onClick={() => setStep(4)}>
                Weiter
              </Button>
            </Col>
          </Row>
        )}

        {/* 🔹 STEP 4 – Lebensmittel */}
        {step === 4 && (
          <Row className="mb-4 text-center">
            <Col>
              <h3>Das sind die Lebensmittel die dir helfen</h3>

              {foods.map((f) => (
                <div key={f.id}>{f.name}</div>
              ))}

              <Button onClick={() => setStep(5)}>
                Weiter
              </Button>
            </Col>
          </Row>
        )}

        {/* 🔹 STEP 5 – Meal Auswahl */}
        {step === 5 && (
          <Row className="mb-4 text-center">
            <Col>
              <h3>Wann möchtest du essen?</h3>

              <Button onClick={() => setSelectedMealType("fruehstueck")}>
                Frühstück
              </Button>

              <Button onClick={() => setSelectedMealType("mittag")}>
                Mittag
              </Button>

              <Button onClick={() => setSelectedMealType("abend")}>
                Abend
              </Button>

              <div className="mt-3">
                <Button onClick={() => setStep(6)}>
                  Rezepte anzeigen
                </Button>
              </div>
            </Col>
          </Row>
        )}

        {/* 🔹 STEP 6 – Rezepte */}
        {step === 6 && (
         <Row id="Grid" className="custom">
         {filteredRecipes.map((recipe) => (
           <Col lg={4} md={6} sm={12} key={recipe.id}>
             <PortfolioCard data={recipe.portfolio} />
           </Col>
         ))}
       </Row>
        )}

      </Container>
    </section>
  );
};

export default HealthGuide;