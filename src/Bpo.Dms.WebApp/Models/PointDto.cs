using NetTopologySuite.Geometries;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bpo.Dms.WebApp.Models
{
    public class PointDto
    {
        public double Lat { get; set; }
        public double Lng { get; set; }

        public PointDto() { }

        public PointDto(double latitude, double longitude)
        {
            Lat = longitude;
            Lng = latitude;
        }

        public PointDto(Point point)
        {
            if (point != null)
            {
                Lat = point.Coordinate.Y;
                Lng = point.Coordinate.X;
            }
        }

        public Point ToPoint()
        {
            return new Point(Lng, Lat) { SRID = 4326 };
        }
    }
}
