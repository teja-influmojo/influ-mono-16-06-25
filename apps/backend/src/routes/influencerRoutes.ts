import { Router } from 'express';
import { onboardInfluencer } from '../controllers/influencerController';

const router = Router();

// Route for influencer onboarding
router.post('/onboard', onboardInfluencer);

export default router; 