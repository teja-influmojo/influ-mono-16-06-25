import { Request, Response } from 'express';
import { prisma } from '../app';

export const onboardInfluencer = async (req: Request, res: Response) => {
  try {
    const {
      name,
      email,
      phoneNumber,
      age,
      bio,
      socialLinks
    } = req.body;

    // Validate required fields
    if (!name || !email) {
      return res.status(400).json({
        error: 'Name and email are required'
      });
    }

    // Create the influencer in the database
    const influencer = await prisma.user.create({
      data: {
        name,
        email,
        phoneNumber,
        role: 'INFLUENCER',
        bio,
        socialLinks: socialLinks ? JSON.parse(JSON.stringify(socialLinks)) : null
      }
    });

    res.status(201).json({
      message: 'Influencer onboarded successfully',
      influencer
    });
  } catch (error) {
    console.error('Error onboarding influencer:', error);
    res.status(500).json({
      error: 'Failed to onboard influencer'
    });
  }
}; 