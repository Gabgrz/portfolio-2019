package final_version;

import de.fhpotsdam.unfolding.data.PointFeature;
import processing.core.PConstants;
import processing.core.PGraphics;

/** Implements a visual marker for land earthquakes on an earthquake map
 * 
 * @author UC San Diego Intermediate Software Development MOOC team
 *
 */
public class LandQuakeMarker extends EarthquakeMarker {
	
	
	public LandQuakeMarker(PointFeature quake) {
		
		// calling EarthquakeMarker constructor
		super(quake);
		
		// setting field in earthquake marker
		isOnLand = true;
	}


	@Override
	public void drawEarthquake(PGraphics pg, float x, float y) {
		// IMPLEMENT: drawing circle for LandQuake
		// DO NOT set the fill color.  That will be set in the EarthquakeMarker
		// class to indicate the depth of the earthquake.
		// Simply draw a centered square.
		// HINT: Notice the radius variable in the EarthquakeMarker class
		// and how it is set in the EarthquakeMarker constructor
		pg.ellipse(x, y, 2*radius, 2*radius);
		
	}
	

	// Get the country the earthquake is in
	public String getCountry() {
		return (String) getProperty("country");
	}
	
	public void showNewsButton(PGraphics pg, float x, float y)
	{
		// String title = getTitle();
		pg.pushStyle();
		
		pg.rectMode(PConstants.CORNER);
		
		pg.stroke(250,0,0);
		pg.fill(255,183,77);
		pg.rect(x, y - 30, 75, 18, 5);
		
		pg.textAlign(PConstants.LEFT, PConstants.TOP);
		pg.fill(0);
		pg.text("Find News!", x + 3 , y -29);
		
		
		pg.popStyle();
		
	}

		
}